import React from "react";
import ImageImport from "../../components/structure/ImageImport";


const Start = () => {

    return (
        <div className="defaultsite">

            <ImageImport
                img={process.env.PUBLIC_URL + "/img/Startseite_Titelbild.jpg"}
                alt="Startseite"
                className="titleimage"
            />

        </div>
    );
}

export default Start;