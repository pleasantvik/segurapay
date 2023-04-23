import Image from "next/image";
import React from "react";

type Props = {
  heading: string;
  subHeading: string;
  text: string;
};

type ImgProps = {
  imgSrc: string;
};
export const CardTextDiv = ({ heading, subHeading, text }: Props) => (
  <div className="flex flex-col items-start justify-center w-[100%]">
    <h3 className="text-[#243AC0] uppercase pt-4">{heading}</h3>
    <h2 className="lg:text-5xl sm:text-2xl font-bold   mb-4">{subHeading}</h2>
    <p className="">{text}</p>
  </div>
);

export const CardImgDiv = ({ imgSrc = "" }: ImgProps) => (
  <div className="md:w-[100%] m-auto">
    <Image src={imgSrc || ""} alt="desktop" height={400} width={600} />
  </div>
);

const Card = ({ children }: any) => {
  return (
    <div className="container flex items-center justify-center flex-col gap-8 md:flex-row sm:mb-10">
      {children}
    </div>
  );
};

export default Card;
