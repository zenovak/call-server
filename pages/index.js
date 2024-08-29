import { Button2, IconButton } from "@components/Primitives/Button";
import { TextInput } from "@components/Primitives/Form";
import { ContainerPX2Y } from "@components/Primitives/Layout";
import { TextGroupHeading, TextGroupSectionHeading } from "@components/Primitives/Typography";
import { getRandomInt } from "@utils/math";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


export default function Home() {
    const {register, handleSubmit, formState: { isValid }} = useForm();
    const router = useRouter();

    function createRoom() {
        router.push(`/room/${getRandomInt(99999)}?type=offer`);
    }

    function joinRoom({roomId}) {
        router.push(`/room/${roomId}?type=answer`);
    }


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
                        className="bg-slate-600 text-gray-100 sm:hover:bg-slate-500 sm:hover:-translate-y-1 transition-transform hover:shadow">
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
                
            </div>
        </div>
        </ContainerPX2Y>
    );
}