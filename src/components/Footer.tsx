import React from "react";
import Link from "next/link";
import Image from "next/image";

interface InnerFooter {
  name: string;
  pathUrl?: string;
}
interface Ifooter {
  title: string;
  items: InnerFooter[];
}

const footerData: Ifooter[] = [
  {
    title: "Company",
    items: [
      {
        name: "About",
        pathUrl: "/about",
      },
      {
        name: "Blog",
        pathUrl: "/news",
      },
      {
        name: "Careers",
        pathUrl: "/careers",
      },
      {
        name: "Contact Us",
        pathUrl: "/contact",
      },
    ],
  },
  {
    title: "Our Products",
    items: [
      {
        name: "Segura Wallet",
        pathUrl: "/product",
      },
    ],
  },
  {
    title: "Developers",
    items: [
      {
        name: "Documentation",
        pathUrl: "/documentation",
      },
    ],
  },
  {
    title: "Legal",
    items: [
      {
        name: "Privacy Policy",
        pathUrl: "/privacy",
      },
      {
        name: "Developer Policy",
        pathUrl: "/privacy",
      },
      {
        name: "Terms of Service",
        pathUrl: "/privacy",
      },
      {
        name: "Cookies",
        pathUrl: "/privacy",
      },
    ],
  },
  {
    title: "Contact Us",
    items: [
      {
        name: "Kendall Square - Third Street Cambridge, MA USA",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-[#00093E]">
      <section
        className="container mx-auto px-4 py-5"
        style={{
          backgroundImage: `url(/asset/images/WorldMap.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-6">
          {footerData.map((data, index) => {
            const { title, items } = data;
            return (
              <div key={`${data}-${index}`}>
                <h4 className="text-white font-bold mb-4 text-lg">{title}</h4>
                <ul className="">
                  {items.map((el, index) => {
                    const { name, pathUrl } = el;
                    return (
                      <li
                        className="text-white text-opacity-60 mb-2"
                        key={index}
                      >
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <hr />

        {/* subscribe section */}
        <div className="flex flex-col md:flex-row text-white justify-between items-center my-8">
          <div className="w-[100%]">
            <h3 className="font-semibold text-lg">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p className="text-lg leading-7 text-white text-opacity-60">
              A monthly digest of the latest news, articles, and <br />{" "}
              resources
            </p>
          </div>
          <form className="flex flex-col gap-4 w-[100%]">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#C7C7C7] w-[100%] rounded-lg py-2 px-4 text-[#525252] text-base"
            />
            <button
              type="submit"
              className=" bg-[#243AC0] text-white rounded-lg h-[54px]"
            >
              Subscribe
            </button>
          </form>
        </div>

        <hr className="my-10" />

        {/* footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white">
          <Image src="/asset/images/Logo.svg" alt="" height={150} width={150} />

          <div className="text-white text-opacity-60">
            &copy; {new Date().getFullYear()} SeguraPay. All right reserved
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
