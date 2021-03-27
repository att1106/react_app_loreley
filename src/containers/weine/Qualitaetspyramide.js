import React, { useEffect, useRef } from "react";
import "./weine.css"

import ImageImport from "../../components/structure/ImageImport";



const Qualitaetspyramide = () => {

    return (

        <div className="defaultsite" id="qualitaetspyramide">
           <div className="place-titleimage">

           </div>

           
            {/* <div className="titleimage-container">
                <ImageImport
                    img={process.env.PUBLIC_URL + "/img/Weine_QP.png"}
                    alt="Weine_Qualitätspyramide"
                    className="weine_image"
                />
            </div> */}
            <div className="titleimage-container background-weine-qp" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/Weine_QP.png'})`
            }}>
            </div>

            {/* <h1>Qualitätspyramide</h1> */}

            {/* QP-schwarz */}
            <div className="weine-container defaultsite">
                <div className="weine-container_image_1">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_QP_schwarz.png"}
                        alt="Weine QP schwarz"
                        className="qp-image"
                    />
                </div>
                <div className="weine-container_text">
                    <h1>Frisch und Fruchtig</h1>
                    <p>
                        Der perfekte Einstieg in unsere Weinauswahl.
                        <br />
                        Für jeden Anlass geeignet.
                    </p>
                </div>
                <div className="weine-container_image_2">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_QP_schwarz_Rohling.jpg"}
                        alt="Weine QP schwarz Rohling"
                        className="qp-image-rohling"
                    />
                </div>

            </div>
            {/* QP-kupfer */}
            <div className="weine-container defaultsite">
                <div className="weine-container_image_1">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_QP_kupfer.png"}
                        alt="Weine QP kupfer"
                        className="qp-image"
                    />
                </div>
                <div className="weine-container_text">
                    <h1>Komplexe Aromen</h1>
                    <p>
                        Körperreiche Weine. Der perfekte Essensbegleiter.
                    </p>
                </div>
                <div className="weine-container_image_2">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_QP_kupfer_Rohling.jpg"}
                        alt="Weine QP kupfer Rohling"
                        className="qp-image-rohling"
                    />
                </div>
            </div>
            {/* QP-silber */}
            <div className="weine-container defaultsite">
                <div className="weine-container_image_1">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_QP_silber.png"}
                        alt="Weine QP silber"
                        className="qp-image"
                    />
                </div>
                <div className="weine-container_text">
                    <h1>Lagerfähige Weine</h1>
                    <p>
                        Elegant im Glas. Für die besonderen Momente.
                    </p>
                </div>
                <div className="weine-container_image_2">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_QP_silber_Rohling.jpg"}
                        alt="Weine QP silber Rohling"
                        className="qp-image-rohling"
                    />
                </div>
            </div>
            {/* QP-gold */}
            <div className="weine-container defaultsite">
                <div className="weine-container_image_1">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_QP_gold.png"}
                        alt="Weine QP gold"
                        className="qp-image"
                    />
                </div>
                <div className="weine-container_text">
                    <h1>Old but Gold - Über 50 Jahre alte Reben</h1>
                    <p>
                        Unser ältester Weinberg am Fuße des Loreleyfelsens.
                        <br />
                        Diesem Weinberg widmen wir eine eigene Linie.
                    </p>
                </div>
                <div className="weine-container_image_2">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_QP_gold_Rohling.jpg"}
                        alt="Weine QP gold Rohling"
                        className="qp-image-rohling"
                    />
                </div>
            </div>

            {/* <ImageImport
                img={process.env.PUBLIC_URL + "/img/Weine_Titelbild.png"}
                alt="Weine_Titelbild"
                className="titleimage"
            /> */}
        </div>
    );
}

export default Qualitaetspyramide;