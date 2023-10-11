import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import FirstSection from "@/components/forHome/FirstSection/FirstSection";
import React from "react";

export default function Home() {
  return (
    <>
        <Head>
            <link rel="icon" type={"image/png"} href="/icon.png" sizes={"any"}/>
            <title>sadchikov dev.</title>
        </Head>
        <Layout>
            <FirstSection/>
        </Layout>
    </>
  )
}
