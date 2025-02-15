"use client";

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CustomHeroBanner from '@/components/CustomHeroBanner';
import { Variants, motion } from "framer-motion";
import React from 'react';

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


function ObjectifLine() {
  return (
    <>
        <Navbar />
        <CustomHeroBanner title="Tableau de Visualisation" img="/" />
        <div className="flex flex-col md:flex-row justify-center md:gap-40 gap-10 mx-10 my-20">
          <div className="md:w-1/3">
          <motion.div
            initial="hiddenRight"
            whileInView="visibleRight"
            viewport={{ once: true, margin: "-20%" }}
            variants={imagesVariants}
          >
            <h2 className="mb-2 font-SFBurlington text-4xl">TABLEAU DE VISUALISATION</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus aut quos minima velit, quibusdam quo nisi voluptatibus, soluta cum perspiciatis dolore culpa! Dolores animi id nisi fuga, rerum iusto consequuntur quaerat officiis? Vero magnam reiciendis vitae, rerum veritatis eligendi? Omnis ullam ea quasi commodi rerum tenetur eaque quaerat eligendi odit.
            </p>
          </motion.div>
          </div>
          <div className="md:w-1/3">
          <motion.div
            initial="hiddenLeft"
            whileInView="visibleLeft"
            viewport={{ once: true, margin: "-20%" }}
            variants={imagesVariants}
          >
            <img src="/art/Loup/Loup-01.jpeg" alt="" className="shadow-2xl"/>
          </motion.div>
          </div>
        </div>
        <div className="mb-20 text-center">
        <motion.div
          initial="hiddenBottom"
          whileInView="visibleBottom"
          viewport={{ once: true, margin: "-20%" }}
          variants={imagesVariants}
        >
          <a href="/tableau-de-visualisation-conception" className='w-full'>
            <button className="mt-4 md:w-2/5 w-2/3 h-14 bg-blueDark text-white px-4 rounded-xl border-b-4 border-blueSmoked hover:bg-blueSmoked">
              Créer mon tableau de visualisation !
            </button>
          </a>
        </motion.div>
        </div>
        <Footer />
    </>
  );
}

export default ObjectifLine