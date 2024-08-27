import { VerticalMenuCollapsible } from "@components/PageLayouts/Navigation";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Fragment } from 'react';
import { VerticleMenu } from "../Links";


/**
 * A popup type drawer that appears in center of screen. 
 * @param {*} param0 
 * @returns 
 */
export const Popup = ({children, ...props}) => {
    return (
      <Popover {...props}>
        <Popover.Button className="pointer-events-auto group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
          Menu
          <Icon
            icon="mdi:chevron-down" 
            className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
            >
              <div className="flex flex-row-reverse items-center justify-between">
                <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                  <Icon
                    icon="mdi:close" 
                    className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                </Popover.Button>
                {/* <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Navigation
                </h2> */}
              </div>
              {children}
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    );
}

export const Popup2 = ({children, onClose, open, ...props}) => {
  return (
    <Transition appear show={open} as={Fragment}>
    <Dialog onClose={onClose} {...props}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel
            className="transform transition-all fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <button aria-label="Close menu" className="-m-1 p-1" onClick={onClose}>
                <Icon
                  icon="mdi:close" 
                  className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </button>
            </div>
            {children}
          </Dialog.Panel>
        </Transition.Child>
    </Dialog>
    </Transition>
  );
}