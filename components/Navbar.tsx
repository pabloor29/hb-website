"use client";

import React from "react";
import { AlignJustify, Utensils } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { Variants, motion } from "framer-motion";


const annimUnderline = "font-Montserrat text-blueDark capitalize inline-block text-2xl relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blueDark hover:before:w-full hover:before:opacity-100";


const links = [
  {
    label: "accueil",
    href: "/",
  },
  {
    label: "galerie",
    href: "/galerie",
  },
  {
    label: "objectif line",
    href: "/objectif-line",
  },
];

const Variants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "linear",
      duration: 1,
      delay: 0.5,
    },
  },
};

function Navbar() {
  return (
    <nav className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "30%" }}
        variants={Variants}
        className="fixed w-full h-24 backdrop-blur justify-between items-center text-blueDark px-8 z-50 bg-blueSmoked/80 hidden lg:flex"
      >
        <a href="/">
          <div className="font-SFBurlington text-4xl px-5 flex flex-col hover:font-bold">
            <h1 className="leading-none mr-8">hélène</h1>
            <h1 className="leading-none ml-8">brodin</h1>
          </div>
        </a>
        <div>
          <li className="flex justify-center space-x-12">
            {links.map((link) => (
              <a
                href={link.href}
                className={annimUnderline}
              >
                {link.label}
              </a>
            ))}
          </li>
        </div>
      </motion.div>

      <div className="lg:hidden fixed top-6 z-50 flex justify-between w-full px-6">
        <Sheet key="left">
          <SheetTrigger className="overflow-hidden flex justify-center items-center w-10 h-10 rounded-full shadow">
            <img src="/menu-2-line.png" alt="hamburger menu icon" />
          </SheetTrigger>
          <SheetContent className="fixed z-50 gap-4 bg-blueSmoked p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 left-0 h-full w-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm">
            <SheetHeader>
              <SheetDescription className="flex flex-col">
                {links.map((items) => (
                  <a
                    key={items.label}
                    href={items.href}
                    className="overflow-hidden h-20 w-4/5 flex items-center text-blueDark hover:bg-blueDark hover:text-blueSmoked rounded-xl
                     duration-300 px-5 py-3 cursor-pointer"
                  >
                    <h3 className="text-2xl font-Montserrat tracking-wide">
                      {items.label.toUpperCase()}
                    </h3>
                  </a>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
