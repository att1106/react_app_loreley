import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  // faFacebookSquare,
  // faFacebookF,
  faFacebook,
  // faInstagramSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./footer.css"


const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Loreley-Kellerei-244489822309556"><em className="socialicon fa-lg"><FontAwesomeIcon icon={faFacebook} /></em></a>
          <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/loreleykellerei?igshid=p3k6kyseb2vt"><em className="socialicon fa-lg"><FontAwesomeIcon icon={faInstagram} /></em></a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:Loreley-kellerei@t-online.de"><em className="socialicon fa-lg"><FontAwesomeIcon icon={faEnvelope} /></em></a>
        </p>
        <strong className="footerelements"> Impressum</strong>
        <strong className="footerelements"> Datenschutz</strong>
        <strong className="footerelements"> AGB</strong>
        <strong className="footerelements"> Agrarumwelt- und Klimamaßnahmen</strong>
        <p>
          Loreley-Kellerei Leonhard; Nastätter Str. 9, 56346 Sankt Goarshausen; Tel. 06771 2659; E-mail: Loreley-kellerei@t-online.de
      </p>
        <p>Copyright ⓒ {year}</p>
      </div>
    </footer>
  );
}

export default Footer;
