import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import CustomHeroBanner from '@/components/CustomHeroBanner';
import React from 'react'

function ObjectifLine() {
  return (
    <>
        <Navbar />
        <CustomHeroBanner title="Objectif Line" img="/" />
        <div className="flex flex-col md:flex-row justify-center md:gap-40 gap-10 mx-10 my-20">
          <div className="md:w-1/3">
            <h2 className="mb-2 font-SFBurlington text-4xl">OBJECTIF LINE</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus aut quos minima velit, quibusdam quo nisi voluptatibus, soluta cum perspiciatis dolore culpa! Dolores animi id nisi fuga, rerum iusto consequuntur quaerat officiis? Vero magnam reiciendis vitae, rerum veritatis eligendi? Omnis ullam ea quasi commodi rerum tenetur eaque quaerat eligendi odit.
            </p>
          </div>
          <div className="md:w-1/3">
            <img src="/art/Loup-01.jpeg" alt="" className="shadow-2xl"/>
          </div>
        </div>
        <div className="mb-20 text-center">
          <a href="/objectif-line-conception" className='w-full'>
            <button className="mt-4 md:w-2/5 w-2/3 h-14 bg-blueDark text-white px-4 rounded-xl border-b-4 border-blueSmoked hover:bg-blueSmoked">
              Créer ma propre objectif line !
            </button>
          </a>
        </div>
        <Footer />
    </>
  );
}

export default ObjectifLine