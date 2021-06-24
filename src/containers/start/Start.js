import React from "react";
import ImageImport from "../../components/structure/ImageImport";
import Button from 'react-bootstrap/Button';
import { HashLink as Link } from 'react-router-hash-link';

import "./start.css";



const Start = () => {
    const image = <ImageImport
        img={process.env.PUBLIC_URL + "/img/Startseite_Titelbild.jpeg"}
        alt="Startseite"
        className="titleimage"
    />
    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    return (
        <div className="defaultsite">
            <div className="place-titleimage">

            </div>

            <div className="titleimage-container background-start" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/Startseite_Titelbild.jpeg'})`
            }}>

            </div>

            <div className="startseite-box">
                <h3>Aktuelle Informationen</h3>
                <br/>
                <br/>


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

                <p>
                    Unsere aktuellen Öffnungszeiten:
                    <br/>
                    <br/>
                    <p>
                        Weingut:<br/>
                        Montag - Samstag: 9 - 12Uhr
                        <br/>
                        Nastätter Straße 9, 56346 St. Goarshausen
                    </p>

                    <p>
                        Vinothek: <br/>
                        Montag - Sonntag: 13 - 17.30Uhr
                        <br/>
                        Bahnhofstraße 4, 56346 Sankt Goarshausen
                    </p>
                </p>


                <p>
                    Unser Online-Shop hat rund um die Uhr für Sie geöffnet!
                </p>
                <Link to="/home#aktuelles">
                    <Button>Hier finden Sie alle aktuellen Infos</Button>
                </Link>
            </div>

        </div>
    );
}

export default Start;