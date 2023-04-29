import React, { useState, useRef, useEffect } from "react";
import TransparentNavbar from "./TransparentNavbar";

const Navbar = () => {

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
        <TransparentNavbar/>
    </div>
  );
};

export default Navbar;
