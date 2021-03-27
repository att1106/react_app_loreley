import React from "react";
// import ImageImport from "../../components/structure/ImageImport";
// import { Link } from "react-router-dom";

const Weingut = () => {
    const weingutAddress = "https://www.google.de/maps/place/Loreley-Kellerei+Leonhard+Weingut/@50.157667,7.7141598,17z/data=!4m5!3m4!1s0x47be75ec6c57e33d:0xe1913f9139b37283!8m2!3d50.157667!4d7.7163538";
    
    return (
        <div className="weingut defaultsite" id="allgemein">
            <div className="titleimage-container background-weingut" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/Weingut_Titelbild.JPG'})`
            }}>
            </div>

            <div className="textbox-titleimage">
                <h1>Weingut</h1>
                <p>
                    Die Loreley-Kellerei Leonhard ist ein Familienbetrieb mit eigenem Weinbau.
                    Bereits seit mehr als 100 Jahren bewirtschaftet die Familie in den Steillagen des wunderschönen Oberen Mittelrheintals mit viel Liebe und Expertise eigene Weinberge.
                </p>
                <p>
                    Die Arbeit im Weinberg, die Traubenlese und deren Verarbeitung, sowie die Weinbereitung wird in Familienhand durchgeführt.
                    Hier wird darauf geachtet, den perfekten Zeitpunkt der verschiedenen Arbeiten genau abzustimmen, um die Qualität vom Weinberg in die Flasche zu bringen.
                    Im Weingut und in der Vinothek ist es selbstverständlich, dass die Weine vor dem Kauf probiert werden können.
                </p>
                <p>Besuchen Sie uns gerne vor Ort! <a className="weingut-address" href={weingutAddress}>Hier geht es zur Wegbeschreibung.</a></p>
            </div>

        </div>
    );
}

export default Weingut;