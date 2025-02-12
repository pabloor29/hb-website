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
    <div className="flex flex-col justify-center items-center mb-20">
      <div className="">
        <p className="md:text-2xl text-xl text-center">
          Prenez une capture d'écran pour sauvegrader !
        </p>
      </div>
      <div className="mb-20 text-center md:w-1/2 w-full pt-8">
        <a href="/me-contacter?tab=Tableau%20de%20Visualisation#formulaire" className='w-full'>
          <button className="mt-4 w-2/3 h-14 bg-blueDark text-white px-4 rounded-xl border-b-4 border-blueSmoked hover:bg-blueSmoked">
            Demander des renseignements
          </button>
        </a>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ObjectifLineConception