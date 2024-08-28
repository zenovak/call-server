import { Icon } from "@iconify/react";

/**
 * A button which uses Icons as primary display
 * @param {onClick} onClick function 
 * @param {icon} icon Iconify icon string.
 * @param
 * @returns 
 */
export const IconButton = ({onClick, icon, ...props}) => {
    return (
        <button
            onClick={onClick}
            {...props}
        >
            <Icon
                icon={icon}
                className="h-auto w-full"
            />
        </button>
    );
}