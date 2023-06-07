import Image from 'next/image'
import { Inter } from 'next/font/google'
import Typewriter from "typewriter-effect";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import blurImage from '../../public/blurPromo.svg'
import Button from "@/components/ui/Button/Button";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Head>
            <title>sadchikov tech. | Главная</title>
        </Head>
        <Layout>
            <div
                className={`flex  justify-between mobile:p-5 desktop:p-24 text-white relative`}
            >
                <div className={'flex flex-col gap-14'}>
                    <div className={'flex w-full mobile:flex-col desktop:flex-row mobile:text-[35px] desktop:gap-2 mobile:gap-5 desktop:text-[60px] font-bold mobile:text-2xl'}>
                        <h1 className={'text-white'}>Индивидуальная </h1>
                        <Typewriter
                            options={{
                                loop: true,
                                autoStart: true,
                                strings: ['айдентика', 'разработка', 'аналитика'],
                            }}

                        />
                        <h1 className={'text-white'}> для каждого.</h1>
                    </div>
                    <p className={'desktop:text-[50px] mobile:text-[30px] font-medium desktop:w-1/2 mobile:w-full'}>
                        Превратите свои идеи в реальность с помощью профессиональных разработчиков и дизайнеров нашей команды!
                    </p>
                    <div className={'flex w-full mobile:justify-center desktop:justify-start'}>
                        <Button className={'w-[250px]'}>Связаться</Button>
                    </div>
                </div>
                <Image className={'absolute right-0'} src={blurImage} alt={"blob"}/>
            </div>
        </Layout>
    </>
  )
}
