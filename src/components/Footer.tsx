import React from "react";
import Link from "next/link";

interface InnerFooter {
  name: string,
  pathUrl?: string
}
interface Ifooter {
  title: string,
  items: InnerFooter[]
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
    <section
      className="bg-[#00093E] h-[592px] px-[101px] py-[62.17px]"
      style={{
        backgroundImage: `url(/asset/images/WorldMap.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-5 mb-6">
        {footerData.map((data, index) => {
          const { title, items } = data;
          return (
            <div key={`${data}-${index}`}>
              <h4 className="text-white font-bold mb-4 text-lg">{title}</h4>
              <ul className="">
                {items.map((el, index) => {
                  const {name, pathUrl} = el
                  return <li className="text-white mb-2" key={index}>{name}</li>
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <hr />
      
      {/* subscribe section */}
      <div className="flex text-white justify-between items-center my-8" >
        <div>
          <h3 className="font-semibold text-lg">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p className="text-lg leading-7">A monthly digest of the latest news, articles, and <br/> resources</p>
        </div>
        <form action="">
          <input type="email" placeholder="Enter your email" className="bg-[#C7C7C7] w-[384px] h-[59px] rounded-lg py-2 px-4 text-[#525252] text-base"/>
          <button type="submit" className="w-48 bg-[#243AC0] text-white rounded-lg h-[54px] ml-4">Subscribe</button>
        </form>
      </div>

      <hr className="my-10"/>

      {/* footer bottom */}
      <div className="flex justify-between items-center text-white">
        <img src="/asset/images/Logo.svg" alt="" />
        <div>&copy; {new Date().getFullYear()} SeguraPay. All right reserved</div>
      </div>
    </section>
  );
};

export default Footer;
