import React from "react";

import ImageImport from "../../components/structure/ImageImport";

const Geschichte = () => {
    return (
        <div className="geschichte defaultsite" id="geschichte">
            {/* <div className="titleimage-container">
                <ImageImport
                    img={process.env.PUBLIC_URL + "/img/Weingut_Geschichte_Titelbild.png"}
                    alt="Geschichte"
                    className="titleimage"
                />
            </div> */}
            <div className="titleimage-container" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/Weingut_Geschichte_Titelbild.png'})`
            }}>

            </div>

            <div className="textbox-titleimage">
                <h1>Geschichte</h1>
                <p>
                    Die Loreley Kellerei Leonhard ist ein Familienbetrieb mit eigenem Weinbau.
                    Seit mehr als 100 Jahren bewirtschaften wir in den Steillagen des wünderschönen Oberen Mittelrheintals bereits mit viel Liebe und Expertise eigene Weinberge. Der Betrieb wird momentan in der 5. Generation von Ralph und Isolde Leonhard geführt. Seit August 2018 ist auch der jüngste Sohn Felix mit dabei.
                    Er hat in Veitshöchheim seinen Techniker für Weinbau und Önologie gemacht und bringt nun frischen Wind in den Familienbetrieb. Aber auch Sohn Philipp, der als Bauingenieur arbeitet, ist immer zu Stelle, wenn helfende Hände benötigt werden – eben ein echtes Familienunternehmen.
             </p>
            </div>

            {/* Generation 1*/}
            <div className="container defaultsite">
                <div className="container_image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weingut_Geschichte_Generation_1.png"}
                        alt="Weingut_Generation_1"
                        className="generation_image"
                    />
                </div>
                <div className="container_text">
                    <h1>1. Generation – Philipp Leonhard</h1>
                    <p>
                        Den Grundstein für die lange Weinbau-Tradition der Leonhards
                        legte ca. 1890 Philipp Leonhard, der mit einem kleinen Weinberg
                        sein Tagelöhnergeld aufbesserte.
                    </p>
                </div>
            </div>
            {/* Generation 2*/}
            <div className="container defaultsite">
                <div className="container_image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weingut_Geschichte_Generation_2.png"}
                        alt="Weingut_Generation_2"
                        className="generation_image"
                    />
                </div>
                <div className="container_text">
                    <h1>2. Generation – Georg Leonhard </h1>
                    <p>
                        Sein Sohn Georg Leonhard führte den Weinberg ebenfalls im
                        Nebenerwerb weiter. Die geerntete Weinmenge reichte jedoch
                        nicht aus, so dass er Wein zukaufen musste. Das gefiel jedoch s
                        seinen Mitstreitern nicht und so wurde er 1916 gezwungen den Weinhandel
                        als Haupterwerb anzumelden.
                    <br />
                        <b>Die "Loreley-Kellerei" war geboren.</b>

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
                        Georg Leonhard war bis ins hohe Alter dem Weinbau verbunden und führte
                        die Firma erfolgreich durch den ersten Weltkrieg. Sein Sohn Wilhelm folgte erst anderen
                        Pfaden. Er ging zunächst dem Bäckerhandwerk nach, ehe er sich Anfang der 30er Jahre dem Weinbau verschrieb
                        und den Betrieb weiter ausbaute. Die schwere Zeit des zweiten Weltkriegs hat die Firma gut
                        überstanden, wohl auch weil Wein damals in den Dörfern als Tauschobjekt gern gesehen war.
                        Auch der kleine Gemischtwarenladen, in dem neben den eigenen Weinen auch Tabakwaren,
                        Feinkost und Süßigkeiten verkauft wurden, konnte sich während der Kriegszeiten halten.
                        Wilhelm führte das Familienunternehmen mit konkreten Zielen. Das zahlte sich aus. Er konnte den Kundenkreis von den
                        damals noch zahlreichen Gaststätten der Dörfer im Umkreis auch auf weiter entfernte Regionen, wie zum Beispiel das Ruhrgebiet, erweitern.
                    </p>
                </div>
            </div>
            {/* Generation 4*/}
            <div className="container defaultsite">
                <div className="container_image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weingut_Geschichte_Generation_4.jpg"}
                        alt="Weingut_Generation_4"
                        className="generation_image"
                    />
                </div>
                <div className="container_text">
                    <h1>4. Generation – Georg Leonhard </h1>
                    <p>
                        Der in den 60er Jahren aufkommende Tourismus im Loreleytal machte den Weinbau zum
                        lohnenden Betriebszweig, den die 4. Generation Georg Leonhard stetig ausbaute.
                        Der Weinkeller im alten Rathaus in der Rheinstraße war bald zu klein und so wurde
                        in der Nastätter Straße, dem heutigen Firmensitz, die Kellerei und später auch
                        das Wohnhaus errichtet.
                    </p>
                </div>
            </div>
            {/* Generation 5*/}
            <div className="container defaultsite">
                <div className="container_image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weingut_Geschichte_Generation_5.jpg"}
                        alt="Weingut_Generation_5"
                        className="generation_image"
                    />
                </div>
                <div className="container_text">
                    <h1>5. Generation – Ralph Leonhard </h1>
                    <p>
                        Bis zum Jahr 1993 bewirtschaftete die Loreley-Kellerei zwei Hektar Weinberge direkt am Loreleyfelsen und in der Nocherner
                        Flurbereinigung. Der Weinhandel war aber bis in die 80er Jahre immer noch ein wichtiger Wirtschaftszweig, der mit dem Auftauchen der großer Supermarktketten, die nun auch ein breites Weinsortiment anboten, immer kleiner wurde.
                        Im Jahr 1993 übernahm der heutige Inhaber Ralph Leonhard in der 5. Generation das Weingut und setzte durch den Kauf von Weinbergen in der Wellmicher und Nocherner Flurbereinigung wieder mehr auf die Produktion lokaler Weine.
                        Der Kundenkreis hat sich im Lauf der Jahre ebenfalls gewandelt. Früher setzten unsere Vorfahren auf die kleinen Dorfwirtschaften, die heute jedoch bis auf einige wenige verschwunden sind.
                        Der Tourismus ist nach wie vor ein wichtiger Zweig im Weinverkauf, aber auch im Zuge der Globalisierung und Digitalisierung haben wir mittlerweile auch Kunden deutschlandweit und sogar darüber hinaus.
                        Es hat sich im Laufe der Zeit viel verändert, aber die Loreley-Kellerei ist immer ein Familienbetrieb gewesen, der Wert auf Regionalität und Qualität gelegt hat. Wir sind stolz diese lange Tradition fortführen zu dürfen.
                    </p>
                </div>
            </div>
            {/* Generation 6*/}
            <div className="container defaultsite">
                <div className="container_image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weingut_Geschichte_Generation_6.jpg"}
                        alt="Weingut_Generation_6"
                        className="generation_image"
                    />
                </div>
                <div className="container_text">
                    <h1>6. Generation – Felix Leonhard </h1>
                    <p>
                        Auch unser Sohn Felix hat sich für eine Ausbildung zum Winzer entschieden und ist seit Juli 2018 fertig mit seiner Weiterbildung zum Techniker für Weinbau und Önologie.
                        Seit August 2018 unterstützt er uns in unserem Ziel den Weinbau im Loreleytal zu erhalten und stetig zu verbessern und weiterzuentwickeln. Er hat seine eigene Weinlinie ins Leben gerufen, um dem Weingut neuen Schwung zu verleihen.
                        Dabei setzt er vor allem auf Nachhaltigkeit. Gemeinsam wollen wir das Weingut eine Generation weitertragen und es fit für die Zukunft machen.
                        Bei uns trifft Tradition auf Innovation.
                    </p>
                </div>
            </div>







        </div>
    );
}

export default Geschichte;