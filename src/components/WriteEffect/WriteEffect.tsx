import React from 'react';
import Typewriter from "typewriter-effect";
import {motion} from "framer-motion";
interface IWriteEffect {
    beforeText?: string
    afterText?: string
    writeEffectText: string | string[] | undefined
}
const WriteEffect = ({writeEffectText, beforeText, afterText}: IWriteEffect) => {
    return (
        <motion.div
            className={'flex w-full mobile:flex-col desktop:flex-row mobile:text-[35px] desktop:gap-2 mobile:gap-5 desktop:text-[60px] font-bold mobile:text-2xl'}
        >
            <h1 className={'text-white an'}>{beforeText}</h1>
            <Typewriter
                options={{
                    loop: true,
                    autoStart: true,
                    strings: writeEffectText,
                }}

            />
            <h1 className={'text-white'}>{afterText}</h1>
        </motion.div>
    );
};

export default WriteEffect;