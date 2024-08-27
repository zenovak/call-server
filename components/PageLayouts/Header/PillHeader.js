import { Popup2 } from "@components/Primitives/Drawer";
import { ContainerP } from "@components/Primitives/Layout";
import { VerticleMenu } from "@components/Primitives/Links";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { NightModeToggle } from "../Navigation";


const Desktop = ({dataArray, ...props}) => {
  const router = useRouter();

  function isCurrentPageOrParent(href) {
    if (router.pathname == href) {
      return true;
    }

    if (router.pathname.startsWith(href) && href != "/") {
      return true;
    }
    if (router.pathname.startsWith("/work") && href == "/") {
      return true;
    }

    return false
  }

  return (
    <nav
      {...props}
    >
      <ul
        className="flex rounded-full bg-white/90 px-3 text-md font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
      >
        {dataArray.map((item) => (
          <li
            key={item.title}
          >
            <Link
              href={item.href}
              className={"p-4 block px-3 py-2 transition " +  
                (isCurrentPageOrParent(item.href) ?
                'text-violet-700 dark:text-violet-400' :
                'hover:text-violet-700 hover:dark:text-violet-400')
              }
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const Mobile = ({dataArray, ...props}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      {...props}
    >
      <button 
        onClick={() => setOpen(true)}
        className="pointer-events-auto group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
          Menu
          <Icon
            icon="mdi:chevron-down" 
            className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-300" />
        </button>
      <Popup2 className="md:hidden" open={open} onClose={() => setOpen(false)}>
        <nav>
          <VerticleMenu 
            dataArray={dataArray}
          />
        </nav>
      </Popup2>
    </div>
  );
    
}

export const PillHeader = ({dataArray}) => {
    return (
      <header className="w-full absolute z-50">
      <ContainerP>
      <div className="flex gap-4">
        <div className="flex flex-1 justify-start"></div>

        <div className="flex flex-1 justify-end md:justify-center">
          <Mobile dataArray={dataArray} className="md:hidden"/>
          <Desktop dataArray={dataArray} className="hidden md:block"/>
        </div>

        <div className="flex md:flex-1 justify-end">
          <NightModeToggle />
        </div>
      </div>
      </ContainerP>
      </header>
    );
}