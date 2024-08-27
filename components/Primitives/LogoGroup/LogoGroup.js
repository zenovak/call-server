import Image from "next/image";


/**
 * Represents a LOGO company name group commonly displayed on the navigation bar
 * @param {image} image String URI of the image source.
 * @param {href} href Url of company logo for redirects. 
 * @returns 
 */
export const LogoGroup = ({image, title, image2, href}) => {
    return (
        <a href={href} className={"flex gap-4 items-center md:text-2xl text-lg " + "text-white-50"}>
            <Image
                src={image}
                alt="logo"
                className="h-6 md:h-8 w-auto"
                height="100"
                width="100"
            />
            {title && title}
            {image2 && 
                <Image
                    src={image2}
                    alt="logo"
                    className="h-6 md:h-8 w-auto"
                    height="100"
                    width="100"
                />
            }
        </a>
    );
}