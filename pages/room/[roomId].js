import { IconButton } from "@components/Primitives/Button";
import { ContainerP, ContainerPX, ContainerPX2Y } from "@components/Primitives/Layout";
import { useMedia } from "@utils/client/useMedia";
import { useRTCPeerConnection } from "@utils/client/webRtc";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export default function Room() {
  const router = useRouter();
  const roomId = router.query.roomId;

  const { localStream, userMedia, toggleCamera, toggleMic} = useMedia();
  const { peerConnection, addRemoteTrackToVideo } = useRTCPeerConnection();

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


  return (
    <div className="bg-gray-900 w-screen h-screen">
      {/* Video Feed */}
      <div className="flex max-w-screen-xl mx-auto gap-4 py-12">
        <div className="flex-1">
          <video autoPlay playsInline id="remoteView" className="w-full h-full rounded-md bg-gray-800"/>
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