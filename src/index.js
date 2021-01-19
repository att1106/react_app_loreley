import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";

// Importing the Bootstrap CSS 
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById("root"));

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.
