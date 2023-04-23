import React from "react";
import Link from "next/link";

type dropDown = {
  title: string;
  description: string;
  pathUrl: string;
};

const dropDownData: dropDown[] = [
  {
    title: "About Us",
    description:
      "Product-driven company that is focused on solving financial/ payment problems.",
    pathUrl: "/about",
  },
  {
    title: "News and Updates",
    description:
      "Stay up to date and in the know of current trends in finance and general lifestyle. ",
    pathUrl: "/news",
  },
  {
    title: "Careers",
    description:
      "Join our team, let’s build financial solutions for Africa and beyond.",
    pathUrl: "/careers",
  },
];

interface IDropdownOptions {
  onAction: () => void;
  position?: number | null
}

const CompanyDropdown = (props: IDropdownOptions) => {
  const { onAction, position } = props;

  return (
    <div className={`absolute top-20 left-[${position}px] w-[677px] h-[406px] bg-white rounded-br-lg rounded-bl-lg z-10 text-black p-8`}>
      <div className="grid grid-cols-2 gap-16 text-sm text-[#243AC0] mb-[14px]">
        <p>COMPANY</p>
        <p>
          <Link href="/news">RESOURCES</Link>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-8">
        {dropDownData.map((data, index) => {
          const { title, description, pathUrl } = data;
          return (
            <div key={`${title}-${index}`}>
              <Link
                href={pathUrl}
                onClick={() => {
                  onAction();
                }}
              >
                <h4 className="text-lg text[#1E1D1D] font-medium mb-[6px]">
                  {title}
                </h4>
                <p className="text-[#525252] font-normal">{description}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyDropdown;
