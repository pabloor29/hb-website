import CustomHeroBanner from '@/components/CustomHeroBanner';
import Footer from '@/components/Footer';
import ImageGrid from '@/components/ImageUploader';
import Navbar from '@/components/Navbar';
import React from 'react'

function ObjectifLineConception() {
  return (
    <>
    <Navbar />
    <CustomHeroBanner title="Objectif Line Conception" img="/"  />
    <ImageGrid />
    <Footer />
    </>
  );
}

export default ObjectifLineConception