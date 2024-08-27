
/**
 * A small loader. Designed to be fitted on buttons and foms.
 * @param {className} use to style the dotts. Recommended to use bg-white
 */
export const DottedLoader = ({className="bg-white-50"}) => {
    return (
        <div className="flex flex-row gap-2 items-center justify-center">
            <div className={"w-4 h-4 rounded-full animate-bounce " + className}></div>
            <div className={"w-4 h-4 rounded-full animate-bounce [animation-delay:-.3s] " + className}></div>
            <div className={"w-4 h-4 rounded-full animate-bounce [animation-delay:-.5s] " + className}></div>
        </div>
    );
}