import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import Card from "../reusable/card/Card";
import { CardImgDiv } from "../reusable/card/CardImgDiv";

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
    <div>
      <div className="container mx-auto px-4">
        {/* section header */}
        <div className="text-center mb-[60px] pt-[4rem]">
          <span className="text-[#243AC0]">BENEFIT</span>
          <h3 className="text-[#1E1E1D] font-semibold text-2xl md:text-3xl lg:text-4xl leading-[1.5rem]">
            SeguraWallet offers several benefits for clients
          </h3>
        </div>

        <div>
          <Card>
            <CardImgDiv imgSrc="/asset/images/FundWallet.svg" />
            <div className="w-[100%]">
              {BenefitsData.map((data, index) => {
                const { title, description, icon } = data;
                return (
                  <div
                    className="flex flex-col items-start justify-start  md:flex-row md:justify-start md:items-start mb-8"
                    key={title}
                  >
                    <div className="">
                      <Image
                        src={icon}
                        alt={title}
                        className=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="flex flex-col justify-start">
                      <h4 className="font-bold">{title}</h4>
                      <p className="lg:w-[423px]">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
      <div className="bg-[#EFFBFF]">
        <div className="container mx-auto  section-layout">
          <div className="h-full pt-[95px] pb-[108px] px-10 flex flex-col items-start">
            <h3 className="section-title">
              Easy Integration & <br /> Secure Transactions
            </h3>
            <p className="section-description mb-4">
              SeguraWallet provides an easy-to-use API that can be integrated
              into a client&apos;s system. This allows clients to seamlessly
              manage their customers transactions from their own platform.
            </p>

            <p className="section-description mb-6">
              Our API is easy to integrate into a client&apos;s system, allowing
              them to manage their customers&apos; transactions from their own
              platform. SeguraWallet also employs advanced security measures to
              ensure the safety of its clients and customers&apos; funds.
            </p>
            <button className="bg-[#EFFBFF] border border-[#54D9EE] py-4 px-6 rounded-lg flex items-center gap-2 text-[#243AC0] font-medium">
              Explore Documentation <BsArrowUpRight />
            </button>
          </div>
          <div className="h-full bg-gradient-to-br from-[#54D9EE] to-[#243AC0] relative hidden lg:block">
            <Image
              src="/asset/images/codePicture.svg"
              height={581}
              width={561}
              alt="code picture"
              className="lg:absolute lg:bottom-0 lg:left-[50%] ml-[50%] lg:ml-0 -translate-x-1/2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
