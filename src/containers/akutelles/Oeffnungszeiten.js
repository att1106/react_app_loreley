import React from "react";

const Oeffnungszeiten = () => {
    return (
        <div id="oeffnungszeiten">
            <div className="place-section">

            </div>
            <div className="oeffnungszeiten textbox">


                <h1>Öffnungszeiten</h1>

                <p className="info-textbox">Unsere aktuellen Öffnungszeiten:</p>
                <p>Weingut:</p>
                <ul className="oeffnungszeiten-list">
                    <li>Mo.-Fr. 9 Uhr bis 17.30 Uhr</li>
                    <li>Sa. 9 Uhr bis 13 Uhr</li>
                    <li>So. nach Vereinbarung</li>
                </ul>

                <p>Vinothek:</p>
                <ul className="oeffnungszeiten-list">
                    <li>Wegen Corona ist unsere Vinothek aktuell leider geschlossen. 
                    <br/>
                    Gerne empfangen wir Sie in unserem Weingut.</li>
                </ul>
                <p>
                Online-Shop:
                </p>
                <ul className="oeffnungszeiten-list">
                    <li>Unser Online-Shop ist rund um die Uhr für Sie geöffnet.</li>
                </ul>
            </div>
        </div>
    );
}

export default Oeffnungszeiten;