import React, {useState} from 'react';
import {BsTelegram, BsGithub, BsBehance} from 'react-icons/bs'
import Link from "next/link";
import {motion} from "framer-motion";

const Header = () => {
    return (
        <motion.div
            className={'w-full h-[65px] justify-center items-center z-40 header flex p-10 px-24 select-none'}
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className={'w-full  justify-center items-center flex text-white text-xl items-center gap-10'}>
                <Link href={'https://t.me/ssssssssss_rk'} target={'_blank'}
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
        </motion.div>
    );
};

export default Header;
