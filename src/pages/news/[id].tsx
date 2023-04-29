import React, { useState } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import { newsData, MockNewsDetail } from "@/MockData/MockNewsData";
import Image from "next/image";
import Link from "next/link";
import NextRightPagination from "@/components/news/NextRightPagination";

export const getStaticPaths = async () => {
  const paths = newsData.map((news) => {
    return {
      params: { id: news.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const specificData = newsData.find((news) => {
    news.id === id;
  });
  console.log(specificData);
  return {
    props: { news: specificData || null },
  };
};

//news details
const newsParagraphs = MockNewsDetail.split("/n");
// console.log(newsParagraphs);

//social media icons
const socialMediaIcons: string[] = [
  "twitter.svg",
  "linkedin.svg",
  "facebook.svg",
  "link.svg",
];

const SpecificNews = () => {
  const [newsNext, setNewsNext] = useState<number>(0);
//   console.log(newsNext)
  return (
    <>
      <Layout>
        <Head>
          <title>News</title>
          <meta name="news and update" content="new and update" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/asset/images/Logo.svg" />
        </Head>
        <div className="text-center pt-[85px] px-[10%]" style={{backgroundImage: 'url(/asset/images/newsDetailsHead.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <span className="py-1 px-2 bg-[#F1F3FE] rounded-md text-[#243AC0]">
            PUBLICATION
          </span>
          <h2 className="font-semibold px-4 text-3xl sm:text-5xl text-[#1E1D1D] mb-[18.5px] mt-[10px]">
            FX Markets and Business Finance
          </h2>
          <div className="flex gap-5 md:gap-10 justify-center items-center">
            <div className="flex items-center gap-2 md:gap-[18px] mb-[39.5px] border-r-2 pr-5 md:pr-10">
              <Image
                src="/asset/images/avater.svg"
                height={48}
                width={48}
                alt="news reporter"
              />
              <div className="flex flex-col md:items-start">
                <h6 className="text-[#1E1D1D] text-xs sm:text-lg font-medium">
                  Sade Andremansori
                </h6>
                <span className="text-[#525252] text-xs sm:text-sm">
                  Content Writer
                </span>
              </div>
            </div>
            {/* date */}
            <p className="text-[#525252] -mt-10 text-xs sm:text-base">
              March 31st, 2023
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/asset/images/newHeroImage.svg"
              height={489}
              width={1110}
              alt="news hero"
              className=""
            />
          </div>
        </div>
        <div className="px-[5%] sm:px-[20%]">
          <div className="mt-8 mb-[31px]">
            {newsParagraphs.map((paragraph, index) => {
              return (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
          {/* social media */}
          <div className="flex gap-3 mb-[68px]">
            <p>Share this article:</p>
            <div className="flex gap-[12px]">
              {socialMediaIcons.map((icon, index) => {
                return (
                  <Link href="#">
                    <Image
                      src={`/asset/icons/${icon}`}
                      height={24}
                      width={24}
                      alt={icon}
                      key={index}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          {/* horizontal link */}
        </div>
        <div className="px-[10%]">
          <hr className="mb-8" />
          <NextRightPagination newsNext={newsNext} setNewsNext={setNewsNext} newsData={newsData}/>
        </div>
      </Layout>
    </>
  );
};

export default SpecificNews;
