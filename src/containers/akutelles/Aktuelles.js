import React from "react";
import Termine from "./Termine";
import Oeffnungszeiten from "./Oeffnungszeiten";
import Button from 'react-bootstrap/Button';
import ImageImport from "../../components/structure/ImageImport";
import "./aktuelles.css";

const Aktuelles = () => {

    return (

        <div className="defaultsite aktuelles" id="aktuelles">
            <div className="place-titleimage">

            </div>

            <div className="titleimage-container background-aktuelles" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/Home_Titelbild.jpg'})`
            }}>
            </div>

            <div id="aktuelles-text" className="textbox-titleimage">
                <h1>Aktuelles</h1>

                <p className="info-textbox">
                    Unsere Vinothek am Rhein ist ab sofort wieder täglich geöffnet. Weitere Informationen finden Sie unter "Öffnungszeiten".
                      <br />
                      <br />

                 Wir freuen uns auf Ihren Besuch!


                {/* <div className="hoffest">
                    <h4>Hoffest@home</h4>
                    <p>
                        Unser Hoffest an Pfingsten verlegen wir in diesem Jahr zu Ihnen nach Hause.
                        Für das entsprechende "Hoffestfeeling" haben wir zwei Hoffest@home-Weinpakete für Sie. 
                        Die Pakete können Sie persönlich im Weingut abholen oder zum Versenden in unserem Shop bestellen.
                    </p>
                    <Button href="https://loreley-kellerei.winitas-shop.de/warengruppe.html?kategorie=8" target="_blank" rel="noopener noreferrer" className="hoffest-button">Hier zum Shop</Button>

                    <div className="hoffest-image-container">
                        <a href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=PFINGST3" target="_blank" rel="noopener noreferrer">
                            <ImageImport
                                img={process.env.PUBLIC_URL + "/img/Hoffest_01.jpeg"}
                                alt="Hoffest 01"
                                className="hoffest-image"
                            />
                        </a>
                        
              
                        <a href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=PFINGST6" target="_blank" rel="noopener noreferrer">
                            <ImageImport
                                img={process.env.PUBLIC_URL + "/img/Hoffest_02.jpeg"}
                                alt="Hoffest 02"
                                className="hoffest-image"
                            />
                        </a>

                    </div>

                </div> */}


                </p>

            </div>



            <Termine />

            <Oeffnungszeiten />

        </div>
    );
}

export default Aktuelles;