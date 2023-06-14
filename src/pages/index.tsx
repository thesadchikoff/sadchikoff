import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import FirstSection from "@/components/forHome/FirstSection/FirstSection";
import React from "react";

export default function Home() {
  return (
    <>
        <Head>
            <title>sadchikov tech. | Главная</title>
        </Head>
        <Layout>
            <FirstSection/>
        </Layout>
    </>
  )
}
