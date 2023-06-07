'use client'
import React, {useState} from 'react';
import cookieIcon from '../../../public/Cookie.svg'
import Image from "next/image";
import Button from "@/components/ui/Button/Button";

const CookieBanner = () => {
    return (
        <div className={'mobile:flex-col desktop:flex-row w-full mobile:px-[20px] desktop:px-[41px] mobile:py-[20px] desktop:py-[42px] justify-center flex items-center gap-[20px] fixed bottom-0 cookie_banner'}>
            <div className={'flex mobile:flex-row mobile:gap-2 desktop:gap-5 desktop:items-center desktop:justify-start mobile:justify-between w-full'}>
                <Image src={cookieIcon} alt={'Cookie'}/>
                <span className={'text-white mobile:text-[11px] desktop:text-[14px]'}>
                Мы используем cookie. Это позволяет нам анализировать взаимодействие посетителей с сайтом и делать его лучше. Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов cookie.
            </span>
            </div>
            <Button>Хорошо</Button>
        </div>
    );
};

export default CookieBanner;