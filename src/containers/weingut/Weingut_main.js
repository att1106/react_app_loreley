import React from "react";

import Geschichte from "./Geschichte";
import Weingut from "./Weingut"
import Weinberge from "./Weinberge";
import Keller from "./Keller";
import Vinothek from "./Vinothek";

import "./weingut.css"



const Weingut_main = () => {
    return (
        <div>
            <Weingut />
            <Vinothek />
            <Geschichte />
            <Weinberge />
            <Keller />
        </div>
    );
}

export default Weingut_main;