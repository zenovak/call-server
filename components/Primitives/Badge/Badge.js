import { Icon } from "@iconify/react";

export const Badge = ({ title, icon }) => {
    return (
        <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-0.5 border text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            {title && <p className="px-2 font-medium">{title}</p>}
            {icon && <Icon icon={icon} className="w-4 my-2 mr-2" />}
        </span>
    );
};
