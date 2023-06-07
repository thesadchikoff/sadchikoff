import React from 'react';
import Logo from "@/components/ui/Logo/Logo";
import {BsTelegram, BsGithub, BsBehance} from 'react-icons/bs'
import Link from "next/link";
import {siteConfig} from "@/config/site.config";
import {useRouter} from "next/router";
const Header = () => {
    const router = useRouter()
    const items = siteConfig.mainNav
    return (
        <div className={'w-full h-[65px] fixed z-40 header flex items-center mobile:p-5 desktop:p-10 select-none justify-between'}>
            <Link href={'/'}>
                <Logo/>
            </Link>
            <nav className={'mobile:hidden desktop:flex items-center gap-10'}>
                {
                    items?.length && items.map(item => {
                        return (
                            <Link key={item.title} href={item.href} className={`${router.pathname === item.href && 'active_link'} text-white hover:text-[#E82121] duration-200`}>
                                {item.title}
                            </Link>
                        )
                    })
                }
            </nav>
            <div className={'text-white text-xl flex items-center gap-10'}>
                <Link href={'#'} target={'_blank'} className={'hover:text-slate-300 cursor-pointer transition-all duration-[200ms]'}>
                    <BsTelegram/>
                </Link>
                <Link href={'https://github.com/bombasters'} target={'_blank'} className={'hover:text-slate-300 cursor-pointer transition-all duration-[200ms]'}>
                    <BsGithub/>
                </Link>
                <Link href={'#'} target={'_blank'} className={'hover:text-slate-300 cursor-pointer transition-all duration-[200ms]'}>
                    <BsBehance/>
                </Link>
            </div>
        </div>
    );
};

export default Header;