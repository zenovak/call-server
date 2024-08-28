import { useEffect, useState } from "react";

/**
 * A media hook for getting the user cameras and mic.\
 * mediaStream: the mediaStream object. 
 * 
 * @param {hardToggle} hardToggle. bool. Whether to completely renew a mediaStream when toggle is triggered.
 * 
 * @example
 * ```jsx
 * const {
 *      userMedia,         // the currently in use user's video/audio feed. Example: {video:false, audio:true}
 *      supportedDevices,  // capture devices available. example: {video: true, audio:true}
 *      localStream,       // the MediaStream object from the user's feed.
 *      toggleMic,         // turns mic on or off
 *      toggleVideo        // turns video on or off
 * } = useMedia();
 * 
 * function handleClick() {
 *     toggleMic();
 * }
 * //... your video component should use localStream like so...
 * <video src={localStream} autoplay playsinline/>
 * ```
 * @returns 
 */
export function useMedia(hardToggle) {
    const [userMedia, setUserMedia] = useState({ video: false, audio: false });
    const [supportedDevices, setSupportedDevices] = useState({video:false, audio: false});
    const [previousToggle, setPreviousToggle] = useState({video: false, audio: false});
    const [firstToggle, setFirstToggle] = useState({video: true, audio: true});
    const [localStream, setLocalStream] = useState(null);

    function toggleCamera() {
        if (!supportedDevices.video) {
            return;
        }
        setPreviousToggle(userMedia);
        setUserMedia({
            video: !userMedia.video,
            audio: userMedia.audio
        });
    }

    function toggleMic() {
        if (!supportedDevices.audio) {
            return;
        }
        setPreviousToggle(userMedia);
        setUserMedia({
            video: userMedia.video,
            audio: !userMedia.audio
        });
    }

    // update Device stream obj when toggle
    useEffect(() => {
        if (hardToggle) {
            useHardToggle();
        } else {
            useSoftToggle();
        }

    }, [userMedia]);

    // toggles camera/mic on or off without stopping the tracks
    function useSoftToggle() {
        if (firstToggle.video && userMedia.video) {
            setFirstToggle({video: false, audio: firstToggle.audio});
            toggleMedia(userMedia, previousToggle);
            console.log("Enabling video for fisrt time");
        }
        if (firstToggle.audio && userMedia.audio) {
            setFirstToggle({video: firstToggle.video, audio:false});
            toggleMedia(userMedia, previousToggle);
            console.log("Enabling audio for fisrt time");
        }

        if (!localStream) {
            return;
        }
        if (!firstToggle.audio && localStream.getAudioTracks()[0]) {
            localStream.getAudioTracks()[0].enabled = userMedia.audio;
        } 
        if (!firstToggle.video && localStream.getVideoTracks()[0]) {
            localStream.getVideoTracks()[0].enabled = userMedia.video;
        }
    }

    // stopping the tracks and resetting when camera/mic turns on or off
    function useHardToggle() {
        if (!useMedia.video && previousToggle.video) {
            // was toggled on previously now off. so stop video tracks
            localStream.getVideoTracks()[0].stop();
        }
        if (!userMedia.audio && previousToggle.audio) {
            localStream.getAudioTracks()[0].stop();
        }

        // if both are currently empty. set local stream to new plain stream
        if (!userMedia.audio && !userMedia.video) {
            setLocalStream(new MediaStream());
            return;
        }

        toggleMedia(userMedia, previousToggle);
    }

    function toggleMedia(userMediaSettings, revertSettings) {
        navigator.mediaDevices
            .getUserMedia(userMediaSettings)
            .then(
                (stream) => {
                    setLocalStream(stream)
                },
                (error) => {
                    console.log(error);
                    setUserMedia(revertSettings); // revert
                }
            );
    }



    // Check for supported devices
    useEffect(() => {
        const devices = navigator.mediaDevices.enumerateDevices()
            .then((devices) => {
                const supported = {
                    video: false,
                    audio: false
                }
                devices.forEach((device) => {
                    if (device.kind == "videoinput") {
                        supported.video = true;
                    }
                    if (device.kind == "audioinput") {
                        supported.audio = true;
                    }
                    setSupportedDevices(supported);
                })
            });
    }, []);

    return { localStream, userMedia, supportedDevices, toggleCamera, toggleMic }
}

