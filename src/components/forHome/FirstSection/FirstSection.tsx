import React from 'react';
import {motion} from "framer-motion";
import memoji from '../../../../public/memoji.svg'
import Image from "next/image";

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
            className={`flex w-full flex-col wrap justify-center items-center text-white relative`}
        >
            <div className={'w-full relative flex justify-center flex-col items-center'}>
                <div className={'flex flex-col items-center justify-center w-full absolute z-[1000] gap-16'}>
                    <Image src={memoji} alt={'developer mobile:w-[189px] mobile:h-[217px] '}/>
                    <div className={'flex flex-col justify-center items-center gap-2'}>
                        <span className={'font-bold text-[32px]'}>Nikolay Sadchikov</span>
                        <span className={'gradient-text font-bold text-[25px]'}>Fullstack Developer</span>
                    </div>
                </div>
                <div className="slider-thumb flex-1 relative"/>
            </div>
        </motion.div>
    );
};

export default FirstSection;