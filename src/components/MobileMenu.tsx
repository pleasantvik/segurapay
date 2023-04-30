import React from "react";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

interface IMenu {
  onClose: () => void;
  open: boolean | null;
}

interface IMenuData {
  name: string;
  pathURL: string;
  subMenu?: { nameTwo?: string; pathUrl: string; description?: string }[];
}

const MenuData: IMenuData[] = [
  {
    name: "Company",
    pathURL: "",
    subMenu: [
      {
        nameTwo: "about us",
        pathUrl: "/about",
        description:
          "Product-driven company that is focused on solving financial/ payment problems.",
      },
      {
        nameTwo: "Careers",
        pathUrl: "/careers",
        description:
          "Stay up to date and in the know of current trends in finance and general lifestyle.",
      },
    ],
  },
  {
    name: "Our Products",
    pathURL: "/products",
  },
  {
    name: "Documentation",
    pathURL: "/documentation",
  },
  {
    name: "Resources",
    pathURL: "",
    subMenu: [
      {
        nameTwo: "News and Updates",
        pathUrl: "/news",
        description:
          "Join our team, let’s build financial solutions for Africa and beyond.",
      },
    ],
  },
];
const MobileMenu = (props: IMenu) => {
  const { onClose, open } = props;
  return (
    <div
      className={`h-screen w-full bg-white fixed top-0   ${
        open
          ? "left-0 transition-all duration-300"
          : "-left-[100%] transition-all duration-300"
      } p-10 md:hidden z-10 `}
    >
      <RxCross2
        className="text-2xl text-black absolute top-4 right-6 cursor-pointer font-bold"
        onClick={onClose}
      />
      <div className="mt-8">
        {MenuData.map((menu, index) => {
          const { name, pathURL, subMenu } = menu;
          return (
            <div className="mb-4" key={`${name}-${index}`}>
              {name === "Company" || name === "Resources" ? (
                <h4 className="font-medium">{name.toUpperCase()}</h4>
              ) : (
                <Link href={pathURL} onClick={() => onClose()}>
                  <h4 className="mb-2 font-semibold text-blue-400">{name}</h4>
                </Link>
              )}

              <div className="sm:grid sm:grid-cols-2 gap-6">
                {subMenu?.map((sub, index) => {
                  const { nameTwo, pathUrl, description } = sub;
                  return (
                    <div className="mb-4" key={`${nameTwo}-${index}`}>
                      <Link href={pathUrl} onClick={() => onClose()}>
                        <h5 className="text-blue-400 font-semibold">
                          {nameTwo}
                        </h5>
                        <p className="text-gray-400">{description}</p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
