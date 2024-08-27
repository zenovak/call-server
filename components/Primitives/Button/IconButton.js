import { Icon } from "@iconify/react";

/**
 * A button which uses Icons as primary display
 * @param {onClick} onClick function 
 * @returns 
 */
export const IconButton = ({onClick, icon, className}) => {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            <Icon
                icon={icon}
                className="h-auto w-full"
            />
        </button>
    );
}