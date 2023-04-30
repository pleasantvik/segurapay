import React, { useState, useEffect, useMemo } from "react";
import { INewsData } from "@/MockData/MockNewsData";

interface IDummy {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface IPaginate {
  postPerPage: number;
  newsData: INewsData[];
  setCurrentPage: (e: any) => void;
  currentPage: any;
}

let numberedPages;
const dummyPage = [1, 2, 3];
let pages: number[] = [];
const Pagination = (props: IPaginate) => {
  const { postPerPage, newsData, setCurrentPage, currentPage } = props;

  //to be reviewed
  //   for (let i = 1; i <= Math.ceil(newsData.length / postPerPage); i++) {
  //     pages.push(i);
  //   }
  //   console.log(pages)

  //   if(pages.length >= 7){
  //     numberedPages = [pages.slice(0,3),'...', pages[pages.length - 1]].flat()

  //   }else{
  //     numberedPages = pages
  //   }
  return (
    <div className="flex gap-4 flex-wrap justify-center mb-[100px]">
      {dummyPage.map((page, index) => {
        return (
          <button
            key={index}
            className={`py-2 px-4 sm:py-4 sm:px-8 ${
              currentPage === page ? "bg-[#F1F3FE]" : "bg-white"
            } rounded-lg`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
