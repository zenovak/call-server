import { Button2 } from "@components/Primitives/Button";
import { TextInput } from "@components/Primitives/Form";
import { ContainerPX2Y } from "@components/Primitives/Layout";
import { TextGroupHeading } from "@components/Primitives/Typography";
import { useForm } from "react-hook-form";


export default function Call() {
    const {register, handleSubmit, formState: { isValid }} = useForm();

    function joinRoom({roomId}) {
        console.log(roomId)
    }
    console.log(isValid);
    return (
        <ContainerPX2Y>
        <div className="flex w-full">
            <div className="flex-1 mb-4">
                <TextGroupHeading 
                    title="Video Calls for everyone"
                    className="max-w-2xl text-left flex-1"
                />
                <div className="flex gap-8 items-center">
                    <Button2 
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

            </div>
        </div>
        </ContainerPX2Y>
    );
}