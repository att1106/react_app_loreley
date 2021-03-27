import React from "react";
import Termine from "./Termine";
import Oeffnungszeiten from "./Oeffnungszeiten";
// import ImageImport from "../../components/structure/ImageImport";
import "./aktuelles.css";

const Aktuelles = () => {

    return (

        <div className="defaultsite aktuelles" id="aktuelles">
            <div className="place-titleimage">

            </div>

            <div className="titleimage-container background-aktuelles" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/Home_Titelbild.jpg'})`
            }}>
            </div>

            <div id="aktuelles-text" className="textbox-titleimage">
                <h1>Aktuelles</h1>
                <p className="info-textbox">
                    Liebe Weinfreunde, <br />
                    auch vor uns machen die Coronaregeln nicht Halt.
                    Deshalb ist unser Weinverkauf zur Zeit nur im Weingut Nastätter Straße 9 in St. Goarshausen
                    geöffnet. Wir freuen uns auf Ihren Besuch!
                </p>
            </div>
            <Termine />

            <Oeffnungszeiten />

        </div>
    );
}

export default Aktuelles;