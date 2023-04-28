import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type FeatureGrid = {
  icon: string;
  title: string;
  text: string;
};

type Props = {
  opening: any;
};

const feature: FeatureGrid[] = [
  {
    icon: "/asset/icons/checkmark.svg",
    title: "Job Security",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "/asset/icons/globe.svg",
    title: "Job Security",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "/asset/icons/home.svg",
    title: "Job Security",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
const Career = ({ opening }: Props) => {
  const router = useRouter();
  return (
    <div>
      <section className="flex bg-[#EFFBFF] flex-col justify-start  items-center relative  sm:h-[300px] md:h-[400px] pt-8">
        <h2 className="text-[#243AC0]">Careers</h2>
        <h1 className="text-[#1E1D1D] font-semibold lg:text-[2rem] text-center flex flex-col sm:text-[1.5rem] leading-tight">
          SeguraPay Careers
        </h1>
        <p className="container mx-auto px-4 text-center  text-[#525252] ">
          Join our team, let’s build financial solutions for Africa and beyond.
        </p>
      </section>
      <div className="container mx-auto px-4 flex justify-center items-center sm:mt-[-5rem]  md:mt-[-10rem]  relative flex-col">
        <Image
          src="/asset/images/team-min.png"
          alt="desktop"
          height={400}
          width={800}
        />
        <p className="container mx-auto sm:px-4 text-[14px] sm:text-[20px]    mt-4 flex items-center justify-center">
          Our team is made up of seasoned financial experts and technology
          innovators who have come together to create a platform that is easy to
          use, secure, and effective. We understand the challenges that people
          face in managing their finances and have designed a suite of products
          and services that address these challenges.
        </p>
      </div>
      <section className="container mx-auto px-4 my-16">
        <h2 className="text-[#243AC0] text-center font-semibold">Features</h2>
        <h2 className="text-[#1E1D1D] text-center">Perks on the Job</h2>
        <p className="text-[#1E1D1D] text-center">
          Join our team, let’s build financial solutions for Africa and beyond.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
          {feature.map((item) => (
            <div
              className="flex flex-col items-start justify-center"
              key={item.icon}
            >
              <Image
                src={item.icon}
                height={50}
                width={50}
                alt="checkmark icon"
              />
              <h3 className="text-[#1e1d1d] font-semibold">{item.title}</h3>
              <p className="text-[#525252]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="md:flex gap-4 hidden md:flex-row mb-10">
        <div className="w-full">
          <Image
            src="/asset/images/tutor.svg"
            height={400}
            width={400}
            alt="tutor image"
            className="w-full"
          />
        </div>
        <div className="w-full">
          <Image
            src="/asset/images/tutor.svg"
            height={400}
            width={400}
            alt="tutor image"
            className="w-full"
          />
        </div>
        <div className="w-full">
          <Image
            src="/asset/images/tutor.svg"
            height={400}
            width={400}
            alt="tutor image"
            className="w-full"
          />
        </div>
      </div>
      <section className="bg-[#EFFBFF]">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-[#243AC0]  font-semibold">Current Openings</h2>
            <h3>Discover opportunities at Seguraypay</h3>
            <input type="text" placeholder="search" />
            <select name="" id="">
              <option value="All">All</option>
            </select>
            <hr className="my-10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {opening?.map(
              (item: {
                id: React.Key | null | undefined;
                title:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
                location:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
              }) => (
                <div
                  className="bg-white flex flex-col items-start"
                  key={item.id}
                >
                  <h3>{item.title}</h3>
                  <span>{item.location}</span>
                  <button
                    onClick={() => router.push(`${router.route}/${item.id}`)}
                  >
                    More Details
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
