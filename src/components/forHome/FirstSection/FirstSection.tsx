import React from 'react';
import Image from "next/image";
import blurImage from "../../../../public/blurPromo.svg";
import Typewriter from "typewriter-effect";
import Button from "@/components/ui/Button/Button";
import {motion} from "framer-motion";
import WriteEffect from "@/components/WriteEffect/WriteEffect";
import logo3D from '../../../../public/2023-06-09_12-39-35-transformed.png'
import Link from "next/link";

const FirstSection = () => {
    const imageVariants = {
        exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
        enter: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    const textVariants = {
        exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: "easing" } },
        enter: {
            y: 0,
            opacity: 1,
            transition: { delay: 0.1, duration: 0.5, ease: "easing" }
        }
    };
    const stringArray = ['разработка', 'аналитика', 'айдентика']
    return (
        <motion.div
            variants={textVariants}
            className={`flex mt-[20px] wrap h-screen justify-between mobile:p-5 desktop:p-24 text-white relative`}
        >
            <Image className={'absolute right-0 -z-10'} src={blurImage} alt={"blob"}/>
            <div className={'flex flex-col gap-[20px]'}>
                <WriteEffect writeEffectText={stringArray} beforeText={'Индивидуальная'} afterText={'для каждого.'}/>
                <div
                    className={'flex w-full mobile:flex-col desktop:flex-row mobile:text-[35px] desktop:gap-2 mobile:gap-5 desktop:text-[60px] font-bold mobile:text-2xl'}>

                </div>
                <p className={'desktop:text-[50px] mobile:text-[30px] font-medium desktop:w-1/2 mobile:w-full'}>
                    Превратите свои идеи в реальность с помощью профессиональных разработчиков и дизайнеров нашей
                    команды!
                </p>
                <div className={'flex w-full mobile:justify-center desktop:justify-start'}>
                    <Button className={'mobile:w-full desktop:w-[250px] desktop:h-[50px]'}>Связаться</Button>
                </div>
            </div>
        </motion.div>
    );
};

export default FirstSection;