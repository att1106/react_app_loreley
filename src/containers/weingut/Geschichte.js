import React from "react";

import ImageImport from "../../components/structure/ImageImport";

const Geschichte = () => {
    return (
        <div className="geschichte defaultsite" id="geschichte">

            <div className="titleimage-container background-geschichte" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/Weingut_Geschichte_Titelbild.png'})`
            }}>

            </div>

            <div className="textbox-titleimage">
                <h1>Geschichte</h1>
                <p>
                    Die Loreley Kellerei Leonhard ist ein Familienbetrieb mit eigenem Weinbau.
                </p>
                <p>
                    Das „Stammhaus“ befand sich vor mehr als 100 Jahren in der Altstadt von St. Goarshausen.
                    Durch den Bau der Eisenbahnstrecke, musste dieses Haus abgerissen werden und man zog in ein Haus auf die dem Rhein zugewandte Seite der Altstadt.
                    Hier war auf kleinstem Raum Weinkeller, Kelterstation und Abfüllung untergebracht.
                    Als sich die Gelegenheit zur Expansion ergab, wurde der Keller unterhalb des heutigen Rathauses gepachtet, wo man deutlich bessere Arbeitsbedingungen hatte. Durch mehrfache Hochwasserereignisse und durch Vergrößerung der Produktion, merkte man schnell, dass hier auch nicht der geeignete Ort war. In den fünfziger Jahren entschloss man sich daher in der Nastätter Strasse, einen Neubau des Kellers und der Arbeitshalle zu errichten.
                    Seitdem befindet sich hier der Firmensitz.
                </p>
            </div>

            {/* Generation 1*/}
            <div className="container defaultsite">
                <div className="container_image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weingut_Geschichte_Generation_1.JPG"}
                        alt="Weingut_Generation_1"
                        className="generation_image"
                    />
                </div>
                <div className="container_text">
                    <h1>1. Generation – Philipp Leonhard</h1>
                    <p>
                        Den Grundstein für die lange Weinbautradition der Leonhards legte Philipp Leonhard im Jahr 1890.
                        Er erwarb ein Haus inklusive Weinberg in St. Goarshausen  Neben der Haltung von Ziegen, war der Weinbau im Loreleytal für ihn die einzige Möglichkeit das Geld als Tagelöhner aufzubessern.
                        Der Weinberg machte sich bezahlt und somit nahm er weitere kleine Weinberge dazu.
                    </p>
                </div>
            </div>
            {/* Generation 2*/}
            <div className="container defaultsite">
                <div className="container_image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weingut_Geschichte_Generation_2.JPG"}
                        alt="Weingut_Generation_2"
                        className="generation_image"
                    />
                </div>
                <div className="container_text">
                    <h1>2. Generation – Georg Leonhard </h1>
                    <p>
                        Sein Sohn Georg Leonhard führte die Weinberge ebenfalls im Nebenerwerb weiter.
                        Er war damit so erfolgreich, dass die geerntete Weinmenge nicht ausreichte.
                        Wein war damals ein gefragtes Produkt und da die Weinbergsfläche in den Steillagen rund um die Loreley begrenzt war, entschloss er sich Wein zuzukaufen.
                        Das gefiel jedoch  seinen Mitstreitern nicht und so wurde er 1916 gezwungen den Weinhandel als Haupterwerb anzumelden.
                    </p>
                    <p>
                        <b>Die "Loreley-Kellerei" war geboren.</b>
                    </p>

                    <p>
                        Er führte das Weingut erfolgreich durch den ersten Weltkrieg und blieb bis ins hohe Alter dem Weinbau verbunden.
                    </p>
                </div>
            </div>
            {/* Generation 3*/}
            <div className="container defaultsite">
                <div className="container_image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weingut_Geschichte_Generation_3.jpg"}
                        alt="Weingut_Generation_3"
                        className="generation_image"
                    />
                </div>
                <div className="container_text">
                    <h1>3. Generation – Wilhelm Leonhard </h1>
                    <p>
                        Sein Sohn Wilhelm folgte erst anderen Pfaden.
                        Er ging zunächst dem Bäckerhandwerk nach, ehe er sich Anfang der 30er Jahre dem Weinbau verschrieb und den Betrieb weiter ausbaute.
                        Die schwere Zeit des zweiten Weltkriegs hat die Firma gut überstanden, wohl auch weil Wein damals in den Dörfern als Tauschobjekt gern gesehen war.
                        Auch der kleine Gemischtwarenladen, in dem neben den eigenen Weinen auch Spirituosen, Tabakwaren, Feinkost und Süßigkeiten verkauft wurden, konnte sich auch lange nach Kriegsende halten.
                    </p>
                    <p>
                        Die damals noch zahlreichen Gaststätten im Umkreis zählten zu den Hauptabnehmern, aber auch Kunden aus weiter entfernten Regionen, wie zum Beispiel aus dem Ruhrgebiet wussten den Loreleywein zu schätzen.
                    </p>
                </div>
            </div>
            {/* Generation 4*/}
            <div className="container defaultsite">
                <div className="container_image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weingut_Geschichte_Generation_4.JPG"}
                        alt="Weingut_Generation_4"
                        className="generation_image"
                    />
                </div>
                <div className="container_text">
                    <h1>4. Generation – Georg Leonhard </h1>
                    <p>
                        Sein ältester Sohn Georg übernahm 1959 mit seiner Frau Ursula das Weingut und den Gemischtwarenladen.
                        Der in den 60er Jahren aufkommende Tourismus im Loreleytal machte den Weinverkauf zum lohnenden Betriebszweig, den Georg und Ursula Leonhard stetig ausbauten.
                        Da die Weinmenge aus zwei Hektar eigenen Weinbergen nicht ausreichte, überwog weiterhin in dieser Zeit der Verkauf von zugekauftem Fasswein.
                        Die Arbeitsfläche im alten Rathaus in der Rheinstraße war bald zu klein und so wurde in der Nastätter Straße, dem heutigen Firmensitz, die Kellerei und später auch das Wohnhaus errichtet.
                    </p>
                </div>
            </div>
            {/* Generation 5*/}
            <div className="container defaultsite">
                <div className="container_image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weingut_Geschichte_Generation_5.jpeg"}
                        alt="Weingut_Generation_5"
                        className="generation_image"
                    />
                </div>
                <div className="container_text">
                    <h1>5. Generation – Ralph Leonhard </h1>
                    <p>
                        Im Jahr 1993 übernahm dessen Sohn und heutiger Betriebsinhaber Ralph Leonhard, nach seiner Weiterbildung als Winzermeister, mit seiner Frau Isolde das Weingut.
                        Damals bewirtschaftete die Loreley-Kellerei zwei Hektar Weinberge. In den 90er Jahren stieg die Nachfrage nach regionalen Weinen.
                        Deshalb entschlossen sich Ralph und Isolde Leonhard weitere Weinberge im Loreleytal zu kaufen und den Schwerpunkt auf die Produktion von eigenen Weinen zu legen.
                        Mittlerweile bewirtschaftet die Loreley-Kellerei 10ha eigene Weinberge in den Steillagen des Loreleytals.
                    </p>
                </div>
            </div>
            {/* Generation 6*/}
            <div className="container defaultsite">
                <div className="container_image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weingut_Geschichte_Generation_6.jpeg"}
                        alt="Weingut_Generation_6"
                        className="generation_image"
                    />
                </div>
                <div className="container_text">
                    <h1>6. Generation – Felix Leonhard </h1>
                    <p>
                        Felix Leonhard, der jüngste Sohn von Ralph und Isolde Leonhard, hat sich für eine Ausbildung zum Winzer entschieden.
                        Im Juli 2018  schloss er seine zweijährige Weiterbildung zum Techniker für Weinbau und Önologie erfolgreich ab.
                        Seit August 2018 unterstützt er das Weingut mit dem Ziel den Weinbau im Loreleytal zu erhalten und stetig weiterzuentwickeln. Er hat seine eigene Weinlinie ins Leben gerufen, um dem Weingut neuen Schwung zu verleihen.
                        Dabei setzt er vor allem auf Nachhaltigkeit.
                        Gemeinsam soll das Weingut innovativ eine Generation weitergetragen werden, ohne den Blick auf die Tradition zu verlieren.
                    </p>
                </div>
            </div>







        </div>
    );
}

export default Geschichte;