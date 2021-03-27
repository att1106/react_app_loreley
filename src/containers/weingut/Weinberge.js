import React from "react";

import ImageImport from "../../components/structure/ImageImport";

const Weinberge = () => {
    return (
        <div className="weinberge defaultsite" id="weinberge">
            <div className="place-titleimage">

            </div>
            <div className="titleimage-container background-weinberge" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/Weingut_Weinberge_Titelbild.png'})`
            }}>
            </div>

            <div className="textbox-titleimage">
                <h1>Weinberge</h1>
                <p>
                    Die Loreley-Kellerei bewirtschaftet zurzeit zehn Hektar Weinberge, verteilt auf drei Einzellagen in den steilen sonnendurchfluteten Hängen des Loreleytals.
                    Die Weinkultur lebt von den Schieferböden, die für besondere mineralische Weinqualität sorgen. Auf ihnen wird die Sonnenwärme gespeichert, so dass die Reben in idealem Klima die nötige Kraft für die Weine liefern.
                    Zahlreiche seltene Tier- und Pflanzenarten, wie die Smaragdeidechse oder wilde Orchideen und mediterrane Kräuter fühlen sich hier heimisch.
                </p>


                {/* Weinberge Nochern */}
                <div className="container-center defaultsite">
                    <div className="container_image">
                        <ImageImport
                            img={process.env.PUBLIC_URL + "/img/Weingut_Weinberge_Nochern.jpg"}
                            alt="Weingut_Weinberge_Nochern"
                            className="weinberge_image"
                        />
                    </div>
                    <div className="container_text weinberg_text">

                        <h1>Nochern, Nocherner Brünnchen</h1>
                        <p>
                            Die Lage Nocherner Brünnchen liegt hoch über dem Rheintal, eingebettet in die Landschaft des Taunus.
                            Unsere Weinberge verteilen sich in der zwölf Hektar großen Flurbereinigung,
                            in der ca. fünf Hektar von uns selbst bewirtschaftet werden.
                    <br />
                            <br />
                    Auch hier findet man wieder, den für unsere Region typischen Schieferboden, der für unsere
                    besondere mineralische Weinqualität sorgt.
                    </p>
                    </div>

                </div>
                {/* Weinberge Wellmich */}
                <div className="container-center defaultsite">
                    <div className="container_image">
                        <ImageImport
                            img={process.env.PUBLIC_URL + "/img/Weingut_Weinberge_Wellmich.jpeg"}
                            alt="Weingut_Weinberge_Wellmich"
                            className="weinberge_image"
                        />
                    </div>
                    <div className="container_text weinberg_text">
                        <h1>Wellmich, Burg Maus</h1>
                        <p>
                            Auch direkt gegenüber der Burg Maus im Stadtteil Wellmich liegt ein Teil unserer Weinberge.
                    <br />
                            <br />
                    Hier befindet sich auch unser steilster Weinberg, der mit seinen 90 Prozent Steigung eine ganz besondere
                    Herausforderung für Mensch und Maschine ist.
                    <br />
                            <br />
                    In dieser Lage bevorzugen wir den Anbau von Riesling und Spätburgunder.
                    </p>
                    </div>
                </div>
                {/* Weinberge Sankt Goarshausen, Loreley Edel */}
                <div className="container-center defaultsite">
                    <div className="container_image">
                        <ImageImport
                            img={process.env.PUBLIC_URL + "/img/Weingut_Weinberge_StGoarshausen.jpeg"}
                            alt="Weingut_Weinberge_StGoarshausen"
                            className="weinberge_image"
                        />
                    </div>
                    <div className="container_text weinberg_text">
                        <h1>Sankt Goarshausen, Loreley Edel</h1>
                        <p>
                            Der einzig wahre Loreleywein wächst in unserem ältesten Weinberg, der sich unmittelbar an den
                            sagenumwobenen Loreleyfelsen anschmiegt. Der Weinberg wurde im Jahr 1964 gepflanzt.
                            Damals war es üblich, die Weinberge in Terrassenlage anzulegen, um die Arbeit,
                            für damalige Verhältnisse, so effektiv wie möglich zu gestalten. Das bedeutet für uns heute aber auch,
                            dass der gesamte Weinberg von Hand bewirtschaftet werden muss und der Einsatz unserer Raupe nur
                            bedingt möglich ist. Auch das ist ein Grund, warum unser Loreley Edel ein ganz besonderer Wein ist.
                    </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Weinberge;