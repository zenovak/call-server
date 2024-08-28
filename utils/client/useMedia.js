import { useEffect, useState } from "react";

/**
 * A media hook for getting the user cameras and mic.\
 * mediaStream: the mediaStream object. 
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
export function useMedia() {
    const [userMedia, setUserMedia] = useState({ video: false, audio: false });
    const [supportedDevices, setSupportedDevices] = useState({video:false, audio: false});
    const [previousToggle, setPreviousToggle] = useState();
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
        console.log(supportedDevices);

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
        if (!userMedia.audio && !userMedia.video) {
            setLocalStream(new MediaStream());
            return;
        }
        navigator.mediaDevices
            .getUserMedia(userMedia)
            .then(
                (stream) => {
                    setLocalStream(stream)
                },
                (error) => {
                    console.log(error);
                    setUserMedia(previousToggle); // revert
                }
            );
    }, [userMedia]);



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

