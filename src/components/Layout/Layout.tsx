import React, {useState} from 'react';
import Header from "@/components/Header/Header";
import CookieBanner from "@/components/CookieBanner/CookieBanner";
import Logo from "@/components/ui/Logo/Logo";
import Link from "next/link";
import Head from "next/head";


interface ILayout {
    children: React.ReactElement
}

const Layout = ({children}: ILayout) => {
    const [cookieIsOpen, setCookieIsOpen] = useState(true)
    return (
        <div className={'w-full h-full flex flex-col'}>
            <Header/>
            <div className={'flex-1 mt-[80px]'}>
                {children}
            </div>
            {
                cookieIsOpen && <CookieBanner isVisible={() => setCookieIsOpen(false)}/>
            }
            <div className={'w-full h-[65px] flex items-center mobile:p-5 desktop:p-10 items-center justify-between'}>
                <Link href={'/'}>
                    <Logo/>
                </Link>
                <div className={'text-white mobile:text-xs desktop:text-[14px] text-[#AEAEAE] font-medium'}>
                    <span>&copy; 2023. All rights reserved</span>
                </div>
            </div>
        </div>
    );
};

export default Layout;