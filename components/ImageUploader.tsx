"use client";

import React, { useState, useEffect } from "react";

const ImageGrid = () => {
  const [images, setImages] = useState(Array(8).fill(null)); // Stockage des images
  const [isMobile, setIsMobile] = useState(false); // État pour déterminer si l'écran est mobile

  // Positions pour écran de bureau
  const desktopPositions = [
    { x: 100, y: 100 },
    { x: 350, y: 80 },
    { x: 500, y: 200 },
    { x: 325, y: 300 },
    { x: 125, y: 250 },
    { x: 110, y: 400 },
    { x: 300, y: 500 },
    { x: 500, y: 450 },
  ];

  // Positions pour écran mobile
  const mobilePositions = [
    { x: 50, y: 50 },
    { x: 180, y: 50 },
    { x: 320, y: 75 },
    { x: 220, y: 160 },
    { x: 65, y: 150 },
    { x: 55, y: 260 },
    { x: 175, y: 305 },
    { x: 305, y: 290 },
  ];

  // Fonction pour gérer le changement de taille de l'écran
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Mettre à jour les positions selon la taille de l'écran au chargement et au redimensionnement
  useEffect(() => {
    handleResize(); // Vérifier la taille de l'écran lors du premier rendu
    window.addEventListener("resize", handleResize); // Écouter les changements de taille

    // Nettoyer l'écouteur lors du démontage du composant
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageUpload = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      const newImages = [...images];
      newImages[index] = url;
      setImages(newImages);
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
  };

  const positions = isMobile ? mobilePositions : desktopPositions; // Choisir le bon tableau de positions

  return (
    <div className="flex justify-center items-center pt-40 mb-10">
      <div className="relative w-[375px] h-[375px] md:w-[600px] md:h-[600px] bg-[url('/art/Poisson/Poisson-02.jpeg')] bg-cover rounded-xl">
        <div className="bg-white h-full w-full bg-opacity-30">
          {/* SVG pour dessiner le chemin */}
          <svg width="100%" height="100%" className="absolute top-0 left-0">
            <path
              d={`M ${positions.map((p, i) => `${p.x},${p.y}`).join(" T ")}`}
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* Emplacements des images */}
          {positions.map((pos, index) => (
            <div
              key={index}
              className="absolute w-[80px] h-[65px] md:w-[120px] md:h-[100px]"
              style={{
                left: isMobile ? `${pos.x - 40}px` : `${pos.x - 60}px`, // Ajuster la valeur de left en fonction du type d'écran
                top: isMobile ? `${pos.y - 32.5}px` :  `${pos.y - 50}px`, // La valeur top reste inchangée
              }}
            >
              {images[index] ? (
                <>
                  <img
                    src={images[index]}
                    alt={`Upload ${index}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    className="absolute top-0 right-0 bg-blueSmoked text-white rounded-full w-4 h-4 flex justify-center items-center"
                    onClick={() => handleRemoveImage(index)}
                  >
                    ×
                  </button>
                </>
              ) : (
                <label className="w-full h-full bg-gray-200 flex justify-center items-center text-gray-500 border rounded-lg cursor-pointer">
                  📷
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(event) => handleImageUpload(index, event)}
                  />
                </label>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
