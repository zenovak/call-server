import Image from "next/image";


/**
 * A Panel which places Background Images as an Image component.
 * @param {image} image string URI to image resource
 * @param {children} children the contents of this panel. Should be root (No siblings)
 * @returns 
 */
export const BackgroundImage = ({image, children}) => {
    return (
        <div className="relative isolate overflow-hidden">
            <Image
                src={image}
                alt="an image"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                fill
            />
            {children}
        </div>
    );
}