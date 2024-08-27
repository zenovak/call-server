import { ContainerPXYY, ContainerPaddedXY } from "@components/Primitives/Layout";
import { TextGroupHeading } from "@components/Primitives/Typography";


export const Hero2 = ({title, paragraph, metaText, children}) => {
    return (
        <ContainerPaddedXY>
        <div className="lg:flex my-auto">
            <TextGroupHeading 
                className="text-left flex-1"
                size="large"
                metaText={metaText}
                title={title}
                paragraph={paragraph}/>
            <div
                className="flex-1 mt-16 sm:mt-24 lg:mr-0 lg:mt-0 "
            >
                <div
                    className="lg:ml-10"
                >
                {children}
                </div>
            </div>
        </div>
        </ContainerPaddedXY>
    );
}