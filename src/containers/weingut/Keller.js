import React from "react";

import ImageImport from "../../components/structure/ImageImport";

const Keller = () => {
    return (
        <div className="defaultsite" id="keller">

            <ImageImport
                img={process.env.PUBLIC_URL + "/img/Weingut_Keller_Titelbild.jpeg"}
                alt="Weingut_Keller"
                className="titleimage"
            />
            <h1>Keller</h1>
            <p>
                1957 wurde der Weinkeller in der Nastätter Straße 9 gebaut.
                Der Grundriss des Kellers ist bis heute gleichgeblieben, doch die Ausstattung des Kellers veränderte sich stetig.
                Damals war es üblich und Tradition, die Weine in Holzfässern auszubauen und zu lagern.
                Mit der Zeit kamen neue Fässer bzw. Tanks auf den Markt, die  weniger aufwendig zu erhalten und zu reinigen waren. Man tauschte also Holzfässer durch GFK Tanks. Neben diesen beiden Varianten kamen mit der Zeit auch Edelstahltanks auf den Markt. Diese waren und sind pflegeleicht und sehr gut zu reinigen. Was für Winzer jede Menge Vorteile schaffte.
                Also wurden die GFK Tanks schließlich durch Edelstahltanks ersetzt.
        </p>

        </div>
    );
}

export default Keller;