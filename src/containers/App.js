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


function App() {
  return (
    <div>
      <Container className="container-header">
        <Header />
      </Container>

    


        <Switch>

          <Route exact path="/" component={Start} />
          <Route exact path="/home" component={Aktuelles} />
          <Route exact path="/weingut" exact component={Weingut_main} />
          <Route exact path="/weine" exact component={Weine} />


        </Switch>
    
      <Footer />

    </div>
  );
}

export default App;
