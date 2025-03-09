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
            <h2 className="mb-8 font-Calibri text-4xl">Tableau de visualisation</h2>
            <p className="font-Calibri text-justify">
              Les tableaux de visualisation sont de puissants outils de manifestation et de connexion avec ses aspirations profondes. Ils consistent à rassembler des images, des mots, des couleurs et des symboles qui incarnent nos rêves, nos intentions et nos émotions.
              <br />
              En les plaçant sous nos yeux au quotidien, ils agissent comme des ancrages visuels qui stimulent notre inconscient et renforcent notre focalisation sur ce que nous souhaitons attirer dans notre vie.
              <br />
              <br />
              Pour moi, chaque tableau de visualisation est une œuvre vivante, une porte ouverte vers un univers de possibilités. Il ne s’agit pas seulement d’un collage esthétique, mais d’un espace où l’énergie de nos désirs prend forme et se charge de notre intention.
              <br />
              <br />
              C’est un processus intuitif et artistique, où l’on matérialise en images ce que l’on ressent au plus profond de soi, créant ainsi une connexion entre notre monde intérieur et la réalité que nous façonnons.
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
            <img src="/tableau-visu/tableau_visu_001.webp" alt="" className="shadow-2xl"/>
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
            <button className="mt-4 md:w-2/5 w-2/3 h-14 bg-blueDark/80 text-white px-4 rounded-xl border-b-4 border-blueDark hover:bg-blueDark font-Calibri text-xl">
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