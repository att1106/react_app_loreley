import React from "react";

const Oeffnungszeiten = () => {
    return (
        <div className="oeffnungszeiten textbox" id="oeffnungszeiten">

            <h1>Öffnungszeiten</h1>

            <p className="info-textbox">Unsere aktuellen Öffnungszeiten:</p>
            <p>Im Weingut:</p>
            <ul className = "oeffnungszeiten-list">
                <li>Mo.-Fr. 9 Uhr bis 17.30 Uhr</li>
                <li>Sa. 9 Uhr bis 13 Uhr</li>
                <li>So. nach Vereinbarung</li>
            </ul>
            
            <p>In der Vinothek:</p>
            <ul className = "oeffnungszeiten-list">
                <li>Wegen Corona ist unsere Vinothek aktuell leider geschlossen, gerne empfangen wir Sie in unserem Weingut.</li>
            </ul>
         
        </div>
    );
}

export default Oeffnungszeiten;