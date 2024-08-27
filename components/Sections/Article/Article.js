import Image from "next/image";

// Non-markdown, section typed. 
// description can be array or string.

function paragraph(textArray){
        const styles = "text-base sm:text-lg";
        if (textArray.type === String)
            return (<p className={styles}>{description}</p>);

        return (textArray.map((item, index)=>(
            <p 
                key={index}
                className={styles}>
                {item}
            </p>
        )));
}

const BackgroundImage = ({title, image, description}) => {
    const bgImage = {
            backgroundImage: `url(${image})`
        }

    return (
        <article
            className="bg-no-repeat bg-cover"
            style={bgImage}
        >
            {/* Layout layer */}
            <div className="mx-auto max-w-constant xl:w-constant flex px-4 py-8 lg:py-12">
                {/* Text Group */}
                <div className="flex flex-col gap-4 max-w-2xl backdrop-blur-sm bg-white/75 drop-shadow-md rounded p-8 mt-20 sm:mt-32 md:mt-40">
                    <h2 className="text-2xl sm:text-3xl font-serif">{title}</h2>
                    <div className="flex flex-col gap-4 justify-center">
                        {paragraph(description)}
                    </div>
                </div>
            </div>
        </article>
    );
}

const Biography = ({title, image, description}) => {
    return (
        <article>
            <div className="mx-auto max-w-constant xl:w-constant grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 px-8 mt-20 sm:mt-32 md:mt-40 pb-20">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold font-serif">{title}</h2>
                    <Image
                        alt={title || "an image"}
                        src={image}
                        className="w-md h-md object-cover rounded-md shadow-lg drop-shadow-lg"
                        width="1000"
                        height="1000"
                    />
                </div>
                <div className=" col-span-2 flex flex-col gap-4 justify-center">
                    {paragraph(description)}
                </div>
            </div>
        </article>
    );
}

const SnippetCard = ({title, image, description}) => {
    return (
        <article>
            {/*Section size definition*/}
            <div className="mx-auto max-w-constant xl:w-constant px-8 py-20">
                {/* Main card wrapper */}
                <div className="w-full h-full flex flex-col md:flex-row gap-4 border border-secondary-600 rounded-lg shadow-lg drop-shadow-lg">
                    <Image
                        alt={title || "an image"}
                        src={image}
                        className="basis-2/5 object-cover overflow-hidden rounded-l-lg"
                        width="1000"
                        height="1000"
                    />
                    <div className="basis-3/5 flex flex-col gap-4 justify-center col-span-3 p-4">
                        {paragraph(description)}
                    </div>
                </div>
                
            </div>
        </article>
    );
}

const DefaultVariant = ({title, image, description}) => {
    return (
        <article>
            <div className="mx-auto max-w-constant xl:w-constant flex flex-col items-center px-8 mt-20 sm:mt-32 md:mt-40 pb-20">
                <h2 className="text-2xl sm:text-3xl text-center text-[#B98603] font-serif">{title}</h2>
                <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                    <Image
                        alt={title || "an image"}
                        src={image}
                        className="w-full h-full object-cover rounded-md shadow-lg drop-shadow-lg"
                        width="1000"
                        height="1000"
                    />
                    <div className="flex flex-col gap-4 justify-center">
                        {paragraph(description)}
                    </div>
                </div>
            </div>
        </article>
    ); 
}


export const Article = ({variant, title, image, description}) => {
    var Selection = null;

    switch (variant) {
        case "1":
            Selection = BackgroundImage;
            break;

        case "2":
            Selection = Biography;
            break;

        case "3":
            Selection = SnippetCard;
            break;
    
        default:
            Selection = DefaultVariant;
            break;
    }
    return (
        <Selection 
            title={title}
            image={image}
            description={description}
        />
    );
}
