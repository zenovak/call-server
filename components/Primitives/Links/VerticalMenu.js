import Link from "next/link";
import { useRouter } from "next/router";


export const VerticleMenu = ({dataArray}) => {
  const router = useRouter();

  function isCurrentPathOrParrent(href) {
    if (router.pathname == href) {
      return true;
    }
    if (router.pathname.startsWith(href) && href != "/") {
      return true;
    }
    if (router.pathname.startsWith("/work") && href == "/") {
      return true;
    }
    return false;
  }

    return (
      <nav className="flex flex-1 flex-col" aria-label="menu">
      <ul role="list" className="-mx-2 space-y-1">
        {dataArray.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className={ "group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold " + (
                item.href === router.pathname? 
                  "bg-gray-50 dark:bg-zinc-300/80 " :
                  "text-gray-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-zinc-400"
            )}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    );
}