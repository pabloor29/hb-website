"use client";

import { Variants, motion } from "framer-motion";
import React from "react";

const textVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

function HeroBanner() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="h-screen w-full flex justify-center items-center bg-black/60 absolute z-10"></div>
      <img
        src="/banner/banner_home.webp"
        alt=""
        className="w-full h-screen object-cover absolute z-0 rotate"
      />
      <div className="relative z-20 flex flex-col items-center justify-center leading-none text-center">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-bigSM lg:text-bigLG text-white font-Babylonica
            tracking-wide z-30 drop-shadow-[3px_3px_0_#778DA9]"
        >
          Hélène B.B
        </motion.h1>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="z-10 text-white/90 font-Calibri lg:text-2xl"
        >
          <p className="text-3xl">
            Artiste peintre spécialisée dans la faune et la flore
          </p>
        </motion.h3>
      </div>
    </div>
  );
}

export default HeroBanner;
