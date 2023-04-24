import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";


const Hero = () => {
  return (
    <div>
        <div className="h-[658px] flex justify-center items-center gap-24">
        <div className="absolute top-0 right-0 -z-10">
          <img src="/asset/images/pattern3.svg" alt="pattern 3" />
        </div>
        <div className="absolute top-0 left-0 -z-10">
          <img src="/asset/images/Pattern4.svg" alt="pattern 4" />
        </div>
        <div>
          <h2 className="text-7xl font-semibold mb-5 text-[#1E1D1D]">
            <span className="text-[#7B8CF5]">Easy & Secure</span>
            <br />
            <span className="text-[#7B8CF5]">Solution</span> for <br />{" "}
            Businesses
          </h2>
          <p className="text-2xl mb-10">
            Easy and secure way to manage transactions <br /> from your Business
            and Personal platform.
          </p>
          <button className="flex items-center gap-2 bg-[#243AC0] text-white rounded-lg py-4 px-6">
            Get Started <BsArrowUpRight />
          </button>
        </div>
        <div>
          <img src="/asset/images/Segurawallet.svg" alt="Segura Wallet" />
        </div>
      </div>
    </div>
  )
}

export default Hero