import React from "react";

import ImageImport from "../../components/structure/ImageImport";
import Geschichte from "./Geschichte";

const Weingut = () => {
    return (
        <div className="weingut defaultsite" id="allgemein">

            <ImageImport
                img={process.env.PUBLIC_URL + "/img/Weingut_Titelbild.jpeg"}
                alt="Weingut"
                className="titleimage"
            />
            <div className="textbox">


                <h1>Weingut</h1>
                <p>
                    Die Loreley Kellerei Leonhard ist ein Familienbetrieb mit eigenem Weinbau.
                    Seit mehr als 100 Jahren bewirtschaften wir in den Steillagen des wünderschönen Oberen Mittelrheintals bereits mit viel Liebe und Expertise eigene Weinberge. Der Betrieb wird momentan in der 5. Generation von Ralph und Isolde Leonhard geführt. Seit August 2018 ist auch der jüngste Sohn Felix mit dabei.
                    Er hat in Veitshöchheim seinen Techniker für Weinbau und Önologie gemacht und bringt nun frischen Wind in den Familienbetrieb. Aber auch Sohn Philipp, der als Bauingenieur arbeitet, ist immer zu Stelle, wenn helfende Hände benötigt werden – eben ein echtes Familienunternehmen.
            </p>
            </div>

        </div>
    );
}

export default Weingut;