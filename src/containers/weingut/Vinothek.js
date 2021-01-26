import { faDice } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import ImageImport from "../../components/structure/ImageImport";

const Vinothek = () => {

    return (
        <div className="container defaultsite" id="vinothek">
            <div className="container_text textbox">
                <h1 className="vinothek_header">Vinothek</h1>
                <p className="vinothek_text">
                    Am 30.Juni 2019 haben wir in der Bahnhofstraße 4 in Sankt Goarshausen unsere Vinothek eröffnet.
            
                    Sie können unsere Weine also nicht nur in unserem traditionellen Weingut probieren und kaufen, sondern auch in unserer Vinothek direkt am Rhein.
          
                    Wenn Sie unseren Wein in den Rheinanlagen oder während einer Wanderung in unserer wunderschönen Gegend genießen möchten, bieten wir Ihnen gekühlte Flaschen Wein, Kühlmanschetten, Gläser und Picknickdecken an.
             
                    Außerdem erhalten Sie bei uns auch Auskunft über die Gegend rund um die Loreley. In unsere Info-Ecke können Sie sich gerne Prospekte und Informatives zur Region mitnehmen.
           
                    Die Öffnungszeiten unserer Vinothek und unseres Weingutes finden Sie auf „Öffnungszeiten“ (hier Öffnungszeiten mit der Seite „Öffnungsseite“ verlinken)
            
                    An bestimmten Tagen ist unsere Vinothek geschlossen. Hierüber informieren wir Sie auf „Aktuelles“  (hier Aktuelles mit der Seite „Aktuelles“ verlinken)
                </p>
            </div>



            <div className="container_image">
                <ImageImport
                    img={process.env.PUBLIC_URL + "/img/Weingut_Vinothek_Titelbild.jpeg"}
                    alt="Weingut_Vinothek"
                    className="vinothek_image"
                />
            </div>
        </div>

    );
}

export default Vinothek;