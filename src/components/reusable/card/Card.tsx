import Image from "next/image";
import React from "react";

const Card = ({ children }: any) => {
  return (
    <div className="container mx-auto px-4 flex items-center justify-center flex-col gap-8 md:flex-row sm:mb-10">
      {children}
    </div>
  );
};

export default Card;
