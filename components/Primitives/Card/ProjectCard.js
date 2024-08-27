import { Portrait3x2 } from "../Media/Portrait"
import { Text } from "../Typography";



export const ProjectCard = ({className, title, paragraph, metaText, image, href, ...props}) => {
    return (

    <div
        className={"relative rounded-3xl flex flex-col px-4 pt-2 " + className}
        {...props}
    >
        
        <div className="absolute hidden inset-0 backdrop-blur-sm bg-slate-400 hover:block">
            <Text>{paragraph}</Text>
        </div>

        <div className="text-right">
            <p className="text-base text-slate-800/85">
                {metaText}
            </p>
            <h4 className=" text-2xl text-slate-900/85 font-bold">
                {title}
            </h4>
        </div>

        <div>
        <div className="mt-6 lg:ml-8 w-[900px] relative">
            <Portrait3x2 image={image}/>
        </div>
        </div>

    </div>
    );
}