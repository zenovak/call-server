import Image from "next/image";

const Simple = ({ title, description, metaText, image, href }) => {
    return (
        <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg drop-shadow-xl max-w-md"
            href={href}
        >
            <Image
                alt=""
                height="500"
                width="500"
                src={image}
                className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
                <time
                    dateTime="2022-10-10"
                    className="block text-xs text-gray-500"
                >
                    {" "}
                    {metaText}{" "}
                </time>

                <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {description}
                </p>
            </div>
        </a>
    );
};

const CardFloating = ({ title, description, metaText, image, href }) => {
    return (
        <article className="group max-w-md flex flex-col">
            <img
                alt=""
                src={image}
                className="flex-1 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div className="p-4">
                <a href={href}>
                    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {description}
                </p>
            </div>
        </article>
    );
};

const CardBackground = ({ title, description, metaText, image, href }) => {
    return (
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-md max-h-80 h-full">
            <img
                alt=""
                src={image}
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 w-full h-full flex items-end">
                <div className="p-4 sm:p-6">
                    <time
                        dateTime="2022-10-10"
                        className="block text-xs text-white/90"
                    >
                        {" "}
                        {metaText}{" "}
                    </time>

                    <a href={href}>
                        <h3 className="mt-0.5 text-lg text-white">{title}</h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
};

export const CardBlock = ({
    title,
    description,
    metaText,
    image,
    href,
    variant
}) => {
    var CardVaraint = "";
    switch (variant) {
        case "1":
            CardVaraint = CardFloating;
            break;

        case "2":
            CardVaraint = CardBackground;
            break;

        default:
            CardVaraint = Simple;
            break;
    }

    return (
        <CardVaraint
            title={title || "Lorem Ipsum"}
            description={description || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nul"}
            metaText={metaText || "October 31st 2020"}
            image={image || "/images/default/default.png"}
            href={href || "#"}
        />
    );
};
