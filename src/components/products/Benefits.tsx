import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";

interface IBenefit {
  title: string;
  description: string;
  icon: string;
}

const BenefitsData: IBenefit[] = [
  {
    title: "Increased Revenue",
    description:
      " Clients can increase their revenue by providing an easy and secure way for customers to add funds to their wallets",
    icon: "/asset/icons/benefitIcon1.svg",
  },
  {
    title: "Customer Loyalty",
    description:
      " SeguraWallet allows clients to offer their customers a convenient and seamless payment experience. This can lead to increased customer satisfaction and loyalty",
    icon: "/asset/icons/benefitIcon2.svg",
  },
  {
    title: "Cost-Effective",
    description:
      "SeguraWallet is a cost-effective solution for clients who want to offer their customers a wallet service without having to invest in developing their own solution.",
    icon: "/asset/icons/benefitIcon3.svg",
  },
];

const Benefits = () => {
  return (
    <div className="pt-10 nxl:pt-[165px]">
      {/* section header */}
      <div className="text-center mb-[60px]">
        <span className="section-name">BENEFIT</span>
        <h3 className="section-title px-10 lg:leading-[60px] lg:w-[835px] lg:ml-[50%] lg:-translate-x-1/2">
          SeguraWallet offers several benefits for clients
        </h3>
      </div>

      <div className="section-layout px-10 lg:pl-[108px] lg:pr-[100px] pb-[128px]">
        <div className="flex justify-center">
          <Image
            src="/asset/images/FundWallet.svg"
            height={400}
            width={800}
            alt="Fund Wallet"
          />
        </div>
        <div className="">
          {BenefitsData.map((data, index) => {
            const { title, description, icon } = data;
            return (
              <div
                className="flex flex-col items-center lg:flex-row lg:items-start mb-2"
                key={title}
              >
                <div className="">
                  <img src={icon} alt={title} className="" />
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="font-bold mb-[10px]">{title}</h4>
                  <p className="lg:w-[423px]">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" bg-[#EFFBFF] section-layout">
        <div className="h-full pt-[95px] pb-[108px] pl-10 md:pl-[105px] pr-10 nxl:pr-[122px]">
          <h3 className="section-title">
            Easy Integration & <br /> Secure Transactions
          </h3>
          <p className="section-description mb-4">
            SeguraWallet provides an easy-to-use API that can be integrated into
            a client&apos;s system. This allows clients to seamlessly manage
            their customers transactions from their own platform.
          </p>

          <p className="section-description mb-6">
            Our API is easy to integrate into a client&apos;s system, allowing
            them to manage their customers&apos; transactions from their own
            platform. SeguraWallet also employs advanced security measures to
            ensure the safety of its clients and customers&apos; funds.
          </p>
          <div className="bg-gradient-to-r from-[#54D9EE] to-[#243AC0] rounded-lg p-[2px] w-[250px]">
            <button className="bg-[#EFFBFF] py-4 px-6 rounded-lg flex items-center gap-2 text-[#243AC0] font-medium">
              Explore Documentation <BsArrowUpRight />
            </button>
          </div>
        </div>
        <div className="md:h-full bg-gradient-to-br from-[#54D9EE] to-[#243AC0] relative">
          <Image
            src="/asset/images/codePicture.svg"
            height={581}
            width={561}
            alt="code picture"
            className="lg:absolute lg:bottom-0 lg:left-[50%] ml-[50%] lg:ml-0 -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
