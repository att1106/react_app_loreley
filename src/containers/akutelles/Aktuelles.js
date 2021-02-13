import React from "react";
import Termine from "./Termine";
import Oeffnungszeiten from "./Oeffnungszeiten";
// import ImageImport from "../../components/structure/ImageImport";
import "./aktuelles.css";

const Aktuelles = () => {

    return (

        <div className="defaultsite aktuelles" id="aktuelles">

            {/* <div className="titleimage-container">
                <ImageImport
                    img={process.env.PUBLIC_URL + "/img/Home_Titelbild.jpg"}
                    alt="Home_Titelbild"
                    className="titleimage"
                />
            </div> */}

            <div className="titleimage-container background-aktuelles" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/Home_Titelbild.jpg'})`
            }}>
            </div>

            <div id="aktuelles-text" className="textbox-titleimage">
                <h1>Aktuelles</h1>
                <br/>
                <br/>
                <p>
                    Liebe Weinfreunde, <br />
                    auch vor uns machen die Coronaregeln nicht halt.
                    Deshalb ist unser Weinverkauf zur Zeit nur im Weingut Nastätter Straße 9 in St. Goarshausen
                    geöffnet. Wir freuen uns auf Euren Besuch!
                </p>
            </div>
            <Termine />

            <Oeffnungszeiten />

        </div>
    );
}

export default Aktuelles;