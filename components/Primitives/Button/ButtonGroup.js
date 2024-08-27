import { getTextAlign } from "@utils/helper";

export const ButtonGroup = ({ className = "", alignment, children }) => {
    const alignClass = getTextAlign(alignment);
    return (
        <div
            className={`btn-group--container ${className && className} ${
                alignClass && alignClass
            }`}
        >
            {children}
        </div>
    );
};
