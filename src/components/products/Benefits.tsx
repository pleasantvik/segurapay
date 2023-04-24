import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

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
    <div className="h-[1620px] pt-[148px]">
      {/* section header */}
      <div className="text-center mb-[60px]">
        <span className="section-name">BENEFIT</span>
        <h3 className="section-title leading-[60px]">
          SeguraWallet offers several benefits <br /> for clients
        </h3>
      </div>

      <div className="section-layout pl-[108px] pr-[100px] pb-[128px]">
        <div>
          <img src="asset/images/FundWallet.svg" alt="fund wallet" />
        </div>
        <div className="">
          {BenefitsData.map((data, index) => {
            const { title, description, icon } = data;
            return (
              <div className="flex items-start mb-2" key={title}>
                <div className="-mt-7">
                  <img src={icon} alt={title} />
                </div>
                <div className="">
                  <h4 className="font-bold text-2xl mb-[10px]">{title}</h4>
                  <p className="section-description w-[423px]">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-[676px] bg-[#EFFBFF] grid grid-cols-2">
        <div className="h-full pt-[95px] pb-[108px] pl-[105px] pr-[122px]">
          <h3 className="section-title">
            Easy Integration & <br /> Secure Transactions
          </h3>
          <p className="section-description mb-4">
            SeguraWallet provides an easy-to-use API that can be integrated into
            a client's system. This allows clients to seamlessly manage their
            customers' transactions from their own platform.
          </p>

          <p className="section-description mb-6">
            Our API is easy to integrate into a client's system, allowing them
            to manage their customers' transactions from their own platform.
            SeguraWallet also employs advanced security measures to ensure the
            safety of its clients and customers' funds.
          </p>
          <div className="bg-gradient-to-r from-[#54D9EE] to-[#243AC0] rounded-lg p-[2px] w-[250px]">
            <button className="bg-[#EFFBFF] py-4 px-6 rounded-lg flex items-center gap-2 text-[#243AC0] font-medium">
              Explore Documentation <BsArrowUpRight />
            </button>
          </div>
        </div>
        <div className="bg-[#54D9EE] relative">
            <img src="/asset/images/codePicture.svg" alt="code picture" className="absolute bottom-0 left-[50%] -translate-x-1/2"/>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
