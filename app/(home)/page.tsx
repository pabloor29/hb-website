"use client";

import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Variants, motion } from "framer-motion";
import React from "react";

const imagesVariants: Variants = {
  hiddenBottom: {
    y: 100,
    opacity: 0,
  },
  visibleBottom: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
  hiddenLeft: {
    x: 200,
    opacity: 0,
  },
  visibleLeft: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
  hiddenRight: {
    x: -200,
    opacity: 0,
  },
  visibleRight: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <HeroBanner />
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-40 gap-10 mx-10 my-14">
          <div className="w-6/7 md:w-1/3">
          <motion.div
            initial="hiddenRight"
            whileInView="visibleRight"
            viewport={{ once: true, margin: "-20%" }}
            variants={imagesVariants}
          >
            <img className="shadow-2xl -scale-x-100" src="/art/Poisson/Poisson-01.jpeg" alt="" /> 
          </motion.div>
          </div>
          <div className="w-6/7 md:w-1/3">
          <motion.div
            initial="hiddenLeft"
            whileInView="visibleLeft"
            viewport={{ once: true, margin: "-20%" }}
            variants={imagesVariants}
          >
            <h2 className="font-SFBurlington text-4xl mb-8">QUI SUIS-JE ?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis mollitia debitis velit minus autem blanditiis dolorem enim provident fugiat magni ab aliquam deleniti quidem earum, molestiae dicta, recusandae accusamus quibusdam. Dolorum placeat esse fugit excepturi pariatur, provident, voluptates asperiores doloremque repellat dolore a. Soluta ducimus hic enim delectus laudantium sit.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim blanditiis, animi, laborum laboriosam expedita sint est aspernatur nulla modi, iure aut! Quisquam provident iure facilis modi nobis, neque corrupti quos rem velit veniam tenetur nisi itaque, porro, aliquid architecto sit quis at dolores a aperiam! Eius repudiandae accusantium eveniet omnis.
            </p>           
          </motion.div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-40 gap-10 mx-10 my-14">
          <div className="w-6/7 md:w-1/3">
          <motion.div
            initial="hiddenRight"
            whileInView="visibleRight"
            viewport={{ once: true, margin: "-20%" }}
            variants={imagesVariants}
          >
            <h2 className="font-SFBurlington text-4xl mb-8">QUE FAIS-JE?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis mollitia debitis velit minus autem blanditiis dolorem enim provident fugiat magni ab aliquam deleniti quidem earum, molestiae dicta, recusandae accusamus quibusdam. Dolorum placeat esse fugit excepturi pariatur, provident, voluptates asperiores doloremque repellat dolore a. Soluta ducimus hic enim delectus laudantium sit.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim blanditiis, animi, laborum laboriosam expedita sint est aspernatur nulla modi, iure aut! Quisquam provident iure facilis modi nobis, neque corrupti quos rem velit veniam tenetur nisi itaque, porro, aliquid architecto sit quis at dolores a aperiam! Eius repudiandae accusantium eveniet omnis.
            </p>
          </motion.div>
          </div>
          <div className="w-6/7 md:w-1/3">
          <motion.div
            initial="hiddenLeft"
            whileInView="visibleLeft"
            viewport={{ once: true, margin: "-20%" }}
            variants={imagesVariants}
          >
            <img className="shadow-2xl" src="/art/Loup/Loup-01.jpeg" alt="" />
          </motion.div>
          </div>
        </div>
      </div>
      <Footer />
      <Analytics />
    </main>
  );
}
