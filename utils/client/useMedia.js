
/**
 * A media hook for getting the user cameras and mic.\
 * mediaStream: the mediaStream object. Example usage: \
 * `<video srcObject={mediaStream} />`\
 * activateStream: retrieves the mediaStream.\
 * ({video: false, audio: true}) => {void}
 * @returns 
 */
export function useMedia() {
    const [mediaStream, setMediaStream] = useState(null);

    const activateStream = async (config) => {
        const stream = await navigator.mediaDevices.getUserMedia(config);
        setMediaStream(stream);
    }
    return {mediaStream, activateStream}
}

