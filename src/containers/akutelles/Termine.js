import React from "react";

const Termine = () => {
    return (
        <div className="termine textbox" id="termine">
            <h1 >Termine</h1>
            <p className="info-textbox">
                Wir sind optimistisch und planen folgende Termine  für 2021 - über Durchführung kann aber jeweils nur kurzfristig entschieden werden.
            </p>

            <table className="termine-table">
                <tr>
                    <th>Datum</th>
                    <th>Veranstaltung</th>
                </tr>
                <tr>
                    <td>23. – 24. Mai 2021 (Pfingsten)</td>
                    <td>Hoffest oder Hoffest to go</td>
                </tr>
                <tr>
                    <td>12. Juni 2021</td>
                    <td>Nachtbummel in der Römerstrasse in Nastätten</td>
                </tr>
                <tr>
                    <td>30. - 31 Juli 2021</td>
                    <td>Weinwiesenfest in Katzenelnbogen</td>
                </tr>
                <tr>
                    <td>18. September 2021</td>
                    <td>Rhein in Flammen</td>
                </tr>
                <tr>
                    <td>27. -  28. November 2021 </td>
                    <td>Weihnachtsmarkt in Nastätten</td>
                </tr>
                <tr>
                    <td>4. Dezember 2021</td>
                    <td>Glühwei(h)nacht in der Altstadt von St.Goarshausen</td>
                </tr>
                <tr>
                    <td>11. Dezember 2021</td>
                    <td>Wei(h)nachtsrock im Weingut</td>
                </tr>
            </table>
            <br/>
            <br/>
            <p className = "termine-end"> Wir halten Sie auf dem Laufenden! </p>
        </div>
    );
}

export default Termine;