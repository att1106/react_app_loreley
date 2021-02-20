import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  // faFacebookSquare,
  // faFacebookF,
  faFacebook,
  // faInstagramSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import "./footer.css"


const year = new Date().getFullYear();
const weingutAddress = "https://www.google.de/maps/place/Loreley-Kellerei+Leonhard+Weingut/@50.157667,7.7141598,17z/data=!4m5!3m4!1s0x47be75ec6c57e33d:0xe1913f9139b37283!8m2!3d50.157667!4d7.7163538";
const vinothekAddress = "https://www.google.de/maps/place/Vinothek+Loreley+an+der+F%C3%A4hre+St.+Goarshausen/@50.1537162,7.7159134,17z/data=!3m1!4b1!4m5!3m4!1s0x47be7584c2e2061d:0x6ff4234863f23de6!8m2!3d50.1537162!4d7.7181074";

const Footer = () => {
  return (
    <footer>
      <div>
        {/* social websites */}
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Loreley-Kellerei-244489822309556"><em className="socialicon fa-lg"><FontAwesomeIcon icon={faFacebook} /></em></a>
          <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/loreleykellerei?igshid=p3k6kyseb2vt"><em className="socialicon fa-lg"><FontAwesomeIcon icon={faInstagram} /></em></a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:Loreley-kellerei@t-online.de"><em className="socialicon fa-lg"><FontAwesomeIcon icon={faEnvelope} /></em></a>
        </p>
        <hr className="footer-hr" />

        {/* adresses */}
        <div className="footer-address">
          <p>Wir freuen uns auf Ihren Besuch </p>
          <a target="_blank" rel="noopener noreferrer" href={weingutAddress}>
            in unserem Weingut<em className="mapsicon fa-lg"><FontAwesomeIcon icon={faMapMarkerAlt} /></em>
          </a>
          <br />
          <a target="_blank" rel="noopener noreferrer" href={vinothekAddress}>
            in unserer Vinothek<em className="mapsicon fa-lg"><FontAwesomeIcon icon={faMapMarkerAlt} /></em>
          </a>
        </div>
        <hr className="footer-hr" />

        {/* impressum etc. */}

        <div>
          <ul className="footer-list">
            <li>
              <Link to="/impressum" className="footer-list-element">
                <strong>Impressum</strong>
              </Link>
            </li>
            <li>
              <Link to="/datenschutz" className="footer-list-element">
                <strong>Datenschutz</strong>
              </Link>
            </li>
            <li>
              <Link to="/agbs" className="footer-list-element">
                <strong>AGB</strong>
              </Link>
            </li>
            <li>
              <Link to="/agrarumwelt-und-klimamassnahmen" className="footer-list-element">
                <strong>Agrarumwelt- und Klimamaßnahmen</strong>
              </Link>
            </li>
          </ul>
        </div>

        <hr className="footer-hr" />
        
        <div>
          <ul className="footer-contact-list">
            <li className="footer-contact-list-element">Loreley-Kellerei Leonhard</li>
            <li className="footer-contact-list-element">Nastätter Str. 9, 56346 Sankt Goarshausen</li>
            <li className="footer-contact-list-element">Tel. 06771 2659</li>
            <li className="footer-contact-list-element">E-mail: Loreley-kellerei@t-online.de</li>
          </ul>
        </div>
        <p>Copyright ⓒ {year}</p>
      </div>
    </footer>
  );
}

export default Footer;
