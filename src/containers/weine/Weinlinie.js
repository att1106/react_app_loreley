import React from "react";
import "./weine.css"
import ImageImport from "../../components/structure/ImageImport";
import Button from 'react-bootstrap/Button';

const Weine = () => {

    return (
        <div className="defaultsite" id="weinlinie">

            <div className="titleimage-container background-weinelinie" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/Weine_Weinlinie_Titelbild.png'})`
            }}>
            </div>


            <h1>Mittelrhein</h1>

            {/* Mittelrhein Riesling QbA trocken */}
            <div className="weinelinie-container">
                <div className="weinelinie-container-image">
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
                        In der Nase frische Aromen von Zitrusfrüchten und grünem Apfel. Am Gaumen
                        zeigt er sich frisch spritzig mit rassigem Charakter, schönen Fruchtaromen und
                        einer angenehmen Mineralität.
                    </p>

                    <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F2120" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>

            {/* Mittelrhein Riesling QbA halbtrocken */}
            <div className="weinelinie-container">
                <div className="weinelinie-container-image">
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
                        und gelben Früchten. Durch das feine mineralische Fruchtspiel und einer angenehmen Restsüße wird dem Wein Komplexität verliehen.
                    </p>

                    <Button href=" https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F720" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>

            {/* Mittelrhein Riesling Qba lieblich */}
            <div className="weinelinie-container">
                <div className="weinelinie-container-image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Riesling_halbtrocken.jpg"}
                        alt="Mittelrhein_Riesling_halbtrocken"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Riesling Qba lieblich</h1>
                    <p>
                        Coming soon...
                    </p>

                    {/* <Button href=" https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F720" className="weinlinie-button">Zum Shop</Button> */}
                </div>
            </div>

            {/* Rosé QbA halbtrocken */}
            <div className="weinelinie-container">
                <div className="weinelinie-container-image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Rose.jpg"}
                        alt="Mittelrhein_Rose"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Rosé QbA halbtrocken</h1>
                    <p>
                        Der perfekte Sommerwein - frisch, fruchtig und leicht.
                        Angenehmes Säurespiel. Aromen von Erdbeeren, die
                        sich am Gaumen und in der Nase ausbreiten.
                        Die angenehme Restsüße sorgt für Trinkfreude.
                    </p>

                    <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F11%2F20" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>

            {/* Rotling QbA lieblich */}
            <div className="weinelinie-container">
                <div className="weinelinie-container-image">
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
                        werden. Farblich erscheint dieser Wein in einem strahlend hellem Rot.
                        Durch seine Restsüße und seine fruchtigen Aromen eignet er sich gut gekühlt für warme Sommertage.
                    </p>

                    <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F2320" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>

            <h1>Loreley</h1>

            {/* Rotschiefer Riesling Kabinett halbtrocken */}
            <div className="weinelinie-container">
                <div className="weinelinie-container-image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Riesling_halbtrocken.jpg"}
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
            <div className="weinelinie-container">
                <div className="weinelinie-container-image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Riesling_halbtrocken.jpg"}
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
            <div className="weinelinie-container">
                <div className="weinelinie-container-image">
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
                    <p>Aktuell ausverkauft</p>

                    {/* <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F2320" className="weinlinie-button">Zum Shop</Button> */}
                </div>
            </div>

            {/* Weißburgunder Kabinett trocken */}
            <div className="weinelinie-container">
                <div className="weinelinie-container-image">
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
            <div className="weinelinie-container">
                <div className="weinelinie-container-image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreley_Weißburgunder_trocken.jpg"}
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
            <div className="weinelinie-container">
                <div className="weinelinie-container-image">
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
                        Am Gaumen spielt die Muskatnuss ein elegantes Spiel, ergänzt von der vollen Frucht gelber Birnen und grüner Äpfel.
                    </p>

                    <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F3" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>

            <h1>Loreleyfelsen</h1>

            {/* Spätburgunder Holzfass trocken */}
            <div className="weinelinie-container">
                <div className="weinelinie-container-image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreleyfelsen_Spaetburgunder_Holzfass.jpg"}
                        alt="Loreleyfelsen_Spaetburgunder_Holzfass"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Spätburgunder Holzfass trocken</h1>
                    <p>
                        Der Wein wurde auf der Maische vergoren und anschließend 12 Monate im 500l Tonneau aus Eichenholz gelagert.
                        Neben Kirsche, Himbeere und roter Johannisbeere findet sich auch die Eichenholznote des Tonneau im Geschmack wieder.
                        Die ausgewogenen Tannine und der konzentrierte Körper sind das Ergebnis konsequenter Handarbeit.
                    </p>

                    <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F7" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>

            {/* Spätburgunder Barrique trocken */}
            <div className="weinelinie-container">
                <div className="weinelinie-container-image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Loreleyfelsen_Spaetburgunder_Barrique.jpg"}
                        alt="Loreleyfelsen_Spaetburgunder_Barrique"
                        className="weinlinie-image"
                    />
                </div>
                <div className="weinlinie-container-text">
                    <h1>Spätburgunder Barrique trocken</h1>
                    <p>
                        Der Wein wurde auf der Maische vergoren und anschließend 12 Monate im 225l Barrique aus Eichenholz gelagert.
                        Die Aromen erinnern an Brombeeren, Vanille und Kirsche. Die angenehme Tanninstruktur verleiht ihm Fülle mit einem druckvollen Ende.
                        Die ausgewogenen Tannine und der konzentrierte Körper sind das Ergebnis konsequenter Handarbeit.
                    </p>

                    <Button href="https://loreley-kellerei.winitas-shop.de/artikel.html?artnr=F8" className="weinlinie-button">Zum Shop</Button>
                </div>
            </div>

            {/* Alte Reben Riesling Spätlese trocken */}
            <div className="weinelinie-container">
                <div className="weinelinie-container-image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Riesling_halbtrocken.jpg"}
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

            <h1>Loreley Edel</h1>

            {/* Riesling Spätlese */}
            <div className="weinelinie-container">
                <div className="weinelinie-container-image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weine_Weinlinie_Mittelrhein_Riesling_halbtrocken.jpg"}
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

        </div>
    );
}

export default Weine;