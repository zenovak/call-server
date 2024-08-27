import { Icon } from "@iconify/react";
import Link from "next/link";

/**
 * A  horizontal collection of responsive anchor tags
 * @param {dataArray} dataArray  
 * @returns 
 */
export const Links = ({ dataArray, textSize }) => {
    return (
        <ul className="flex flex-row flex-wrap gap-6 justify-center">
            {dataArray.map((item, index) => (
                <li
                    key={index}
                >
                    <Link
                        href={item.href}
                        className={`text-black/80 hover:text-black/90 hover:font-semibold text-sm`}
                    >
                        {item.title}
                        {item.icon && (
                            <Icon icon={item.icon} className="h-6 w-6" />
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
