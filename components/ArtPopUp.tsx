import * as RadixDialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

interface ArtworkModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  artist: string;
  description: string;
  images: string[];
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({ isOpen, onClose, title, artist, description, images }) => {
  // L'état pour gérer l'image principale sélectionnée
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Fonction pour changer l'image principale lorsque l'utilisateur clique sur une miniature
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  // Fonction pour changer l'image principale en naviguant à gauche
  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Fonction pour changer l'image principale en naviguant à droite
  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <RadixDialog.Root open={isOpen} onOpenChange={onClose}>
      <RadixDialog.Overlay className="fixed inset-0 bg-black/70" />
      <RadixDialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg w-3/4 max-h-[80vh] overflow-y-auto z-50">
        
        {/* Titre de l'œuvre */}
        <RadixDialog.Title className="text-3xl font-bold text-center">{title}</RadixDialog.Title>
        <RadixDialog.Title className="text-xl text-center mb-6">{artist}</RadixDialog.Title>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          {/* Flèche gauche */}
          <button
            onClick={goToPreviousImage}
            className="flex justify-center items-center text-3xl text-gray-500 hover:text-black md:w-1/3"
          >
            ←
          </button>

          {/* Image principale */}
          <div className="flex justify-center items-center md:w-2/3 overflow-hidden">
            <Image
              src={images[selectedImageIndex]}
              alt={title}
              width={500}
              height={500}
              className="h-auto max-w-full"
              style={{ objectFit: "contain" }} // Empêche l'image de déborder
            />
          </div>

          {/* Flèche droite */}
          <button
            onClick={goToNextImage}
            className="flex justify-center items-center text-3xl text-gray-500 hover:text-black md:w-1/3"
          >
            →
          </button>
        </div>

        {/* Miniatures d'images sous l'image principale */}
        <div className="flex justify-center mt-4 space-x-4 overflow-x-auto">
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={image}
                alt={title}
                width={100}
                height={100}
                className="rounded-lg cursor-pointer hover:opacity-80"
                onClick={() => handleImageClick(index)} // Changer l'image principale au clic
              />
            </div>
          ))}
        </div>

        {/* Description sous les images */}
        <div className="mt-6 text-gray-600">{description}</div>

        {/* Bouton pour fermer le modal */}
        <RadixDialog.Close asChild>
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
            ✕
          </button>
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Root>
  );
};

export default ArtworkModal;
