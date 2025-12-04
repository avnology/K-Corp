"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/modules/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import ColorSwitcher from "./ColorSwitcher";

export default function NavMenu() {
  const links = ["About", "Work", "Contact"];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden p-3!">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="bg-primary text-white border-none px-7! py-8!"
      >
        <SheetHeader className="flex items-center justify-between">
          <SheetTitle className="text-left text-2xl font-semibold">
            <Image
              width={400}
              height={1000}
              src="/logo.png"
              alt="Logo"
              className="w-28 h-auto"
            />
          </SheetTitle>
        </SheetHeader>

        <motion.nav
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mt-16 space-y-10"
        >
          {links.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="block text-2xl font-medium relative group tracking-wide"
            >
              <span className="group-hover:scale-110 inline-block transition-transform duration-300">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute bottom-10 end-10 text-2xl font-medium  group tracking-wide"
          >
            {" "}
            <ColorSwitcher />
          </motion.span>
        </motion.nav>
      </SheetContent>
    </Sheet>
  );
}
