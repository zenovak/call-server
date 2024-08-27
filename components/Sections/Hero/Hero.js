import { ConstrainedContainer, ContainerPXYY } from "@components/Primitives/Layout";
import { MotionBTTContainer } from "@components/Primitives/Motion";
import { BackgroundImage } from "@components/Primitives/Panel";
import Image from "next/image";


// Where text body is centered
const Centred = ({ id, title, paragraph, metaText, image, children }) => {
    return (
        <BackgroundImage
            image={image}
        >
            {/* Shadow Image tint */}
            <div
                className="bg-gradient-to-t from-black-900/90 to-gray-900/50"
            >
                <ContainerPXYY>
                    <MotionBTTContainer>
                        <div className="text-center mx-auto">
                            <h1 className="font-serif lg:text-6xl text-5xl text-white/90">
                                {title}
                            </h1>
                            <h2 className="mt-2 mb-0 font-light text-white/75 lg:text-2xl text-lg">
                                {paragraph}
                            </h2>
                            <p className="line-clamp-7 text-white/75">{metaText}</p>
                            {children}
                        </div>
                    </MotionBTTContainer>
                </ContainerPXYY>
            </div>
        </BackgroundImage>
    );
};

// Where text body is aligned at the bottom
const Bottom = ({ id, title, paragraph, metaText, image, children }) => {
    return (
        <article className="min-h-screen relative overflow-hidden shadow transition hover:shadow-lg">
            <Image
                width="1000"
                height="1000"
                alt=""
                src={image}
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="min-h-screen flex flex-col justify-end relative bg-gradient-to-t  from-black-900/90 to-gray-900/50">
                {/* {Second shadow box (text)} */}
                <div className="bg-gradient-to-t  bg-black bg-opacity-30">
                    <div className="p-4 sm:p-6 xl:w-[80rem] max-w-constant mx-auto">
                        <div className="flex flex-col items-start p-4 sm:p-6">
                            <h1 className="font-serif lg:text-6xl text-5xl text-white/90">
                                {title}
                            </h1>
                            <h2 className="mt-2 mb-0 font-light text-white/75 lg:text-2xl text-lg">
                                {paragraph}
                            </h2>
                            <p className="line-clamp-7 text-white/75">
                                {metaText}
                            </p>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

const TopLined = ({title, image, paragraph, metaText}) => {
    return (
        <section>
            <Image
                width="1000"
                height="1000"
                alt=""
                src={image}
                className="absolute inset-0 h-full w-full object-cover"
            />
        </section>
    );
};

const LeftGlass = ({id, title, image, paragraph, metaText, children}) => {
    const bgImage = {
        backgroundImage: `url(${image})`
    }

    return (
        <section 
            className="bg-no-repeat bg-cover"
            style={bgImage}
        >
            {/* Gradiant filter layer */}
            <div className="w-full h-full bg-gradient-to-t from-black-900/90 to-gray-900/50 ">
                {/* Content layer: Here defines the sizing and layout*/}
                <div className="mx-auto max-w-constant xl:w-constant grid grid-cols-1 md:grid-cols-5">
                    {/* Glass */}
                        <div className="backdrop-blur-md bg-white/5 col-span-3">
                            {/* Content Group */}
                            <MotionBTTContainer>
                                <div className="py-32 sm:py-48 lg:py-56 px-8 flex flex-col gap-4">
                                    <Image
                                        src="/avatar.png"
                                        className="rounded-full w-32 h-32 object-cover"
                                        width="250"
                                        height="250"
                                    />
                                    <h1 className="font-serif lg:text-6xl text-5xl text-white/90">{title}</h1>
                                    <p className="text-3xl lg:text-4xl text-white/90">{paragraph}</p>
                                    {children}
                                </div>
                            </MotionBTTContainer>
                            
                        </div>                    
                    <div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export const Hero = ({
    id,
    variant,
    title,
    paragraph,
    metaText,
    image,
    children
}) => {
    var SelectedHero = null;

    switch (variant) {
        case "1":
            SelectedHero = Bottom;
            break;

        case "2":
            SelectedHero = LeftGlass;
            break;

        default:
            SelectedHero = Centred;
            break;
    }

    return (
        <SelectedHero
            id={id}
            title={title}
            paragraph={paragraph}
            metaText={metaText}
            image={image}
        >
            {children}
        </SelectedHero>
    );
};
