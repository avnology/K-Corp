import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  Youtube,
  Linkedin,
  Instagram,
  Facebook,
  LucideProps,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full  px-4! bg-primary md:min-h-[10rem] text-white py-12! ">
      <div className=" container mx-auto! flex flex-col justify-center items-center  gap-6">
        <div className="flex flex-col md:flex-row w-full items-center justify-between">
          {" "}
          <div className="shrink-0">
            <Image
              height={40}
              width={160}
              src="/logo.png"
              alt="Logo"
              className="h-10 object-contain"
            />
          </div>
          <ul className="flex flex-wrap justify-center gap-6 text-sm tracking-wide">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li className="cursor-pointer hover:text-gray-300">About Us</li>
            <li className="cursor-pointer hover:text-gray-300">
              Our Companies
            </li>
            <li className="cursor-pointer hover:text-gray-300">Our Projects</li>
            <li className="cursor-pointer hover:text-gray-300">Contact Us</li>
          </ul>
          <div className="flex gap-4">
            <SocialIcon Icon={Youtube} />
            <SocialIcon Icon={Linkedin} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Facebook} />
          </div>
        </div>

        <div
          dir="ltr"
          className="mt-[18px] flex gap-4! items-center text-[10px] leading-6 font-medium text-white min-[400px]:text-[12px] md:text-[14px]"
        >
          <span>Ⓒ Designed by</span>
          <Image
            src="/AvnologyLogo.png"
            alt="Avnology"
            width={80}
            height={80}
          />
          <span>ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  Icon,
}: {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <div className="w-8 h-8 flex items-center justify-center border border-white rounded-full hover:bg-white/10 cursor-pointer transition">
      <Icon size={16} strokeWidth={1.5} />
    </div>
  );
}
