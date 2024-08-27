import { Footer } from "@components/PageLayouts/Footer";
import { Header } from "@components/PageLayouts/Header";

const dataArray = [
    {
        title: "Products",
        href: "/products",
    },
    {
        title: "Events",
        href: "",
        contents: [
            {
                title: "What we do",
                href: "/"
            },
            {
                title: "Latest Events",
                href: "/documents/iso9001_2015.md"
            },
        ]
    },
    {
        title: "Company",
        href: "",
        contents: [
            {
                title: "About Us",
                href: ""
            },
            {
                title: "Our Blog",
                href: ""
            },
            {
                title: "Contact Us",
                href: ""
            }
        ]
    }
];

export const Layout = ({ children, className = "" }) => {
    return (
        <main
            className={`main relative overflow-hidden ${
                className && className
            }`}
        >
            <Header 
                dataArray={dataArray}
            />
            {children}
            <Footer />
        </main>
    );
};
