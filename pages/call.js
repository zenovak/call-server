import { Button2, IconButton } from "@components/Primitives/Button";
import { TextInput } from "@components/Primitives/Form";
import { ContainerPX2Y } from "@components/Primitives/Layout";
import { TextGroupHeading, TextGroupSectionHeading } from "@components/Primitives/Typography";
import { getRandomInt } from "@utils/math";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


export default function Call() {
    const {register, handleSubmit, formState: { isValid }} = useForm();
    const router = useRouter();

    // test for camera toggles
    const [userMedia, setUserMedia] = useState({video: false, audio: false});
    const [supportedDevices, setSupportedDevices] = useState(null);
    const [localStream, setLocalStream] = useState(null);

    function createRoom() {
        router.push(`/room/${getRandomInt(99999)}?type=offer`);
    }

    function joinRoom({roomId}) {
        router.push(`/room/${roomId}?type=answer`);
    }

    function toggleCamera() {
        if (!supportedDevices.video) {
            console.log("Dont have camera!");
            return;
        }

        setUserMedia({
            video: !userMedia.video,
            audio: userMedia.audio
        });
        
    }
    function toggleMic() {
        if (supportedDevices.audio) {
            setUserMedia({
                video: userMedia.video,
                audio: !userMedia.audio
            })
        }
    }
    // update Device stream obj when toggle
    useEffect(()=> {
        console.log(userMedia);
        if (userMedia.audio || userMedia.video) {
            navigator.mediaDevices
                .getUserMedia(userMedia)
                .then(
                    (stream) => setLocalStream(stream),
                    (error) => {
                        console.log(error);
                    }
                );
        } else {
            setLocalStream(new MediaStream());
        }

    },[userMedia]);

    // Check for supported devices
    useEffect(() => {
        const devices = navigator.mediaDevices.enumerateDevices()
        .then((devices) => {
            devices.forEach((device)=> {
                if (device.kind == "videoinput") {
                    setSupportedDevices({video: true, ...supportedDevices});
                }
                if (device.kind == "audioinput") {
                    setSupportedDevices({audio: true, ...supportedDevices});
                }
            })
        })
    }, []);

    return (
        <ContainerPX2Y>
        <div className="flex flex-col lg:flex-row gap-16 w-full">
            <div className="flex-1">
                <TextGroupHeading 
                    title="Video Calls for everyone"
                    paragraph="This is a free and open webRTC signalling server for testing and development of RealTime chat apps"
                    className="max-w-2xl text-left flex-1 mb-8"
                />

                <div className="md:flex space-y-4 md:space-y-0 gap-8 items-center">
                    <Button2 
                        onClick={createRoom}
                        className="bg-slate-600 text-gray-100 hover:bg-slate-500 hover:-translate-y-1 transition-transform hover:shadow">
                        New room
                    </Button2>
                    <form onSubmit={handleSubmit(joinRoom)} className="flex gap-4 items-center">
                        <TextInput
                            required
                            placeholder="Enter a code"
                            name="roomId"
                            register={register}
                            registerProps={{required: true}}
                            type="text"
                        />
                        <Button2 
                            disabled={!isValid}
                            type="submit"
                            className="font-semibold hover:bg-slate-200 disabled:text-gray-200 ">
                            Join
                        </Button2>
                    </form>
                </div>
            </div>
            <div className="flex-1">
                <video 

                />
                <TextGroupSectionHeading 
                    title="Voice and Camera"
                    paragraph="Ensure your own video feed is working properly"
                />

                <IconButton
                    onClick={toggleCamera}
                    icon="mdi:video"
                    className="w-6 h-6"
                />
            </div>
        </div>
        </ContainerPX2Y>
    );
}