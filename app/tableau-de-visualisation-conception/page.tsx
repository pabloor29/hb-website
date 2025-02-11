import CustomHeroBanner from '@/components/CustomHeroBanner';
import Footer from '@/components/Footer';
import ImageGrid from '@/components/ImageUploader';
import Navbar from '@/components/Navbar';
import React from 'react'

function ObjectifLineConception() {
  return (
    <>
    <Navbar />
    <ImageGrid />
    <div className="flex justify-center items-center text-2xl mb-20">
      <p>
        Prenez une capture d'écran pour sauvegrader !
      </p>
    </div>
    <Footer />
    </>
  );
}

export default ObjectifLineConception