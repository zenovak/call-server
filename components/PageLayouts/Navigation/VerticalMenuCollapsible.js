import { AccordionBlock } from "@components/Primitives/Accordion";
import Link from "next/link";

/**
 * A vertical menu with optional display of submenu contents
 * @param {dataArray} dataArray 
 * ```
 * [
 *  {title, href}, 
 *  {
 *      title, 
 *      contents:[
 *          {title, href}, ...
 *      ]
 * }, ...
 * ] 
 * ```
 * @returns 
 */
export const VerticalMenuCollapsible = ({dataArray}) => {
    return (
        <ul className="space-y-1">
            {dataArray.map((item, index)=> (
                <li
                    key={index}
                >
                    {item.contents ?
                        <AccordionBlock
                            title={item.title}
                        >
                            <ul
                                className="px-4"
                            >
                                {item.contents.map((subitem, subindex)=>(
                                    <li
                                        key={subindex}
                                    >
                                        <Link
                                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                            href={subitem.href}
                                        >
                                            {subitem.title}
                                        </Link>
                                    </li>
                                ))}
                                
                            </ul>
                        </AccordionBlock> :
                        <Link
                            className="flex w-full items-center justify-between rounded-lg py-2 px-4 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            href={item.href}       
                        >
                            {item.title}
                        </Link>
                    }
                </li>
            ))}
        </ul>
    );

    
}