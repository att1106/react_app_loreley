import React from "react";

import ImageImport from "../../components/structure/ImageImport";

const Impressum = () => {
    return (
        <div className="defaultsite">

            <ImageImport
                img={process.env.PUBLIC_URL + "/img/Impressum_Titelbild.png"}
                alt="Impressum Titelbild"
                className="titleimage"
            />
            <h1>Impressum</h1>
            <p>
                Betreiber der Webseite und Verantwortlicher:
                <br />
                Loreley Kellerei Georg Leonhard Weingut
                <br />
                Inhaber: Ralph Leonhard
            </p>
            <p>
                Anschrift:
                <br />
                Nastätter Straße 9
                <br />
                56346 Sankt Goarshausen
            </p>
            <p>
                Telefon:06771 / 2659
                 <br />
                Email: Loreley-Kellerei@t-online.de
                <br />
                Internet: www.loreley-kellerei.de
            </p>
            <p>
                USt ID: DE 153897818
                <br />
                Steuernummer: 39/230/08903
                <br />
                <br />
                Urheberrecht für alle Fotos liegt bei dem Verfasser der Seite
            </p>
            <p>
            Diese Website enthält Verknüpfungen zu Websites Dritter (\"externe Links\"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. 
            Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine 
            Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. 
            Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. 
            Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht. 
            </p>
        </div>
    );
}

export default Impressum;