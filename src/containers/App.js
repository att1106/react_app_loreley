import React from "react";

// Importing the Bootstrap CSS 
import "bootstrap/dist/css/bootstrap.min.css";
import "./app-styles.css"

// Importing React Router
import {HashRouter, Route, Switch} from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
//Informationen
import Aktuelles from "./akutelles/Aktuelles";
// Weingut
import Weingut_main from "./weingut/Weingut_main";
import Start from "./start/Start";

function App() {
  return (
    <div>
   
      <Header />
      <Switch>
      
      <Route exact path="/" component={Start} /> 
      <Route path="/home" component={Aktuelles} />
      <Route path="/weingut" exact component={Weingut_main} />
      

      </Switch>
      <Footer />

    </div>
  );
}

export default App;
