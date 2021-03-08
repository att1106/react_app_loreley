import React from "react";
import { Container } from 'react-bootstrap';
// Importing the Bootstrap CSS 
import "bootstrap/dist/css/bootstrap.min.css";
import "./app-styles.css"

// Importing React Router
import { Route, Switch } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
//Start
import Start from "./start/Start";
//Informationen
import Aktuelles from "./akutelles/Aktuelles";
// Weingut
import Weingut_main from "./weingut/Weingut_main";
// Weingut
import Weine from "./weine/Weine";
//Impressum, Datenschutz, abgs
import Impressum from "./impressum/Impressum";
import Datenschutz from "./datenschutz/Datenschutz";
import AgarumweltKlimaMassnahmen from "./agarumweltKlimaMassnahmen/AgarumweltKlimaMassnahmen";
function App() {

  return (
    

    <div>
      
        <Header />
     
        <Switch>

          <Route exact path="/" component={Start} />
          <Route exact path="/home" component={Aktuelles} />
          <Route exact path="/weingut" exact component={Weingut_main} />
          <Route exact path="/weine" component={Weine} />
          <Route exact path="/impressum" exact component={Impressum} />
          <Route exact path="/datenschutz" exact component={Datenschutz} />
          <Route exact path="/agrarumwelt-und-klimamassnahmen" exact component={AgarumweltKlimaMassnahmen} />


        </Switch>
    
      <Footer />


    </div>
  );
}

export default App;
