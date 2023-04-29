import React from "react";
import Image from "next/image";
import Link from "next/link";
import { newsData } from "@/MockData/MockNewsData";
import { INewsData } from "@/MockData/MockNewsData";

export interface IPaginate {
    paginatedData: INewsData[],
}

const NewsList = (props:IPaginate) => {
    const {paginatedData} = props
  return (
    <div className="px-[10%] grid gap-10 sm:grid sm:grid-cols-2 mb-[66px]">
      {paginatedData.map((news) => {
        const { id, image, newsType, newsTitle, shortDescription } = news;
        return (
          <div key={id}>
            <Link href={`/news/${id}`}>
              <Image
                src={image}
                height={338}
                width={510}
                alt={newsTitle}
                className="mb-8"
              />
              <button className="bg-[#F1F3FE] py-1 px-2 text-[#243AC0] text-[12px] font-medium rounded-md mb-6">
                {newsType.toUpperCase()}
              </button>
              <h3 className="mb-6 font-semibold text-xl text-[#1E1D1D]">
                {newsTitle}
              </h3>
              <p className="text-[#525252] text-lg max-w-[470px]">
                {shortDescription}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;
