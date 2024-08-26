const { useEffect, useState } = require("react");


const ice_servers = [
    'stun:stun1.l.google.com:19302', 
    'stun:stun2.l.google.com:19302'
];

const rtcConfig = {
    iceServers: [
        {
            urls: ice_servers,
        },
    ],
    iceCandidatePoolSize: 10,
    configuration: {
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
    },
};


export function useRTCPeerConnection() {
    const [peerConnection, setPeerConnection] = useState(null);

    function addRemoteTrackToVideo(id) {
        const remoteVideo = document.getElementById(id);
        const remoteStream = new MediaStream();

        peerConnection.ontrack = (event) => {
            event.streams[0].getTracks().forEach((track) => {
                remoteStream.addTrack(track);
            });
        };
        remoteVideo.srcObject = remoteStream;
    }

    useEffect(()=>{
        const peerConnection = new RTCPeerConnection(rtcConfig);
        setPeerConnection(peerConnection);
    }, [])

    return {peerConnection, addRemoteTrackToVideo };
}


