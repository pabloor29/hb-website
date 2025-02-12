"use client";

import CustomHeroBanner from '@/components/CustomHeroBanner';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




function MeContacter() {
    const [succeeded, setSucceeded] = useState(false);

    const [formDataComAnimale, setFormDataComAnimale] = useState({
        email: "",
        animal: "",
        nom: "",
        age: "",
        eventDate: new Date(),
        message: "",
      });

      const [formDataTabVisu, setFormDataTabVisu] = useState({
        email: "",
        fichier: null,
        nom: "",
        citation: "",
        message: "",
      });

      const [formDataMessage, setFormDataMessage] = useState({
        email: "",
        message: "",
      });

      const handleFileChange = (e: any) => {
        setFormDataTabVisu({
            ...formDataTabVisu,
            fichier: e.target.files[0], // Stocke le fichier sélectionné
        });
    };
    
    
    const handleChangeComAnimale = (e: any) => {
        const { name, value } = e.target;
        setFormDataComAnimale({
          ...formDataComAnimale,
          [name]: value,
        });
      };

      const handleChangeTabVisu = (e: any) => {
        const { name, value } = e.target;
        setFormDataTabVisu({
          ...formDataTabVisu,
          [name]: value,
        });
      };

      const handleChangeMessage = (e: any) => {
        const { name, value } = e.target;
        setFormDataMessage({
          ...formDataTabVisu,
          [name]: value,
        });
      };

    
    const isWeekday = (date: any) => {
        const day = date.getDay();
        const month = date.getMonth();
        const dayOfMonth = date.getDate();
        const year = date.getFullYear();
    
        const isAug31 = month === 7 && dayOfMonth === 31;
        const isNov16ToDec2 =
          year === 2024 &&
          ((month === 10 && dayOfMonth >= 16) ||
            month === 11 ||
            (month === 11 && dayOfMonth <= 2));
        const isJan1ToMar3 =
            year === 2025 &&
            ((month === 0 && dayOfMonth >= 1) ||
             month === 1 ||             
             (month === 2 && dayOfMonth <= 3));
        const isSeptToJuneMonday = day === 1 && (month >= 8 || month <= 5);
    
        return day !== 0 && !isAug31 && !isNov16ToDec2 && !isSeptToJuneMonday && !isJan1ToMar3;
      };
    
      const isOpen = (time: any) => {
        const hour = time.getHours();
        const minute = time.getMinutes();
        return (
          hour === 12 ||
          hour === 13 ||
          (hour === 14 && minute === 0) ||
          hour === 18 ||
          hour === 19 ||
          hour === 20 ||
          hour === 21 ||
          (hour === 22 && minute === 0)
        );
      };
    
      const handleSubmitComAnimale = (e: any) => {
        e.preventDefault();
    
        const {
          email,
          animal,
          nom,
          age,
          eventDate,
          message,
        } = formDataComAnimale;
    
        const mailTo = "pab.ortg@gmail.com";
        const subject = `Communication Animale - Le ${eventDate}`;
        const body = `Animal: ${animal}\nNom: ${nom}\nAge: ${age}\nDate: ${eventDate}\n\n${message}`;
    
        window.location.href = `mailto:${mailTo}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
    
        setSucceeded(true);
      };

      const handleSubmitTabVisu = async (e: any) => {
        e.preventDefault();
    
        const {
            email,
            fichier,
            nom,
            citation,
            message,
        } = formDataTabVisu;
    
        if (!fichier) {
            alert("Veuillez ajouter une image.");
            return;
        }
    
        // Convertir le fichier en base64
        const reader = new FileReader();
        reader.readAsDataURL(fichier);
        reader.onload = () => {
            const imageBase64 = reader.result as string;
    
            const mailTo = "pab.ortg@gmail.com";
            const subject = `Tableau de Visualisation - ${nom}`;
            const body = `Nom: ${nom}\nEmail: ${email}\n\nCitation: ${citation}\n\nMessage:\n${message}\n\nImage: ${imageBase64}`;
    
            window.location.href = `mailto:${mailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        };
        
        reader.onerror = (error) => {
            console.error("Erreur lors de la conversion de l'image :", error);
            alert("Erreur lors du traitement de l'image.");
        };
    
        setSucceeded(true);
    };
    

      const handleSubmitMessage = (e: any) => {
        e.preventDefault();
    
        const {
          email,
          message,
        } = formDataMessage;
    
        const mailTo = "pab.ortg@gmail.com";
        const subject = `Message`;
        const body = `${message}`;
    
        window.location.href = `mailto:${mailTo}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
    
        setSucceeded(true);
      };

    const [activeTab, setActiveTab] = useState("Message");

    const tabs = ["Communication Animale", "Tableau de Visualisation", "Message"];
    const tabContent: Record<string, JSX.Element> = {
        "Communication Animale": 
        <div className="w-full">
            <h1 className="font-SFBurlington text-3xl">Communication Animale</h1>
            <div className="relative flex flex-col lg:flex-row justify-center items-center lg:space-x-20 space-y-8 py-4">
                <form
                    onSubmit={handleSubmitComAnimale}
                    className="space-y-8 lg:w-1/3 w-full z-20"
                >
                    <div>
                    <label
                        htmlFor="animal"
                        className="block text-xl font-medium text-black font-ttInterphasesMono tracking-wide"
                    >
                        Animal
                    </label>
                    <input
                        type="text"
                        id="animal"
                        name="animal"
                        value={formDataComAnimale.animal}
                        onChange={handleChangeComAnimale}
                        className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                        required
                    />
                    </div>

                    <div>
                    <label
                        htmlFor="nom"
                        className="block text-xl font-medium text-black font-ttInterphasesMono tracking-wide"
                    >
                        Nom
                    </label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formDataComAnimale.nom}
                        onChange={handleChangeComAnimale}
                        className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                        required
                    />
                    </div>

                    <div>
                    <label
                        htmlFor="email"
                        className="block font-medium text-black font-ttInterphasesMono text-xl tracking-wide"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formDataComAnimale.email}
                        onChange={handleChangeComAnimale}
                        className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                        required
                    />
                    </div>

                    <div className="w-full">
                        <label
                        htmlFor="age"
                        className="block font-medium text-black font-ttInterphasesMono text-xl tracking-wide"
                        >
                        Age
                        </label>
                        <input
                        type="number"
                        id="age"
                        name="age"
                        value={formDataComAnimale.age}
                        onChange={handleChangeComAnimale}
                        min={1}
                        className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                        required
                        />
                    </div>

                    <div className="w-full">
                        <label
                        htmlFor="eventDate"
                        className="w-full block font-medium text-black font-ttInterphasesMono text-xl tracking-wide"
                        >
                        Date de Rendez-vous
                        </label>

                        <DatePicker
                        showTimeSelect
                        selected={formDataComAnimale.eventDate}
                        onChange={(date: any) =>
                            handleChangeComAnimale({
                            target: { name: "eventDate", value: date },
                            })
                        }
                        minDate={new Date()}
                        filterDate={isWeekday}
                        filterTime={isOpen}
                        className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                        locale="fr"
                        />
                    </div>

                    <div>
                    <label
                        htmlFor="message"
                        className="block font-medium text-black font-ttInterphasesMono text-xl tracking-wide"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formDataComAnimale.message}
                        onChange={handleChangeComAnimale}
                        className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                    />
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-blueDark rounded-xl py-3 text-lg font-semibold text-white border-b-4 border-blueSmoked hover:bg-blueSmoked duration-300 cursor-pointer"
                    >
                    Demande de Communication animale
                    </button>
                </form>
            </div>
        </div>,
        "Tableau de Visualisation":
        <div className="w-full">
            <h1 className="font-SFBurlington text-3xl">Tableau de Visualisation</h1>
            <div className="relative flex flex-col lg:flex-row justify-center items-center lg:space-x-20 space-y-8 py-4">
                <form
                    onSubmit={handleSubmitTabVisu}
                    className="space-y-8 lg:w-1/3 w-full z-20"
                >
                    <div>
                    <label
                        htmlFor="nom"
                        className="block text-xl font-medium text-black font-ttInterphasesMono tracking-wide"
                    >
                        Nom
                    </label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formDataTabVisu.nom}
                        onChange={handleChangeTabVisu}
                        className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                        required
                    />
                    </div>

                    <div>
                    <label
                        htmlFor="email"
                        className="block font-medium text-black font-ttInterphasesMono text-xl tracking-wide"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formDataTabVisu.email}
                        onChange={handleChangeTabVisu}
                        className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                        required
                    />
                    </div>

                    <div>
                        <label
                            htmlFor="fichier"
                            className="block font-medium text-black font-ttInterphasesMono text-xl tracking-wide"
                        >
                            Mon tableau de visualisation
                        </label>
                        <input
                            type="file"
                            id="fichier"
                            name="fichier"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                            required
                        />
                    </div>

                    <div>
                    <label
                        htmlFor="citation"
                        className="block text-xl font-medium text-black font-ttInterphasesMono tracking-wide"
                    >
                        Citation
                    </label>
                    <textarea
                        id="citation"
                        name="citation"
                        rows={2}
                        value={formDataTabVisu.citation}
                        onChange={handleChangeTabVisu}
                        className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                    />
                    </div>

                    <div>
                    <label
                        htmlFor="message"
                        className="block font-medium text-black font-ttInterphasesMono text-xl tracking-wide"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formDataTabVisu.message}
                        onChange={handleChangeTabVisu}
                        className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                    />
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-blueDark rounded-xl py-3 text-lg font-semibold text-white border-b-4 border-blueSmoked hover:bg-blueSmoked duration-300 cursor-pointer"
                    >
                    Commander mon tableau de visualisation
                    </button>
                </form>
            </div>
        </div>,
        "Message":
        <div className="">
            <h1 className="font-SFBurlington text-3xl">Message</h1>
            <div className="relative flex flex-col lg:flex-row justify-center items-center lg:space-x-20 space-y-8 py-4">
                <form
                    onSubmit={handleSubmitMessage}
                    className="space-y-8 lg:w-1/3 w-full z-20"
                >
                    <div>
                    <label
                        htmlFor="email"
                        className="block font-medium text-black font-ttInterphasesMono text-xl tracking-wide"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formDataMessage.email}
                        onChange={handleChangeMessage}
                        className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                        required
                    />
                    </div>

                    <div>
                    <label
                        htmlFor="message"
                        className="block font-medium text-black font-ttInterphasesMono text-xl tracking-wide"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formDataMessage.message}
                        onChange={handleChangeMessage}
                        className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                    />
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-blueDark rounded-xl py-3 text-lg font-semibold text-white border-b-4 border-blueSmoked hover:bg-blueSmoked duration-300 cursor-pointer"
                    >
                    Envoyer le message
                    </button>
                </form>
            </div>
        </div>
    };

    return (
        <>
        <Navbar />
        <CustomHeroBanner title="Me contacter" img="/"  />
        <div className="flex justify-center items-center my-20">
            <div className="w-3/4 bg-white shadow-2xl rounded-2xl p-5">
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 border-b pb-2">
                {tabs.map((tab) => (
                    <button
                    key={tab}
                    className={`px-4 py-2 w-full rounded-xl focus:outline-none transition-colors duration-200 ${
                        activeTab === tab ? "bg-blueSmoked text-white" : "bg-gray-200"
                    }`}
                    onClick={() => setActiveTab(tab)}
                    >
                    {tab}
                    </button>
                ))}
                </div>
                <div className="p-5 text-lg text-gray-700">
                {tabContent[activeTab]}
                </div>
            </div>
            </div>
        <Footer />
        </>
    );
}

export default MeContacter