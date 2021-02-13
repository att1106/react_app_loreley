import React from "react";

const Oeffnungszeiten = () => {
    return (
        <div className="oeffnungszeiten textbox" id="oeffnungszeiten">

            <h1>Öffnungszeiten</h1>

            <p>Unsere Winteröffnungszeiten ab 1. Dezember bis 28. Februar:</p>
            <p>Im Weingut:</p>
            <ul className = "oeffnungszeiten-list">
                <li>Mo.-Fr. 9 Uhr bis 17.30 Uhr</li>
                <li>Sa. 9 Uhr bis 13 Uhr</li>
                <li>So. nach Vereinbarung</li>
            </ul>
            
            <p>In der Vinothek:</p>
            <ul className = "oeffnungszeiten-list">
                <li>Dezember, Januar und Februar Winterpause - wir bedienen Sie in dieser Zeit gerne im Weingut!</li>
            </ul>
         
        </div>
    );
}

export default Oeffnungszeiten;