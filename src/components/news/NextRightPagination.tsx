import React from "react";
import Image from "next/image";
import Link from "next/link";
import { INewsData } from "@/MockData/MockNewsData";

interface INext {
  newsNext: number;
  setNewsNext: (e: any) => void;
  newsData: INewsData[];
}

const NextRightPagination = (props: INext) => {
  const { newsNext, setNewsNext, newsData } = props;
  const nextData = newsData.find((_, index) => {
    if (newsNext === 0) {
      return index === newsNext + 2;
    } else if (index > 0 && index < newsData.length - 2) {
      return index === newsNext + 1;
    } else {
      return index === newsData.length - 1;
    }
  });
  const prevData = newsData.find((_, index) => {
    if (newsNext === 0) {
      return index === 0;
    } else if (newsNext === 1) {
      return index === newsNext - 1;
    } else {
      return index === newsNext - 2;
    }
  });
  const nextTitle = nextData?.newsTitle;
  const prevTitle = prevData?.newsTitle;

//   console.log(nextTitle);
//   console.log(prevTitle);

  return (
    <div className="flex justify-between mb-[100px] gap-4">
      <div className="flex items-center gap-[18px]">
        <Image
          src="/asset/images/newsThumbnail1.svg"
          height={91}
          width={101}
          alt="news thumbnail"
          className="hidden sm:block"
        />
        <div className="flex flex-col justify-between">
          <p className="max-w-[247px] min-w-[30px] text-xs lg:text-base">
            {prevTitle}
          </p>
          <Link
            href="#"
            className="flex gap-3 text-[#243AC0] text-xs lg:text-base"
            onClick={() =>
              setNewsNext(() => {
                if (newsNext <= 0) {
                  return 0;
                } else {
                  return newsNext - 1;
                }
              })
            }
          >
            <Image
              src="/asset/icons/arrowLeft.svg"
              height={0}
              width={17}
              alt="right left"
            />
            Previous
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-[18px]">
        <Image
          src="/asset/images/newsThumbnail2.svg"
          height={91}
          width={101}
          alt="news thumbnail"
          className="hidden sm:block"
        />
        <div className="flex flex-col justify-between">
          <p className="max-w-[247px] min-w-[30px]  text-xs lg:text-base">
            {nextTitle}
          </p>
          <Link
            href="#"
            className="flex gap-3 text-[#243AC0] text-xs lg:text-base"
            onClick={() =>
              setNewsNext(() => {
                if (newsNext >= newsData.length) {
                  return newsData.length;
                } else {
                  return newsNext + 1;
                }
              })
            }
          >
            Next{" "}
            <Image
              src="/asset/icons/arrowRight.svg"
              height={0}
              width={17}
              alt="right arrow"
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NextRightPagination;
