import { Instagram, Mail, Phone } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-blueSmoked flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row w-5/6 lg:justify-between justify-center items-center p-4 space-y-12 lg:space-y-0">
        <div className="lg:w-2/5 w-full text-blueDark flex flex-col items-center justify-center">
          <h4 className="font-Calibri text-3xl mb-3">Hélène B.B</h4>
          <p className="font-Calibri text-justify">
            Je suis Hélène Brodin, artiste peintre diplômée des Beaux-Arts, profondément connectée à la nature et aux animaux. Depuis l’enfance, ma sensibilité – ou plutôt mon hyper-conscience – m’a rendue attentive au vivant sous toutes ses formes. Végétarienne, je respecte profondément chaque être.
          </p>
        </div>
        <div className="lg:w-2/5 w-full text-blueDark flex flex-col items-center justify-center">
          <h4 className="font-Calibri text-3xl mb-3">Contact</h4>
          <ul className="flex flex-col items-center justify-center font-Calibri">
            <li className="flex gap-2 mb-3 hover:underline">
              <Mail />
              <a href="mailto:helenebrodin@yahoo.fr">
              helenebrodin@yahoo.fr
              </a>
            </li>
            <li className="flex gap-2 mb-3 hover:underline">
              <Phone />
              <a href="tel:+33616547457">
                +33 6 16 54 74 57
              </a>
            </li>
            <li className="flex gap-2 mb-3 hover:underline">
              <Instagram />
              <a href="https://www.instagram.com/brodin.helene/">@brodin.helene</a>
            </li>
            <li className="flex gap-2 mb-3 hover:underline"></li>
          </ul>
        </div>

        <div className="w-1/5 font-Babylonica text-5xl px-5 flex flex-col items-center text-blueDark">
            <h1 className="leading-none">Hélène</h1>
            <h1 className="leading-none">B.B</h1>
          </div>
      </div>

      <a
        href="https://www.cntl.digital/"
        className="text-blueDark hover:underline py-2 text-xs w-full bg-blueSmoked flex justify-center items-center border-t-2"
      >
        © Pablo ORTEGA - 2025
      </a>
    </footer>
  );
}

export default Footer;
