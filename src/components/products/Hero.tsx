import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="lg:h-[658px] grid grid-cols-1 lg:grid-cols-2 items-center gap-4 px-10 md:px-[103px]">
        <div className="absolute top-0 right-0 -z-10">
          <Image
            src="/asset/images/Pattern3.svg"
            height={400}
            width={800}
            alt="pattern 4"
          />

          {/* <img src="/asset/images/pattern3.svg" alt="pattern 3" /> */}
        </div>
        <div className="absolute top-0 left-0 -z-10">
          <Image
            src="/asset/images/Pattern4.svg"
            height={400}
            width={800}
            alt="pattern 4"
          />
        </div>
        <div className="mt-20 lg:mt-0 mb-10 lg:mb-0">
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
        <div className="flex justify-center">
          <Image
            src="/asset/images/Segurawallet.svg"
            height={400}
            width={800}
            alt="pattern 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
