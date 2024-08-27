import { Disclosure } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const SelfClosingAccordion = ({title, dataArray}) => {
  const [closeDelegate, setcloseDelegate] = useState([]);

  function closeLastOpenedDisclosure(delegate) {
    if (closeDelegate.length > 0) {
      closeDelegate[0]();
      setcloseDelegate([delegate]);
      console.log("closing");
    } else {
      setcloseDelegate([delegate]);
    }
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {dataArray.map((item, index) => (
              <Disclosure as="div" key={index} className="pt-6">
                {({ open, close }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button
                        onClick={()=>closeLastOpenedDisclosure(close)}
                        className="text-left w-full flex justify-between items-start text-gray-400" 
                      >
                        <span className="font-medium text-gray-900">{item.title}</span>
                        <span className="ml-6 h-7 flex items-center">
                            <Icon
                                icon="mdi:chevron-down"
                                className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                aria-hidden
                            />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{item.paragraph}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
