import React, { useState } from "react";

import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"


import "./weine.css"
import ImageImport from "../../components/structure/ImageImport";
import Button from 'react-bootstrap/Button';

const mittelrhein_riesling_trocken = <ImageImport
key = {0}
img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Riesling_trocken.jpg"}
alt="Mittelrhein_Riesling_trocken"
className="weinlinie-image"
/>

// const wein_images = [
//     mittelrhein_riesling_trocken, mittelrhein_riesling_halbtrocken
// ]

const images = [
    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Riesling_trocken.jpg", // Riesling trocken 0
    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Riesling_halbtrocken.jpg", // Riesling halbtrocken 1
    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Riesling_lieblich.jpg", // Riesling lieblich 2
    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Rose.jpg", // Rose halbtrocken 3
    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Rotling.jpg", // Rotling lieblich 4
    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Secco.jpg", // Rotling lieblich 5


    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreley_Rotschiefer_halbtrocken.jpg", //Rotschiefer Riesling halbtrocken 6
    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreley_Blauschiefer_trocken.jpg", // Blauschiefer Riesling trocken 7
    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreley_Spaetburgunder_trocken.jpg", //Spätburgunder trocken 8
    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreley_Weißburgunder_trocken.jpg", //Weißburgunder trocken 9
    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreley_Grauburgunder_trocken.jpg", //Grauburgunder trocken 10
    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreley_Muskateller.jpg", //Muskateller halbtrocken 11

    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreleyfelsen_Spaetburgunder_Holzfass.jpg", // Spätburgunder Holzfass trocken 12
    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreleyfelsen_Spaetburgunder_Barrique.jpg", //Spätburgunder Barique trocken 13
    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreleyfelsen_Alte_Reben_Riesling.jpg", //Alte Reben Riesling 14

    process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreleyfelsen_Alte_Reben_Riesling.jpg" //Riesling Spätlese trocken 15
]


const Weine = () => {

    const [photoIndex, setPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    return (

        <div className="defaultsite" id="weinlinie">
            <div className="place-titleimage">

            </div>

            <div className="titleimage-container background-weinlinie" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/Weine_Weinlinie_Titelbild.png'})`
            }}>
            </div>

            <div className="textbox-weinlinie">
                Da wir uns zur Zeit in der Umstellung unserer Weinlinie befinden, finden Sie hier nur unsere neuen Weine der 6. Generation.
                In unserem Onlineshop finden Sie jedoch alle aktuell verfügbaren Weine. Wir arbeiten weiter an der Umstrukturierung.
                Somit finden sich hier von Zeit zu Zeit weitere Weine ein.
            </div>

            {/* Mittelrhein */}
            <div className="weinlinie-header-container">
                <div className="weinlinie-header-image-container">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_QP_schwarz.png"}
                        alt="Weine QP schwarz"
                        className="weinlinie-header-image"
                    />
                </div>
                <div>
                    <h1>Mittelrhein</h1>
                </div>
            </div>

            {/* Mittelrhein Riesling QbA trocken */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(0)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Riesling_trocken.jpg"}
                        alt="Mittelrhein_Riesling_trocken"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Riesling QbA trocken</h1>
                    <p>
                        Im Glas präsentiert sich der Riesling mit einem ansprechend hellen Strohgelb.
                        In der Nase heben sich frische Aromen von Zitrusfrüchten und grünem Apfel hervor. Am Gaumen
                        zeigt er sich frisch spritzig mit typischem Charakter, schönen Fruchtaromen und
                        einer angenehmen Mineralität.
                    </p>

                    <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F2120" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>

            {/* Mittelrhein Riesling QbA halbtrocken */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(1)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Riesling_halbtrocken.jpg"}
                        alt="Mittelrhein_Riesling_halbtrocken"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Riesling QbA halbtrocken</h1>
                    <p>
                        Ein feines Spiel von Säure und Süße. Mineralisch und frisch mit Aromen von Pfirsich
                        und gelben Früchten. Durch das feine mineralische Fruchtspiel mit angenehmer Restsüße wird dem Wein Komplexität verliehen.
                    </p>

                    <Button href=" https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F720" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>

            {/* Mittelrhein Riesling Qba lieblich */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(2)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Riesling_lieblich.jpg"}
                        alt="Mittelrhein_Riesling_lieblich"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Riesling QbA lieblich</h1>
                    <p>
                        Coming soon...
                    </p>

                    {/* <Button href=" https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F720" className="weinlinie-button">Zum Shop</Button> */}
                </div>
            </div>

            {/* Rosé QbA halbtrocken */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(3)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Rose.jpg"}
                        alt="Mittelrhein_Rose"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Rosé QbA halbtrocken</h1>
                    <p>
                        Der perfekte Sommerwein - frisch, fruchtig und leicht - mit
                        feinem Säurespiel. Aromen von Erdbeeren breiten sich
                        am Gaumen und in der Nase aus.
                        Die angenehme Restsüße sorgt für Trinkfreude.
                    </p>

                    <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F11%2F20" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>

            {/* Rotling QbA lieblich */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(4)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Rotling.jpg"}
                        alt="Mittelrhein_Rotling"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Rotling QbA lieblich</h1>
                    <p>
                        Rotling bezeichnet man einen Wein, bei dem weiße und rote Trauben zusammen gepresst
                        werden. Farblich erscheint dieser Wein in strahlend hellem Rot.
                        Durch seine Restsüße und seine fruchtigen Aromen eignet er sich gut gekühlt für warme Sommertage.
                    </p>

                    <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F2320" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>

            {/* Secco */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(5)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Secco.jpg"}
                        alt="Mittelrhein_Secco"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Secco</h1>
                    <p>
                    Der fruchtig-frische Aperitif. Fruchtiges Aroma mit einer feinen Restsüße und ausbalanciertem Säurespiel. 
                    Gut gekühlt eignet er sich auch perfekt für entspannte Sommertage.
                    </p>

                    <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=FP121" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>


            {/* Loreley */}
            <div className="weinlinie-header-container">
                <div className="weinlinie-header-image-container">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_QP_kupfer.png"}
                        alt="Weine QP kupfer"
                        className="qp-image"
                    />
                </div>
                <div>
                    <h1>Loreley</h1>
                </div>
            </div>

            {/* Rotschiefer Riesling Kabinett halbtrocken */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(6)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreley_Rotschiefer_halbtrocken.jpg"}
                        alt="Loreley_Rotschiefer_Riesling_Kabinett_halbtrocken "
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Rotschiefer Riesling Kabinett halbtrocken</h1>
                    <p>
                        Coming soon...
                    </p>

                    {/* <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F2320" className="weinlinie-button">Zum Shop</Button> */}
                </div>
            </div>

            {/* Blauschiefer Riesling Kabinett trocken */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(7)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreley_Blauschiefer_trocken.jpg"}
                        alt="Loreley_Blauschiefer_Riesling_Kabinett_trocken"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Blauschiefer Riesling Kabinett trocken</h1>
                    <p>
                        Coming soon...
                    </p>

                    {/* <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F2320" className="weinlinie-button">Zum Shop</Button> */}
                </div>
            </div>

            {/* Spätburgunder QbA trocken */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(8)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreley_Spaetburgunder_trocken.jpg"}
                        alt="Loreley_Spätburgunder_trocken "
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Spätburgunder QbA trocken</h1>
                    <p>
                        Der perfekte Einstieg in unser Rotweinsortiment.
                        Aromen von Kirschen und Brombeeren geben diesem Spätburgunder Körper
                        und Leichtigkeit bei lebendigem Trinkfluss.
                    </p>

                    <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F121" className="weinlinie-button">Zum Shop</Button>

                </div>

            </div>

            {/* Weißburgunder Kabinett trocken */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(9)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreley_Weißburgunder_trocken.jpg"}
                        alt="Loreley_Weißburgunder_trocken "
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Weißburgunder Kabinett trocken</h1>
                    <p>
                        Dezenter Duft nach Äpfeln, Aprikose und Ananas.
                        Feiner Zug auf der Zunge mit verspieltem Körper.
                        Die Frucht und Finesse steht für sanftes Trinkvergnügen.
                    </p>

                    <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F4%2F20" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>

            {/* Grauburgunder Kabinett trocken  */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(10)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreley_Grauburgunder_trocken.jpg"}
                        alt="Loreley_Grauburgunder_Kabinett_trocken"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Grauburgunder Kabinett trocken </h1>
                    <p>
                        Coming soon...
                    </p>

                    {/* <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F2320" className="weinlinie-button">Zum Shop</Button> */}
                </div>
            </div>

            {/* Muskateller QbA trocken  */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(11)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreley_Muskateller.jpg"}
                        alt="Loreley_Muskateller"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Muskateller QbA trocken</h1>
                    <p>
                        Aromatisch, leicht, spritzig und trocken. Der Muskatduft kitzelt in der Nase, umrahmt von reifen
                        Früchten und druckvoller Würze.
                        Am Gaumen spielt die Muskatnuss ein elegantes Spiel, ergänzt von der vollen Frucht gelber Birnen und grünem Apfel.
                    </p>

                    <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F820" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>


            {/* Loreleyfelsen */}
            <div className="weinlinie-header-container">
                <div className="weinlinie-header-image-container">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_QP_silber.png"}
                        alt="Weine QP silber"
                        className="qp-image"
                    />
                </div>
                <div>
                    <h1>Loreleyfelsen</h1>
                </div>
            </div>

            {/* Spätburgunder Holzfass trocken */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(12)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreleyfelsen_Spaetburgunder_Holzfass.jpg"}
                        alt="Loreleyfelsen_Spaetburgunder_Holzfass"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Spätburgunder Holzfass trocken</h1>
                    <p>
                        Der Wein wurde auf der Maische vergoren und anschließend 12 Monate im 500 Liter Tonneau aus Eichenholz gelagert.
                        Neben den Aromen von Kirsche, Himbeere und roter Johannisbeere findet sich auch die Eichenholznote des Tonneau im Geschmack wieder.
                        Die ausgewogenen Tannine und der konzentrierte Körper sind das Ergebnis konsequenter Handarbeit.
                    </p>

                    <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F7" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>

            {/* Spätburgunder Barrique trocken */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(13)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreleyfelsen_Spaetburgunder_Barrique.jpg"}
                        alt="Loreleyfelsen_Spaetburgunder_Barrique"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Spätburgunder Barrique trocken</h1>
                    <p>
                        Der Wein wurde auf der Maische vergoren und anschließend 12 Monate im 225 Liter Barrique aus Eichenholz gelagert.
                        Die Aromen erinnern an Brombeere, Vanille und Kirsche. Die angenehme Tanninstruktur verleiht ihm Fülle mit einem druckvollen Ende.
                        Die ausgewogenen Tannine und der konzentrierte Körper sind das Ergebnis konsequenter Handarbeit.
                    </p>

                    <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F8" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>

            {/* Alte Reben Riesling Spätlese trocken */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(14)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreleyfelsen_Alte_Reben_Riesling.jpg"}
                        alt="Loreleyfelsen_Alte_Reben_Riesling_Spätlese_trocken"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Alte Reben Riesling Spätlese trocken </h1>
                    <p>
                        Coming soon...
                    </p>

                    {/* <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F2320" className="weinlinie-button">Zum Shop</Button> */}
                </div>
            </div>


            {/* Loreley Edel */}
            <div className="weinlinie-header-container">
                <div className="weinlinie-header-image-container">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_QP_gold.png"}
                        alt="Weine QP gold"
                        className="qp-image"
                    />
                </div>
                <div>
                    <h1>Loreley Edel</h1>
                </div>
            </div>

            {/* Riesling Spätlese */}
            <div className="weinlinie-container textbox">
                <div className="weinlinie-container-image" onClick={() => {setIsOpen(true), setPhotoIndex(15)}}>
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreleyfelsen_Alte_Reben_Riesling.jpg"}
                        alt="Loreley_Edel_Riesling_Spätlese"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Riesling Spätlese</h1>
                    <p>
                        Coming soon... 
                        
                    </p>
                    {/* <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F2320" className="weinlinie-button">Zum Shop</Button> */}
                </div>
            </div>


            <div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}
            </div>

        </div>
    );
}

export default Weine;