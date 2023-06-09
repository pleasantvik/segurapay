import Layout from "@/components/Layout";
import OurCompany from "@/components/about/OurCompany";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Our Company</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <OurCompany />
      </div>
    </Layout>
  );
};

export default About;
