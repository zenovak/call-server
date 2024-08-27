import { Avatar } from "@components/Primitives/Media";

export const QuoteCard = ({title, paragraph, metaText, image, ...props}) => {
    return (
        <figure
            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
            {...props}
        >
        <blockquote className="text-gray-900">
            <p>{`“${paragraph}”`}</p>
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-x-4">
            <Avatar 
                image={image}
            />
            <div>
            <div className="font-semibold">{title}</div>
            <div className="text-gray-600">{`@${metaText}`}</div>
            </div>
        </figcaption>
        </figure>
    );
}