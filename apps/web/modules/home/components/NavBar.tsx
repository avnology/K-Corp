import React from "react";
import { Contrast, Instagram, Linkedin, Menu } from "lucide-react";
import NavMenu from "./NavMenu";
import ColorSwitcher from "./ColorSwitcher";

export default function NavBar() {
  return (
    <nav className="w-full  bg-primary ps-4! min-h-[97px] text-white flex items-center">
      <div className="flex items-center min-h-full xl:min-w-1/2 ">
        <div className="">
          <img
            src="/logo.png"
            alt="Logo"
            className="md:h-10 h-5 object-contain"
          />
        </div>
        <div className="mx-4! max-md:hidden w-[0.5px] bg-white min-h-full h-[97px]" />
        <p className="text-[7.88px] max-md:hidden max-w-44 leading-tight">
          THIS TEXT IS AN EXAMPLE OF TEXT THAT CAN BE REPLACED IN THE SAME
          SPACE. THIS TEXT HAS BEEN GENERATED FROM THE ARABIC TEXT GENERATOR,
          WHERE YOU CAN GENERATE SUCH TEXT
        </p>
      </div>
      <div className="flex justify-end items-center flex-1">
        <div className="mx-4! max-lg:hidden  w-[0.5px] bg-white min-h-full h-[97px]" />

        <ul className="flex gap-x-16! max-lg:hidden justify-center w-1/2 items-center text-sm tracking-wide">
          <li className="cursor-pointer hover:text-gray-300">ABOUT</li>
          <li className="cursor-pointer hover:text-gray-300">WORK</li>
          <li className="cursor-pointer hover:text-gray-300">CONTACT</li>
        </ul>

        <div className="grid grid-cols-2 max-lg:grid-rows-1 border-y-[0.5] border-y-white max-lg:grid-cols-3 grid-rows-2">
          <span className="row-span-2 flex max-lg:hidden justify-center items-center lg:border-[0.5] border-white col-span-1">
            <ColorSwitcher />
          </span>
          <span className="row-span-1 border-[0.5] border-white lg:border-x-0 col-span-1 p-3!">
            <Linkedin />
          </span>
          <span className="row-span-1 border-[0.5] border-white lg:border-x-0 col-span-1 p-3!">
            <Instagram />
          </span>
          <NavMenu />
        </div>
      </div>
    </nav>
  );
}
