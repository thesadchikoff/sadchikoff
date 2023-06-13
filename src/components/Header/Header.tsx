import React, {useState} from 'react';
import Logo from "@/components/ui/Logo/Logo";
import {BsTelegram, BsGithub, BsBehance} from 'react-icons/bs'
import Link from "next/link";
import {siteConfig} from "@/config/site.config";
import {useRouter} from "next/router";
import {motion} from "framer-motion";
import styles from './Header.module.css'
import hamburger from '../../../public/hamburger.svg'
import Image from "next/image";
import cn from 'classnames'

const Header = () => {
    const router = useRouter()
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const items = siteConfig.mainNav
    return (
        <motion.div
            className={'w-full h-[65px] fixed z-40 header flex items-center mobile:p-5 desktop:p-10 desktop:px-24 select-none justify-between'}
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <Link href={'/'}>
                <Logo/>
            </Link>
            <button className={'desktop:hidden outline-0 border-0'}
                    onClick={() => setIsOpenMenu(prevState => !prevState)}>
                <Image src={hamburger} alt={'menu item'}/>
            </button>
            <nav className={'mobile:hidden desktop:flex items-center gap-10'}>
                {
                    items?.length && items.map(item => {
                        return (
                            <motion.div
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: 0.9}}
                                transition={{type: "spring", stiffness: 400, damping: 17}}
                            >
                                <Link key={item.title} href={item.href}
                                      className={`${router.pathname === item.href && 'active_link'} text-white hover:text-[#FF4545] font-medium duration-200`}>
                                    {item.title}
                                </Link>
                            </motion.div>
                        )
                    })
                }
            </nav>
            <div className={'mobile:hidden desktop:flex text-white text-xl items-center gap-10'}>
                <Link href={'#'} target={'_blank'}
                      className={'hover:text-slate-300 cursor-pointer transition-all duration-[200ms]'}>
                    <BsTelegram/>
                </Link>
                <Link href={'https://github.com/bombasters'} target={'_blank'}
                      className={'hover:text-slate-300 cursor-pointer transition-all duration-[200ms]'}>
                    <BsGithub/>
                </Link>
                <Link href={'https://www.behance.net/SADCHIKOVDES'} target={'_blank'}
                      className={'hover:text-slate-300 cursor-pointer transition-all duration-[200ms]'}>
                    <BsBehance/>
                </Link>
            </div>
            <motion.div
                className={cn(styles.menu, {
                    [styles.visible]: isOpenMenu,
                    [styles.ui]: isOpenMenu,
                    [styles.ui_animate]: isOpenMenu
                })}>
                <div className={'flex flex-col gap-5 bg-stone-900 p-5 rounded-xl'}>
                    {
                        siteConfig.mainNav.map(item => {
                            return (
                                <Link className={'px-4 py-2 text-white bg-stone-800 rounded'} href={item.href}>{item.title}</Link>
                            )
                        })
                    }
                    <div className={'m-auto text-white text-xl flex items-center gap-10'}>
                        <Link href={'#'} target={'_blank'}
                              className={'hover:text-slate-300 cursor-pointer transition-all duration-[200ms]'}>
                            <BsTelegram/>
                        </Link>
                        <Link href={'https://github.com/bombasters'} target={'_blank'}
                              className={'hover:text-slate-300 cursor-pointer transition-all duration-[200ms]'}>
                            <BsGithub/>
                        </Link>
                        <Link href={'https://www.behance.net/SADCHIKOVDES'} target={'_blank'}
                              className={'hover:text-slate-300 cursor-pointer transition-all duration-[200ms]'}>
                            <BsBehance/>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Header;