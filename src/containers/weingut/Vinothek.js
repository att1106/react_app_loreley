import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

import ImageImport from "../../components/structure/ImageImport";

const Vinothek = () => {
    const vinothekAddress = "https://www.google.de/maps/place/Vinothek+Loreley+an+der+F%C3%A4hre+St.+Goarshausen/@50.1537162,7.7159134,17z/data=!3m1!4b1!4m5!3m4!1s0x47be7584c2e2061d:0x6ff4234863f23de6!8m2!3d50.1537162!4d7.7181074";

    return (
        <div id="vinothek">
        <div className="place-section">

        </div>
        <div className="vinothek-container-center defaultsite">


         <div className="container_image">
                <ImageImport
                    img={process.env.PUBLIC_URL + "/img/Weingut_Vinothek_Titelbild.jpeg"}
                    alt="Weingut_Vinothek"
                    className="vinothek_image"
                />
            </div>
            <div className="container_text">
                <h1 className="vinothek_header">Vinothek</h1>
                <p className="vinothek_text">
                    Am 30. Juni 2019 haben wir in der Bahnhofstraße 4 in St. Goarshausen unsere Vinothek eröffnet.
                    Sie können unsere Weine also nicht nur in unserem traditionellen Weingut probieren und kaufen, sondern auch direkt am Rhein in unserer Vinothek.
                    Wenn Sie unseren Wein in den Rheinanlagen oder während einer Wanderung in unserem wunderschönen Loreleytal genießen möchten, bieten wir Ihnen gekühlte Flaschen Wein, Kühlmanschetten, Gläser und Picknickdecken an.
                    Außerdem erhalten Sie bei uns auch Auskunft über die Region rund um die Loreley. In unserer Info-Ecke können Sie sich gerne regionale Informationen und Prospekte mitnehmen.
           
                    Die Öffnungszeiten unserer Vinothek und unseres Weingutes finden Sie auf 
                    <Link className="vinothek-link" to="/home#oeffnungszeiten"> Öffnungszeiten</Link>. 
            
                    An bestimmten Tagen ist unsere Vinothek geschlossen. 
                    Hierüber informieren wir Sie auf 
                    <Link className="vinothek-link" to="/home#aktuelles"> Aktuelles</Link>.
                </p>
                <p>Wir freuen uns Sie zu empfangen! <a className="weingut-address" href={vinothekAddress}>Hier geht es zur Wegbeschreibung.</a></p>
         
            </div>



            </div>
        </div>

    );
}

export default Vinothek;