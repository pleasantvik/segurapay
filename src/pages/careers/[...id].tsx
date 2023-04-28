import Layout from "@/components/Layout";
import Job from "@/components/career/Job";
import Head from "next/head";
import React from "react";
import { getJob } from "../../../lib/getJob";

const Jobs = ({ jobOpening }: any) => {
  console.log({ jobOpening });
  return (
    <Layout>
      <Head>
        <title>Careers | Opening</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Job jobOpening={jobOpening} />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const careers = await getJob();
  const paths = careers.map((career) => {
    return {
      params: {
        id: [career.id],
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (staticProps: any) => {
  const params = staticProps.params;
  const careers = await getJob();

  const findJobById = careers.find((career) => career?.id === params?.id[0]);

  return {
    props: {
      jobOpening: findJobById || {},
    },
  };
};

export default Jobs;
