import Image from 'next/image'
import { Inter } from 'next/font/google'
import Typewriter from "typewriter-effect";
import Layout from "@/components/Layout/Layout";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div
          className={`flex flex-col items-center justify-between p-24 text-white`}
      >
          <div className={'flex gap-2 desktop:text-4xl mobile:text-2xl font-medium'}>
              <h1 className={'text-white'}>Индивидуальный </h1>
              <Typewriter
                  options={{
                      loop: true,
                      autoStart: true,
                      strings: ['разработчик', 'дизайнер', 'аналитик'],
                  }}

              />
          </div>

      </div>
    </Layout>
  )
}
