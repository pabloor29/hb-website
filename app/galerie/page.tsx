"use client";

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ArtworkCard from '@/components/Art';
import CustomHeroBanner from '@/components/CustomHeroBanner';
import ArtworkModal from '@/components/ArtPopUp'; 
import React, { useState } from "react";

interface ArtworkProps {
  title: string;
  artist: string;
  imageUrl: string;
  description: string;
  additionalImages?: string[];
}

function Galerie() {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkProps | null>(null);

  const artworks: ArtworkProps[] = [
    {
      title: "Le loup",
      artist: "Lorem ipsum dolor sit amet.",
      imageUrl: "/art/Loup-01.jpeg",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis harum, tempore totam voluptas vero odit molestias architecto neque saepe nulla! Possimus nam temporibus, vel libero dolores quia ea fugiat ab alias quidem. Quis sapiente, accusamus neque obcaecati cum dolore commodi impedit officiis laboriosam temporibus. Saepe nam hic veritatis laudantium, expedita blanditiis incidunt quia exercitationem quisquam optio sequi non repellat adipisci itaque, porro nisi natus nemo labore minus? Nobis et ipsam praesentium eius unde vel earum itaque tenetur voluptatibus, aut at officia placeat cum necessitatibus maxime nesciunt ea odio labore eligendi! Odit consequuntur vitae facilis assumenda quos sunt repudiandae labore qui?",
      additionalImages: ["/art/Loup-02.jpeg"], 
    },
    {
      title: "Le poisson",
      artist: "Lorem ipsum dolor sit amet.",
      imageUrl: "/art/Poisson-01.jpeg",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, aut accusantium, earum alias odio, id autem amet a sint animi dolor accusamus quidem commodi ea unde ullam dignissimos placeat temporibus harum quas aperiam assumenda. Porro ipsa et harum, voluptatem officia, culpa libero laborum ex excepturi optio itaque animi nemo maxime.",
      additionalImages: ["/art/Poisson-02.jpeg", "/art/Poisson-03.jpeg"],
    },
  ];

  return (
    <>
      <Navbar />
      <CustomHeroBanner title="Galerie" img="/" />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 p-6">
          {artworks.map((art, index) => (
            <ArtworkCard key={index} {...art} onOpen={() => setSelectedArtwork(art)} />
          ))}
        </div>
      </div>
      <Footer />

      {selectedArtwork && (
        <ArtworkModal
          isOpen={!!selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          title={selectedArtwork.title}
          artist={selectedArtwork.artist}
          description={selectedArtwork.description}
          images={[selectedArtwork.imageUrl, ...(selectedArtwork.additionalImages || [])]}
        />
      )}
    </>
  );
}

export default Galerie;
