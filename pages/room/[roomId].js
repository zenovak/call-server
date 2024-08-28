import { IconButton } from "@components/Primitives/Button";
import { ContainerP, ContainerPX, ContainerPX2Y } from "@components/Primitives/Layout";
import { addAnswerCandidate, addOfferCandidate, useICECandidates } from "@utils/client/iceCandidate";
import { createRoomAndSendOffer, getRoomOffer, sendRoomAnswer, useSDPAnswer } from "@utils/client/room";
import { useMedia } from "@utils/client/useMedia";
import { useRTCPeerConnection } from "@utils/client/webRtc";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";



export default function Room() {
  const router = useRouter();
  const roomId = router.query.roomId;
  const type = router.query.type;
  const [iceListeningType, setIceListeningType] = useState(null);
  const { localStream, userMedia, toggleCamera, toggleMic} = useMedia();
  const { peerConnection, addRemoteTrackToVideo } = useRTCPeerConnection();
  const [ startListeningSDPAnswer, setStartListeningSDPAnswer] = useState(false);
  
  // ----------------------- Signalling events -------------------------------
  useICECandidates(roomId, iceListeningType, (iceCandiate)=>{
    peerConnection && peerConnection.addIceCandidate(iceCandiate);
  });

  // -------------------------- listening for offer side ----------------------
  useSDPAnswer(roomId, startListeningSDPAnswer, async (sdpAnswer)=>{
    peerConnection && await peerConnection.setRemoteDescription(sdpAnswer);
  });

  // -------------------------- Initiation ------------------------------------
  useEffect(()=>{
    if (!peerConnection) {
      return;
    }
    addRemoteTrackToVideo("remoteView");
  },[peerConnection]);

  useEffect(()=> {
    if (!localStream) {
      return;
    }

    localStream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, localStream);
    });

    const localView = document.getElementById("localView");
    localView.srcObject = localStream;

  }, [localStream]);

  // ------------------------- on Ready Controls -----------------------------
  async function OfferIntiatorReady() {
    const sdpOffer = await peerConnection.createOffer();
    await createRoomAndSendOffer(roomId, sdpOffer);

    peerConnection.onicecandidate = (event)=> {
      // must register ice candidate event BEFORE setting local desciption
      event.candidate && addOfferCandidate(roomId, event.candidate.toJSON());
    };

    await peerConnection.setLocalDescription(sdpOffer);
    setStartListeningSDPAnswer(true);
    setIceListeningType("ANSWER");
  }

  async function AnswerSenderReady() {
    const sdpOffer = await getRoomOffer(roomId);

    peerConnection.onicecandidate = (event)=> {
      // must register ice candidate event BEFORE setting local desciption
      event.candidate && addAnswerCandidate(roomId, event.candidate.toJSON());
    };

    await peerConnection.setRemoteDescription(sdpOffer);

    const sdpAnswer = await peerConnection.createAnswer();
    await sendRoomAnswer(roomId, sdpAnswer);
    await peerConnection.setLocalDescription(sdpAnswer);
    setIceListeningType("OFFER");
  }

  function userMediaOn() {
    return userMedia.video || userMedia.audio;
  }

  async function onReadyClick() {
    console.log("answer side called");

    if (!userMediaOn()) {
      toast.error("Make sure mic or video is On");
      return;
    }
    if (type == "offer") {
      await OfferIntiatorReady();
      return;
    }
    if (type == "answer") {
      await AnswerSenderReady();
      return;
    }
  }

  return (
    <div className="bg-gray-900 w-screen h-screen">
      
      {/* Video Feed */}
      <div className="flex max-w-screen-xl mx-auto gap-4 py-12">
        <div className="flex-1 relative">
          <video autoPlay playsInline id="remoteView" className="w-full h-full rounded-md bg-gray-800"/>
          <div 
            className={startListeningSDPAnswer? "hidden" : "absolute inset-0  flex items-center justify-center"} 
          >
            <button
              className="text-gray-50 bg-gray-950 px-4 py-2 rounded-lg disabled:bg-gray-600"
              onClick={onReadyClick}>
              Ready
            </button>
          </div>
          <span className="block text-gray-100 px-4 py-2 font-semibold">
            Guest
          </span>
        </div>
        <div className="flex-1">
          <video autoPlay playsInline id="localView" className="w-full h-full rounded-md bg-gray-800"/>
          <span className="block text-gray-100 px-4 py-2 font-semibold">
              You
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full fixed bottom-12">
      <ContainerP className="flex gap-4">
        <IconButton 
          onClick={toggleCamera}
          icon={userMedia.video? "mdi:video": "mdi:video-off"}
          className="w-12 h-12 text-gray-200 bg-gray-800 p-2 rounded-full"
        />
        <IconButton 
          onClick={toggleMic}
          icon={userMedia.audio? "mdi:microphone" : "mdi:microphone-off"}
          className="w-12 h-12 text-gray-200 bg-gray-800 p-2 rounded-full"
        />
      </ContainerP>
      </div>
    </div>
  );
}