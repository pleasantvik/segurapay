import Image from "next/image";
import React from "react";

const OurCompany = () => {
  return (
    <div>
      <main className="flex bg-[#EFFBFF] flex-col justify-start  items-center relative h-[400px] pt-8">
        <h2 className="text-[#243AC0]">Our Company</h2>
        <h1 className="text-[#1E1D1D] font-semibold text-[2rem] text-center">
          Reliable and trustworthy partner <br /> for financial institutions
        </h1>
        <p className="text-center w-[80%] text-[#525252]">
          SeguraPay is a product-driven company that is focused on solving
          financial/ payment problems. The company currently offers two
          products, SeguraPay and SeguraWallet, which are designed to provide
          secure, convenient, and efficient payment solutions.
        </p>
      </main>
      <div className="flex justify-center items-center sm:mt-[-5rem]  md:mt-[-10rem] px-6 relative flex-col">
        <Image
          src="/asset/images/desktop.png"
          alt="desktop"
          height={400}
          width={800}
        />
        <p className="md:w-[50%] text-center mt-4">
          We are a cutting-edge financial technology company that is
          revolutionizing the way people manage their money. Founded in 2022,
          SeguraPay is dedicated to using technology to empower individuals and
          businesses to make better financial decisions and achieve their
          financial goals. Reliable and trustworthy partner for financial
          institutions and businesses seeking innovative payment solutions.
        </p>
      </div>
      <div className=" bg-[#EFFBFF] p-16">
        <div className="">
          <div className="flex items-center justify-center flex-col mb-8 lg:flex-row">
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-[#243AC0] uppercase w-[70%] m-auto">
                Why trust us
              </h3>
              <h2 className="text-5xl  mb-4 lg:w-[70%] m-auto">
                Efficient and convenient payment solutions
              </h2>
              <p className="lg:w-[70%] m-auto">
                We are committed to innovation and constantly exploring new ways
                to use technology to improve the financial lives of our users.
                With a mission to make financial management accessible and easy
                for everyone, we are poised to become a leading player in the
                fintech industry.
              </p>
            </div>
            <div className="lg:w-[100%] m-auto">
              <Image
                src="/asset/images/payment-min.png"
                alt="desktop"
                height={400}
                width={600}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-8  flex-col mb-8 lg:flex-row">
            <div className="w-[100%]">
              <Image
                src="/asset/images/Lock-min.png"
                alt="desktop"
                height={400}
                width={600}
              />
            </div>
            <div className="flex flex-col items-start justify-center w-[100%]">
              <h3 className="text-[#243AC0] uppercase">Why trust us</h3>
              <h2 className="text-5xl  mb-4 ">
                Safe and Trustworthy Payments Solution
              </h2>
              <p className="">
                We are a reliable and trustworthy partner for financial
                institutions and businesses seeking innovative payment
                solutionsy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center">
        <h3 className="text-[#243AC0]">Our Season</h3>
        <h2 className="text-[#1E1D1D] text-5xl">Season Financial Expert</h2>
        <p className="w-[70%]">
          Our team is made up of seasoned financial experts and technology
          innovators who have come together to create a platform that is easy to
          use, secure, and effective. We understand the challenges that people
          face in managing their finances and have designed a suite of products
          and services that address these challenges.
        </p>
        <div>
          <Image
            src="/asset/images/team-min.png"
            alt="desktop"
            height={400}
            width={800}
          />
        </div>
      </div>
      <div className="flex  justify-center mt-8 ">
        <div>
          <Image
            src="/asset/images/handshake.png"
            alt="desktop"
            height={400}
            width={600}
          />
        </div>
        <div
          style={{
            backgroundImage: `url(/asset/images/world-map-min.png)`,
          }}
          className="bg-[#1E1D1D] text-[#fff] p-4 flex flex-col items-start justify-center"
        >
          <h4 className="mb-4">Careers</h4>
          <h3 className="mb-2">Come Join us</h3>
          <p className="mb-4">
            Join our team, let’s build financial solutions for Africa and
            beyond.
          </p>
          <button className="bg-[#243AC0] px-4 py-2 rounded-md">
            Open Roles
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
