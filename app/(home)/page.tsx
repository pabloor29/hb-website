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
            <img className="shadow-2xl -scale-x-100" src="/artist/activity_001.webp" alt="" /> 
          </motion.div>
          </div>
          <div className="w-6/7 md:w-1/3">
          <motion.div
            initial="hiddenLeft"
            whileInView="visibleLeft"
            viewport={{ once: true, margin: "-20%" }}
            variants={imagesVariants}
          >
            <h2 className="font-Calibri font-semibold text-4xl mb-8">Hélène B.B</h2>
            <p className="font-Calibri text-justify">
              Je suis Hélène Brodin, artiste peintre diplômée des Beaux-Arts, profondément connectée à la nature et aux animaux. Depuis l’enfance, ma sensibilité – ou plutôt mon hyper-conscience – m’a rendue attentive au vivant sous toutes ses formes. Végétarienne, je respecte profondément chaque être.
              <br />
              <br />
              J’ai enseigné les arts plastiques en primaire et au collège, découvrant ainsi le pouvoir thérapeutique de l’art, tant pour les enfants que pour les adultes. Après une période difficile, c’est dans la nature que j’ai trouvé ma véritable renaissance. Aujourd’hui, je vis entourée d’animaux, au cœur de la campagne, en totale harmonie avec ce qui m’inspire et me nourrit chaque jour.
            </p>           
          </motion.div>
          </div>
        </div>
        <div className="md:w-4/5 w-full flex justify-center py-4 bg-blueSmoked/40">
          <p className="w-4/5 text-center text-black font-Calibri italic text-xl">
            "À travers mes tableaux, j’invite chacun à observer la nature autrement, à percevoir l’unité entre les êtres vivants et leur environnement, et à ressentir cette connexion profonde qui nous lie à eux."
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-40 gap-10 mx-10 my-14">
          <div className="w-6/7 md:w-1/3">
          <motion.div
            initial="hiddenRight"
            whileInView="visibleRight"
            viewport={{ once: true, margin: "-20%" }}
            variants={imagesVariants}
          >
            <h2 className="font-Calibri font-semibold text-4xl mb-8">Ma passion</h2>
            <p className="font-Calibri text-justify">
              Je suis Hélène Brodin, artiste peintre passionnée par la nature et les animaux. Mon travail repose sur une approche unique : chaque animal que je peins est en totale harmonie avec son environnement. J’utilise les couleurs de la nature qui l’entoure pour le représenter, créant ainsi une connexion profonde entre lui et son habitat.
              <br />
              <br />
              Au-delà de la peinture, je pratique la communication animale par télépathie. Cette capacité me permet d’entrer en lien avec les animaux, de ressentir leur énergie et de retranscrire leur essence sur mes toiles. Chaque œuvre devient alors bien plus qu’une simple représentation : c’est une rencontre, un témoignage de leur présence et de leur vécu.
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
            <img className="shadow-2xl" src="/artist/activity_001.webp" alt="" />
          </motion.div>
          </div>
        </div>
      </div>
      <Footer />
      <Analytics />
    </main>
  );
}
