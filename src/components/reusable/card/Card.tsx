import Image from "next/image";
import React from "react";

const Card = ({ children }: any) => {
  return (
    <div className="container flex items-center justify-center flex-col gap-8 md:flex-row sm:mb-10">
      {children}
    </div>
  );
};

export default Card;
