import { Disclosure } from "@headlessui/react";
import { Icon } from "@iconify/react";

/**
 * A single collapsible accordion component. \
 * Prestyling is done for the button only
 * @param {title} title the label for the accordion block
 * @param {children} children the contents within the accordion
 */
export const AccordionBlock = ({title, children}) => {
    return (
        <Disclosure as="div">
            {({ open }) => (
            <>
                <Disclosure.Button 
                    className="flex w-full items-center justify-between rounded-lg py-2 px-4 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    {title}
                    <Icon
                        icon="mdi:chevron-down"
                        className={`'h-5 w-5 flex-none ${open ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                    />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 space-y-2">
                    {children}
                </Disclosure.Panel>
            </>
            )}
        </Disclosure>
    );
}