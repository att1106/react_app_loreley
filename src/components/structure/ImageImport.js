import React from "react";


const ImageImport = (props) => {
    return (
        <img 
            className={props.className} 
            src={props.img} 
            alt={props.alt}
            width = {props.width}
        >
        </img>

    );
}

export default ImageImport;