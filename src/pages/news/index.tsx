import React, {useState, useEffect} from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import TransparentNavbar from "@/components/TransparentNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Filters from "@/components/news/Filters";
import NewsList from "@/components/news/NewsList";
import { newsData } from "@/MockData/MockNewsData";
import Pagination from "@/components/news/Pagination";


const News = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(4)

    const lastIndex = currentPage * postPerPage
    const firstIndex = lastIndex - postPerPage

    const paginatedData = newsData.slice(firstIndex, lastIndex)

  return (
    <>
      <Head>
        <title>News and Update</title>
        <meta name="news and update" content="new and update" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/asset/images/Logo.svg" />
      </Head>
        
      <div className="text-white text-center pb-[89px] mb-[43px]" style={{backgroundImage: 'url(/asset/images/newsHead.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <TransparentNavbar />
        <div className="mt-[121px]">
          <span className="text-base font-medium mb-[10px]">NEWS AND UPDATES</span>
          <h2 className="text-4xl p-5 md:text-5xl font-semibold mb-[18px]">News, Publications and more</h2>
          <p className="text-lg p-2">
            Stay up to date and in the know of current trends in Tech and
            general lifestyle.
          </p>
        </div>
      </div>
      <div>
        <Filters/>
        <NewsList paginatedData={paginatedData}/>
        <Pagination postPerPage={postPerPage} newsData={newsData} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </div>
      <Footer />
    </>
  );
};

export default News;
