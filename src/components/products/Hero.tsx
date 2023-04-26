import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="pt-8 pb-16 flex flex-col md:flex-row items-center gap-4 px-10 ">
        <div className="flex w-[100%]">
          <Image
            src="/asset/images/Pattern4.svg"
            height={400}
            width={800}
            alt="pattern 4"
            className="absolute top-0 left-0 -z-10"
          />
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:7xl font-semibold mb-5 text-[#1E1D1D] xl:w-[511px]">
              <span className="text-[#7B8CF5]">Easy & Secure Solution</span> for
              Businesses
            </h2>
            <p className="text-2xl mb-10 leading-8 nxl:w-[542px]">
              Easy and secure way to manage transactions from your Business and
              Personal platform.
            </p>
            <button className="flex items-center gap-2 bg-[#243AC0] text-white rounded-lg py-4 px-6">
              Get Started <BsArrowUpRight />
            </button>
          </div>
        </div>
        <div className="flex w-[100%]">
          <Image
            src="/asset/images/Pattern3.svg"
            height={400}
            width={600}
            alt="pattern 4"
            className="absolute top-0 right-0 -z-10 hidden md:block"
          />
          <div>
            <Image
              src="/asset/images/Segurawallet.svg"
              height={400}
              width={600}
              alt="pattern 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
