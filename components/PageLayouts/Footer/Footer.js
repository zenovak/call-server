import { ContainerP } from "@components/Primitives/Layout";

/**
 * A Basic Footer with banner stack. (No dynamic links)
 */
export const Footer = () => {
    return (
        <footer
            className=""
        >
        {/* Stack 0 */}
        <ContainerP>
            <p 
                className="text-sm leading-5 text-gray-500"
            >
                &copy; {new Date().getFullYear()} {process.env.siteTitle} Zenovak. Some rights reserved.
            </p>
        </ContainerP>
        </footer>
    );
}