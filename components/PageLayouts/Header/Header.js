import { Drawer } from "@components/Primitives/Drawer";
import { ContainerPadded } from "@components/Primitives/Layout";
import { LogoGroup } from "@components/Primitives/LogoGroup";
import { Navbar, VerticalMenuCollapsible } from "../Navigation";
import { useState } from "react";
import { IconButton } from "@components/Primitives/Button";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { CartTray } from "@components/Application/Ecommerce/CartUtility";
import { User } from "@components/Application/User";
import { User2 } from "@components/Application/User/user2";


export const Header = ({dataArray}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    return (
        <header
            id="header"
            className="fixed z-30 w-full bg-white-50/95 backdrop-blur-sm"
        >
        <ContainerPadded>
            <div
                className="flex items-center justify-between"
            >
                <LogoGroup
                    image="/favicons/android-chrome-512x512.png"
                    href="/"
                />
                <Navbar
                    dataArray={dataArray}
                />

                {/* Mobile menu group */}
                <div
                    className="flex items-center justify-end gap-4"
                >
                    <CartTray/>
                    <User2 />
                    <IconButton
                        icon="material-symbols:menu-rounded"
                        className="h-6 w-6 lg:hidden"
                        onClick={() => setMobileMenuOpen(true)}
                    />
                    <Drawer
                        open={mobileMenuOpen}
                        onClose={()=>setMobileMenuOpen(false)}
                        position="right"
                    >
                        <div
                            className="w-full h-full bg-white p-6"
                        >
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <Image
                                        className="h-8 w-auto"
                                        src="/android-chrome-512x512.png"
                                        alt=""
                                        width="250"
                                        height="250"
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="rounded-md text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <Icon icon="mdi:close" className="h-6 w-6" aria-hidden="true" />
                                </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="divide-y divide-gray-500/10">
                                <VerticalMenuCollapsible 
                                    dataArray={dataArray}
                                />
                            </div>
                        </div>
                        </div>
                    </Drawer>
                </div>
            </div>
        </ContainerPadded>
        </header>
        
    );
}