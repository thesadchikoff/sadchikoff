import React, {useState} from 'react';
import Header from "@/components/Header/Header";
import Link from "next/link";
import {MdAlternateEmail} from 'react-icons/md'


interface ILayout {
    children: React.ReactNode
}

const Layout = ({children}: ILayout) => {
    const [cookieIsOpen, setCookieIsOpen] = useState(true)
    return (
        <div className={'w-full h-full flex flex-col'}>
            <Header/>
            <div className={'flex-1 mt-[80px]'}>
                {children}
            </div>
            <div className={'w-full h-[65px] flex items-center gap-2 mobile:p-5 desktop:p-10 desktop:px-24 justify-center'}>
                {/*<MdAlternateEmail className={'text-white'}/>*/}
                    <Link className={'text-white mail-link'} href={"mailto:nick.sadchikoff@yandex.ru"}><b className={'left-mark'}>[</b> nick.sadchikoff@yandex.ru <b className={'right-mark'}>]</b></Link>
            </div>
        </div>
    );
};

export default Layout;