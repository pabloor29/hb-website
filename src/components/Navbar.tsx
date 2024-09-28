"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const annimUnderline = "text-white capitalize inline-block text-xl relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed w-screen top-0 left-0 p-6 z-50 transition ease-in duration-300 backdrop-blur-md flex justify-between items-center">

            <div className="flex w-full items-center justify-between text-white z-50">
                <div className='w-1/4'>
                    <a href='/' className="text-2xl font-bold">WEBSITE</a>
                </div>
                <div className='w-1/2 hidden md:flex flex-row justify-between text-xl text-white'>
                    <a className={annimUnderline} href="/">Accueil</a>
                    <a className={annimUnderline} href="/tableau">Mes oeuvres</a>
                    <a className={annimUnderline} href="/personalisation">Sur mesure</a>
                    <a className={annimUnderline} href="/profil">Profil</a>
                    <a className={annimUnderline} href="/contact">Contact</a>
                </div>
                <div className="w-1/4 flex md:hidden justify-end">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!menuOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center transition-transform duration-300 ${menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white focus:outline-none">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <a className={`${annimUnderline} block mt-2`} href="/" onClick={() => setMenuOpen(false)}>Accueil</a>
                <a className={`${annimUnderline} block mt-2`} href="/menu" onClick={() => setMenuOpen(false)}>Menu</a>
                <a className={`${annimUnderline} block mt-2`} href="/reservation" onClick={() => setMenuOpen(false)}>Réservation</a>
                <a className={`${annimUnderline} block mt-2`} href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
