import React from "react";
import ImageImport from "../../components/structure/ImageImport";
import Button from 'react-bootstrap/Button';
import { HashLink as Link } from 'react-router-hash-link';

import "./start.css";



const Start = () => {
    const image = <ImageImport
        img={process.env.PUBLIC_URL + "/img/Startseite_Titelbild.jpeg"}
        alt="Startseite"
        className="titleimage"
    />


    return (
        <div className="defaultsite">

            <div className="titleimage-container" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/Startseite_Titelbild.jpeg'})`
            }}>

            </div>

            <div className="startseite-box">
                <h3>Aktuelle Informationen</h3>
                <p>
                    Unser Online-Shop hat rund um die Uhr für Sie geöffnet!
                </p>
                <Link to="/home#aktuelles">
                    <Button>Hier finden Sie unsere aktuellen Infos</Button>
                </Link>
            </div>

        </div>
    );
}

export default Start;