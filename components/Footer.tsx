import { Instagram, Mail, Phone } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-blueSmoked flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row w-5/6 lg:justify-between justify-center items-center p-4 space-y-12 lg:space-y-0">
        <div className="lg:w-1/3 w-full text-blueDark flex flex-col items-center justify-center">
          <h4 className="font-Montserrat text-3xl mb-3">Hélène B.B</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem deserunt nam et, odit necessitatibus iusto officia ex amet consequuntur autem maxime fugit eveniet totam soluta! Nemo et officiis, ut impedit deleniti nobis id sequi ad omnis eum minima, odit minus!</p>
        </div>

        <div className="lg:w-1/3 w-full text-blueDark flex flex-col items-center justify-center">
          <h4 className="font-Montserrat text-3xl mb-3">Adresse</h4>
          <a
            className="flex flex-col items-center justify-center text-center hover:underline"
            href="/"
          >
            --
            <br />
            --
          </a>
        </div>

        <div className="lg:w-1/3 w-full text-blueDark flex flex-col items-center justify-center">
          <h4 className="font-Montserrat text-3xl mb-3">Contact</h4>
          <ul className="flex flex-col items-center justify-center">
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

        <div className="font-SFBurlington text-5xl px-5 flex flex-col text-blueDark">
            <h1 className="leading-none mr-8">hélène</h1>
            <h1 className="leading-none ml-8">b.b</h1>
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
