import React from "react";
import "./agarumweltKlimaMassnahmen.css"
import ImageImport from "../../components/structure/ImageImport";

const AgarumweltKlimaMassnahmen = () => {
    return (
        <div className="defaultsite">

            <ImageImport
                img={process.env.PUBLIC_URL + "/img/Eulla.png"}
                alt="Agrarumwelt- und Klimamaßnamen"
                className="agrarumweltklima-image"
            />

        </div>
    );
}

export default AgarumweltKlimaMassnahmen;