import Image from "next/image";

/**
 * A standard Avatar icon for displaying people.\
 * Sets at default w-10
 * @param {image} image string of image resource 
 * @param {size} size string of \
 * `| xs, sm, md, lg, xl |` defaults `md`
 * @param {className} className optional appending of CSS classes
 * @returns 
 */
export const Avatar = ({image, size, className, ...prop}) => {
    let sizing;
    switch (size) {
        case "xl":
            sizing = "w-14 h-14";
            break;
    
        case "lg": 
            sizing = "w-12 h-12";
            break;

        case "md": 
            sizing = "w-10 h-10";
            break;

        case "sm":
            sizing = "w-8 h-8";
            break;

        case "xs": 
            sizing = "w-6 h-6";
            break;

        default:
            sizing = "w-10 h-10";
            break;
    }

    return (
        <Image
            {...prop}
            alt="avatar"
            // image ?? "default.png" dont work when image == "" for some reason
            src={image || "/images/default/avatar.jpg"} 
            width="300"
            height="300"
            className={`rounded-full object-fill ${sizing} ${className}`}
        />
    );
}


/**
 * A stack of avatars
 * @param {size} size string of \
 * `| xs, sm, md, lg, xl |` defaults `md`
 * @param {dataArray} dataArray `[{image}, ...`]
 */
export const AvatarStack =({dataArray, size}) => {
    return (
        <div className="flex -space-x-2 overflow-hidden">
            {dataArray.map((item, index)=>(
                <Avatar
                    key={index}
                    image={item.image}
                    size={size}
                    className="ring-2 ring-white"
                />
            ))}
      </div>
    );
}