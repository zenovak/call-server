import { addAnswerCandidate, addOfferCandidate, getAnswerCandidate, getOfferCandidates, useICECandidates } from "@utils/client/iceCandidate";
import { createRoomAndSendOffer, getRoom, getRoomOffer, sendRoomAnswer, useRoom, useSDPAnswer } from "@utils/client/room";
import { useRTCPeerConnection } from "@utils/client/webRtc";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


const testRoom = 6;
export default function Home() {
  const { register, handleSubmit } = useForm();
  const { peerConnection, addRemoteTrackToVideo } = useRTCPeerConnection();

  const [listenType, setListenType] = useState(null);
  const [startListeningSDPAnswer, setStartListeningSDPAnswer] = useState(false);

  // Signalling server polling services. 
  useSDPAnswer(testRoom, startListeningSDPAnswer, async (sdp) => {
    // listens for remote answers
    peerConnection && await peerConnection.setRemoteDescription(sdp);
  });

  // listens for ice candidites.
  useICECandidates(testRoom, listenType, (iceCandidate) => {
    console.log(iceCandidate);
    peerConnection && peerConnection.addIceCandidate(iceCandidate);
  });
  
  
  async function activateCameras() {
    const stream = await navigator.mediaDevices.getUserMedia({video: false, audio: true});
    // const stream = navigator.mediaDevices.getUserMedia(constraints);
    
    stream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, stream);
    });

    const localView = document.getElementById("localView");
    localView.srcObject = stream;

    addRemoteTrackToVideo("remoteView");
  }


  async function call() {
    const sdpOffer = await peerConnection.createOffer();

    peerConnection.onicecandidate = (event)=> {
      // must register ice candidate event BEFORE setting local desciption
      event.candidate && addOfferCandidate(testRoom, event.candidate.toJSON());
    };

    await createRoomAndSendOffer(testRoom, sdpOffer);
    await peerConnection.setLocalDescription(sdpOffer);

    setListenType("ANSWER");
    setStartListeningSDPAnswer(true); 
  }


  async function answerCall() {
    setListenType("OFFER");

    peerConnection.onicecandidate = (event)=> {
      // must register ice candidate event BEFORE setting local desciption
      event.candidate && addAnswerCandidate(testRoom, event.candidate.toJSON());
    };

    const sdpOffer = await getRoomOffer(testRoom);
    await peerConnection.setRemoteDescription(sdpOffer);

    const sdpAnswer = await peerConnection.createAnswer();
    await sendRoomAnswer(testRoom, sdpAnswer);
    await peerConnection.setLocalDescription(sdpAnswer);
  }


  return (
    <div className="py-24 mx-auto max-w-7xl">
      <div className=" flex gap-8 items-center justify-center mb-8">
        {/* Optionally should also set local vid to muted here */}
        <video id="localView" autoPlay={true} playsInline muted className="bg-black"/> 
        <video id="remoteView" autoPlay={true} playsInline className="bg-black"/>
      </div>

      <div className="flex gap-4">
        <input className="w-28 border" />
        <button className="px-8 py-4 bg-blue-400" onClick={activateCameras}> Turn Cams on </button>
        <button onClick={call}> Call</button>
        <button onClick={answerCall}> Answer </button>
      </div>
    </div>
  );
}
