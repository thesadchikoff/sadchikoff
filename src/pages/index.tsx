import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import FirstSection from "@/components/forHome/FirstSection/FirstSection";
import BlobImageBlur from '../../public/anotherBlurImage.svg'
import Image from "next/image";
import React from "react";
import missionText from '../../public/ourMission.svg'
import oneBlurMission from '../../public/missionBlur.svg'
import twoBlurMission from '../../public/twoMissionBlur.svg'
import {motion} from "framer-motion";

export default function Home() {
  return (
    <>
        <Head>
            <title>sadchikov tech. | Главная</title>
        </Head>
        <Layout>
            <FirstSection/>
            <div className={'w-full h-screen bg-[#000] flex items-center'}>
                <Image className={''} src={BlobImageBlur} alt={"blob"}/>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                }}
                className={'w-full h-screen bg-[#000] flex items-center relative'}>
                <Image className={'absolute left-0 bottom-0 mobile:hidden desktop:block'} src={oneBlurMission} alt={'blur bloob'}/>
                <Image className={'m-auto z-10'} src={missionText} alt={'our mission'}/>
                <Image className={'absolute right-0 top-0 mobile:hidden desktop:block'} src={twoBlurMission} alt={'blur bloob'}/>
            </motion.div>
        </Layout>
    </>
  )
}
