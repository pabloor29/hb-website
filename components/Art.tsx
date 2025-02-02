"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ArtworkModal from "@/components/ArtPopUp";

interface ArtworkProps {
  title: string;
  artist: string;
  imageUrl: string;
  description: string;
  additionalImages?: string[];
  onOpen: () => void;
}

const ArtworkCard: React.FC<ArtworkProps> = ({ title, artist, imageUrl, description, additionalImages = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(imageUrl); // État pour l'image affichée

  // Fonction pour gérer le survol de l'image
  const handleMouseEnter = () => {
    if (additionalImages.length > 0) {
      setCurrentImage(additionalImages[0]); // Afficher la première image supplémentaire au survol
    }
  };

  // Fonction pour restaurer l'image principale
  const handleMouseLeave = () => {
    setCurrentImage(imageUrl); // Restaure l'image principale
  };

  return (
    <>
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className="max-w-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white flex flex-col justify-between"
      >
        <motion.img 
          src={currentImage} 
          alt={title} 
          className="w-full h-64 object-cover" 
          onMouseEnter={handleMouseEnter} // Survol de l'image
          onMouseLeave={handleMouseLeave} // Quitter l'image
          transition={{ duration: 0.5, ease: "easeInOut" }} // Transition fluide
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600">{artist}</p>
          <p className="mt-2 text-sm text-gray-500">{description.substring(0, 100)}...</p>
          <button 
            onClick={() => setIsOpen(true)} 
            className="mt-4 w-full bg-blueDark text-white py-2 px-4 rounded-xl hover:bg-blueSmoked"
          >
            Voir plus
          </button>
        </div>
      </motion.div>

      <ArtworkModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        title={title} 
        artist={artist}
        description={description} 
        images={[imageUrl, ...additionalImages]} 
      />
    </>
  );
};

export default ArtworkCard;
