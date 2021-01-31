import React from "react";
import ImageImport from "../../components/structure/ImageImport";
import Button from 'react-bootstrap/Button';
import { HashLink as Link } from 'react-router-hash-link';

import "./start.css";



const Start = () => {

    return (
        <div className="defaultsite">

            <div className="titleimage-container">
                <ImageImport
                    img={process.env.PUBLIC_URL + "/img/Startseite_Titelbild.jpeg"}
                    alt="Startseite"
                    className="titleimage"
                />
            </div>
            
            <div className="startseite-box">
                <h3>Aktuelle Informationen</h3>
                <p>
                Unser Online-Shop hat rund um die Uhr für Sie geöffnet!   
                </p>
                <Link to="/home#oeffnungszeiten">
                    <Button>Hier geht es zu unseren Öffnungszeiten</Button>
                </Link>
            </div>

        </div>
    );
}

export default Start;