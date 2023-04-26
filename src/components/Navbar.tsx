import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import CompanyDropdown from "./CompanyDropdown";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<boolean | null>(null);
  const [openMenu, setOpenMenu] = useState<boolean | null>(null);
  const [location, setLocation] = useState<number | null>(0);
  const subMenuPosition = useRef(null);

  const [mobileNav, setMobileNav] = useState(false);

  // useEffect(() => {
  //   const item: JsxElement | null = subMenuPosition.current;
  //   const position = item?.getBoundingClientRect();
  //   const center = (position.left + position.width) /2
  //   console.log(center)
  //   setLocation(center)
  //   console.log(position)
  //   console.log(item);
  // }, [location]);

  return (
    <div className=" bg-[#00093E] ">
      <div className=" flex justify-between gap-5 md:gap-10  text-white items-center container mx-auto px-4 py-5">
        <div>
          <Image
            src="/asset/images/Logo.svg"
            alt="company logo"
            height={150}
            width={150}
          />
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-5 md:gap-10 flex-col md:flex-row items-center">
            <li
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                setOpenDropdown(!openDropdown);
              }}
              ref={subMenuPosition}
            >
              Company <IoIosArrowDown />
            </li>
            <li className="whitespace-nowrap">
              <Link href="/products">Our Products</Link>
            </li>
            <li>
              <Link href="/documentation">Documentation</Link>
            </li>
          </ul>
        </nav>
        <div className="bg-gradient-to-r from-[#54D9EE] to-[#243AC0] rounded-lg p-[2px] hidden md:block">
          <button className="bg-[#00093E] py-4 px-6 rounded-lg whitespace-nowrap">
            Get Started
          </button>
        </div>
        {openDropdown && (
          <CompanyDropdown
            onAction={() => setOpenDropdown(null)}
            position={location}
          />
        )}
        <HiMenu className="text-white md:hidden text-3xl cursor-pointer" onClick={()=>setOpenMenu(true)}/>
      </div>
      <MobileMenu onClose={()=>{
        setOpenMenu(null)}} open={openMenu}/>
    </div>
  );
};

export default Navbar;
