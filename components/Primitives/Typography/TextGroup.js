
/**
 * A Heading Group used in page sections and more, which consists of 3 bodies of text
 * and a predefined max paragraphic width.
 * @param {title} title the largest text in the heading TextGroup.
 * @param {paragraph} paragraph long paragraphic text or description
 * @param {metaText} metaText a small text on top of the Heading in accent colours.
 * @param {className} className CSS class selector for the root element. Can be used to dictate the general
 * style of the text such as align colour, etc. Defaults are:\
 * `max-w-2xl text-center`
 * @param {size} size the size of the heading text. default = `medium`\
 * Valid values: `large` | `medium` | `small`
 * @returns 
 */
export const TextGroupHeading = ({title, paragraph, metaText, size, className}) => {
    let sizing;
    switch (size) {
        case "large":
            sizing = "text-4xl sm:text-6xl ";
            break;
    
        case "small": 
            sizing = "text-2xl sm:text-3xl ";
            break;

        default:
            sizing = "text-3xl sm:text-4xl ";
            break;
    }
    return (
        <div
            className={className ?? "max-w-2xl text-center mx-auto"}
        >
            {metaText && 
            <p className="text-base font-semibold leading-7 text-violet-800">
                {metaText}
            </p>}
            <h2 
                className={
                    "mt-2 tracking-tight font-bold text-gray-900 dark:text-gray-100 " + 
                    sizing
                }
            >
                {title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {paragraph}
            </p>
        </div>
    );
}

/**
 * A Subheading group meant for contents displayed in features
 * @param {title} title the title text.
 * @param {paragraph} paragraph the main text body.
 * @param {...props} props other props can be applied to the root element.
 * @returns Component
 */
export const TextGroupPoint = ({title, paragraph, ...props}) => {

    return (
    <div
        {...props}
    >
        <h2 className="text-gray-900 text-lg font-medium">{title}</h2>
        <p className="mt-2 leading-relaxed text-base">{paragraph}</p>
    </div>
    );
}

/**
 * A Subheading group meant for contents displayed in features
 * @param {title} title the title text.
 * @param {paragraph} paragraph the main text body.
 * @param {...props} props other props can be applied to the root element.
 * @returns Component
 */
export const TextGroupPoint_sm = ({title, paragraph, ...props}) => {

    return (
    <div
        {...props}
    >
        <h2 className="text-gray-900 text-base font-semibold">{title}</h2>
        <p className="mt-2 leading-relaxed text-sm text-gray-500">{paragraph}</p>
    </div>
    );
}

/**
 * A Smaller Closed grouping section level heading. Commonly used to annotate data displays
 * and figure reach sections
 * @param {title} title the title text.
 * @param {paragraph} paragraph the main text body.
 * @param {...props} props other props can be applied to the root element.
 * @returns Component
 */
export const TextGroupSectionHeading = ({title, paragraph, ...props}) => {
    return (
        <div
            {...props}
        >
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {title}
            </h1>
            <p className="mt-2 text-sm text-gray-500">
                {paragraph}
            </p>
        </div>
    );
}