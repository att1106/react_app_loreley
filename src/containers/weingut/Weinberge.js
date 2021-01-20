import React from "react";

import ImageImport from "../../components/structure/ImageImport";

const Weinberge = () => (

    <div className="weinberge defaultsite">

        <ImageImport
            img={process.env.PUBLIC_URL + "/img/Weingut_Weinberge_Titelbild.jpeg"}
            alt="Weinberge"
            className="titleimage"
        />
        <h1>Weinberge</h1>
        <p>
            Wir bewirtschaften zurzeit zehn Hektar in den Steillagen der Mittelrheinhänge, verteilt auf drei Lagen.
            Unsere Weinkultur lebt von den Schieferböden, die für unsere besondere mineralische Weinqualität sorgen.
            Auf ihnen wird die Sonnenwärme gespeichert, so dass unsere Reben in idealem Klima die nötige Kraft für unsere Weine liefern.
        </p>

    </div>
)

export default Weinberge;