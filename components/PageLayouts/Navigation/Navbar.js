import Link from 'next/link';
import { Popover } from "@headlessui/react";
import { Icon } from '@iconify/react';

/**
 * Standard Navigation bar with builtin popover for sublinks
 * @param {dataArray} dataArray  
 * @returns 
 */
export const Navbar = ({dataArray}) => {
    return (
        <nav
            className='hidden lg:block'
        >
            <ul
                className='flex gap-12'
            >
                {dataArray.map((item, index)=>(
                    <li
                        key={index}
                        className="flex items-center text-gray-900 text-sm font-semibold" // Inherit except specify
                    >
                        {item.contents && 
                            <Popover className="relative">
                                <Popover.Button
                                    className="flex items-center outline-none"
                                >
                                    <p>
                                        {item.title}
                                    </p>
                                    <Icon
                                        icon="mdi:chevron-down"
                                        className='h-6 w-6 text-gray-400'
                                    />
                                </Popover.Button>
                                <Popover.Panel
                                    className="absolute -left-32 z-10 mt-4 w-80 bg-white px-8 rounded-md drop-shadow-md shadow-md"
                                >
                                    {item.contents.map((subitem) => (
                                        <div
                                            key={subitem.title}
                                            className="group flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex-auto">
                                                <a href={subitem.href} className="block font-semibold text-gray-900">
                                                    {subitem.title}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </Popover.Panel>
                            </Popover>
                        }

                        {(!item.contents) &&
                            <Link
                                href={item.href}
                            >
                                {item.title}
                            </Link> 
                        }  
                    </li>
                ))}
            </ul>
        </nav>
    );
}
