"use client";

import CustomHeroBanner from '@/components/CustomHeroBanner';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { Variants, motion } from "framer-motion";


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


function ComAnimale() {
    return (
        <>
        <Navbar />
        <CustomHeroBanner title="Communication Animale" img="/"  />
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-40 gap-10 mx-10 my-14">
            <div className="w-6/7 md:w-1/3">
            <motion.div
              initial="hiddenRight"
              whileInView="visibleRight"
              viewport={{ once: true, margin: "-20%" }}
              variants={imagesVariants}
            >
              <h2 className="font-Calibri text-4xl mb-8">La communication animale ?</h2>
              <p className="font-Calibri text-justify">
                La communication animale est une forme de connexion intuitive qui permet d’échanger avec les animaux au-delà des mots et des gestes. Elle repose sur la télépathie, une capacité que chacun possède mais que peu développent pleinement. En entrant dans un état de réceptivité profonde, on peut percevoir des images, des émotions, des sensations physiques ou même des pensées provenant de l’animal. 
                <br />
                <br />
                Cette communication subtile permet de mieux comprendre leurs besoins, leurs ressentis et leur personnalité. Elle crée un lien unique entre l’humain et l’animal, favorisant l’harmonie et le respect mutuel. Bien plus qu’un simple échange, c’est une véritable immersion dans leur monde intérieur, une invitation à voir la nature avec plus de sensibilité et d’ouverture.
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
              <img className="shadow-2xl" src="/com-animale/com_animale_001.webp" alt="" />
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
              <img className="shadow-2xl" src="/com-animale/com_animale_002.webp" alt="" />
            </motion.div>
            </div>
            <div className="w-6/7 md:w-1/3">
            <motion.div
              initial="hiddenLeft"
              whileInView="visibleLeft"
              viewport={{ once: true, margin: "-20%" }}
              variants={imagesVariants}
            >
              <h2 className="font-Calibri text-4xl mb-8">Ma méthode</h2>
                <ul className="font-Calibri text-justify">
                  <li>
                    1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, placeat?
                  </li>
                  <br />
                  <li>
                    2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, veniam dolore minus mollitia sapiente aspernatur.
                  </li>
                  <br />
                  <li>
                    3. Lorem ipsum dolor sit amet.
                  </li>
                </ul>
            </motion.div>
            </div>
          </div>
          <div className="mb-20 text-center md:w-1/3 w-full">
          <motion.div
            initial="hiddenBottom"
            whileInView="visibleBottom"
            viewport={{ once: true, margin: "-20%" }}
            variants={imagesVariants}
          >
            <a href="/me-contacter?tab=Communication%20Animale#formulaire" className='w-full'>
              <button className="mt-4 w-2/3 h-14 bg-blueDark/80 text-white px-4 rounded-xl border-b-4 border-blueDark hover:bg-blueDark font-Calibri text-xl">
                Demander un rendez-vous
              </button>
            </a>
          </motion.div>
          </div>
        </div>
        <Footer />
        </>
      );
}

export default ComAnimale