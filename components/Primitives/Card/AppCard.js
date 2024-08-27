import Image from "next/image";
import { Heading_sm, Text, Text_sm } from "../Typography";

/**
 * App cards are designed to display a title, paragraph, and An App icon on the side.
 * Meant for Appstore like lists
 */
export const AppCard = ({title, paragraph, image, className, override, ...props}) => {
    return (
        <div 
            className={override? className: "w-full h-full flex gap-4 items-center px-8 py-4 " + className} 
            {...props}>
            <div className="flex-1">
                <h4 className="text-xl text-slate-900 font-bold mb-4">{title}</h4>
                <Text_sm>{paragraph}</Text_sm>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                    alt={"img of "+ title}
                    width="100"
                    height="100"
                    className="object-cover object-center"
                    src={image || "/images/default/avatar.jpg"}
                />
            </div>
        </div>
    );
}

export const AppCard2x2 = ({title, paragraph, image, className, override, ...props}) => {
    return (
        <div 
            className={override? className: "flex gap-4 flex-col px-8 py-4 " + className }
            {...props}>
            <h4 className="text-lg text-slate-900 font-bold ">{title}</h4>
            <Text_sm>{paragraph}</Text_sm>
            <div className="w-full flex items-center justify-center">
                <Image 
                    alt={"img of " + title}
                    width="200"
                    height="200"
                    className="bject-cover object-center"
                    src={image || "/images/default/default.png"}
                />
            </div>
        </div>
    );
}