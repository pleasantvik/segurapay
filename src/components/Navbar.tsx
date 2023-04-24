import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import CompanyDropdown from "./CompanyDropdown";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<boolean | null>(null);
  const [location, setLocation] = useState<number | null>(0)
  const subMenuPosition = useRef(null);

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
    <div className="h-24 bg-[#00093E] flex justify-between text-white items-center px-[100px]">
      <div>
        <img src="/asset/images/Logo.svg" alt="" />
      </div>
      <nav>
        <ul className="flex gap-10">
          <li
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => {
              setOpenDropdown(!openDropdown);
            }}
            ref={subMenuPosition}
          >
            Company <IoIosArrowDown />
          </li>
          <li>
            <Link href="/products">Our Products</Link>
          </li>
          <li>
            <Link href="/documentation">Documentation</Link>
          </li>
        </ul>
      </nav>
      <div className="bg-gradient-to-r from-[#54D9EE] to-[#243AC0] rounded-lg p-[2px]">
        <button className="bg-[#00093E] py-4 px-6 rounded-lg">
          Get Started
        </button>
      </div>
      {openDropdown && (
        <CompanyDropdown onAction={() => setOpenDropdown(null)} position={location} />
      )}
    </div>
  );
};

export default Navbar;