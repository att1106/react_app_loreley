import React from "react";
import ImageImport from "../../components/structure/ImageImport";

const Keller = () => {
    return (
        <div className="defaultsite" id="keller">
            <div className="titleimage-container">
                <ImageImport
                    img={process.env.PUBLIC_URL + "/img/Weingut_Keller_Titelbild.jpeg"}
                    alt="Weingut_Keller"
                    className="titleimage"
                />
            </div>

            <div className="textbox-titleimage">
                <h1>Keller</h1>
                <p>
                    1957 wurde der Weinkeller in der Nastätter Straße 9 gebaut.
                    Der Grundriss des Kellers ist bis heute gleichgeblieben, doch die Ausstattung des Kellers veränderte sich stetig.
                    Damals war es üblich und Tradition, die Weine in Holzfässern auszubauen und zu lagern.
                    Mit der Zeit kamen neue Fässer bzw. Tanks auf den Markt, die  weniger aufwendig zu erhalten und zu reinigen waren. Man tauschte also Holzfässer durch GFK Tanks. Neben diesen beiden Varianten kamen mit der Zeit auch Edelstahltanks auf den Markt. Diese waren und sind pflegeleicht und sehr gut zu reinigen. Was für Winzer jede Menge Vorteile schaffte.
                    Also wurden die GFK Tanks schließlich durch Edelstahltanks ersetzt.
                </p>

            {/* Keller Fass */}
            <div className="container-center defaultsite">
                <div className="container_image">
                    <ImageImport
                        img={process.env.PUBLIC_URL + "/img/Weingut_Keller_Fass.jpeg"}
                        alt="Weingut_Keller_Faesser"
                        className="weinberge_image"
                    />
                </div>
                <div className="container_text">
                    <p>
                        Heute setzen wir bei unseren Weinen größtenteils auf Edelstahltanks.
                        Allerdings haben wir für uns auch das Holzfass wieder entdeckt und setzen es je nach Weintyp und Rebsorte bei unseren Weinen ein. Aktuell kann unser Weinkeller ca. 80.000 Liter Wein lagern.
                        Wir verarbeiten unsere Weine schonend und versuchen die hundertprozentige Qualität, die aus dem Weinberg kommt, in die Flasche zu bringen. Hierbei ist es uns wichtig auf Schönungsmittel wie zum Beispiel Gelatine, zu verzichten.
                        Unsere Weine reifen je nach Qualität zwischen fünf und zwölf Monaten im Keller, bevor sie in die Flasche kommen.
                    Zeit ist uns bei unseren Weinen extrem wichtig, damit sie den perfekten Reifegrad erreichen. </p>
                </div>
            </div>
                
            </div>


            

        </div>
    );
}

export default Keller;