import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import ImageImport from "../structure/ImageImport";


import "./navbar.css"

const NavigationBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [menuOpen3, setMenuOpen3] = useState(false);


  return (

    <Navbar fixed="top" bg="white" expand="lg">

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="headnavbar justify-content-center"
          style={{ flex: 1 }}
        >

          <NavDropdown
            className="navbarlink navelement" title="Home" id="basic-nav-dropdown"
            onMouseEnter={() => {
              setMenuOpen(true);
            }}
            onMouseLeave={() => {
              setMenuOpen(false);
            }}
            show={menuOpen}
           >
            <Link to="/home#aktuelles" className="nav-link navbarlink">Akutelles</Link>
            <Link to="/home#termine" className="nav-link navbarlink">Termine</Link>
            <Link to="/home#oeffnungszeiten" className="nav-link navbarlink">Öffnungszeiten</Link>
          </NavDropdown>

          <NavDropdown
            className="navbarlink navelement"
            title="Weingut"
            id="basic-nav-dropdown"
            onMouseEnter={() => {
              setMenuOpen2(true);
            }}
            onMouseLeave={() => {
              setMenuOpen2(false);
            }}
            show={menuOpen2}
            >
            <Link to="/weingut#allgemein" className="nav-link navbarlink">Weingut</Link>
            <Link to="/weingut#geschichte" className="nav-link navbarlink">Geschichte</Link>
            <Link to="/weingut#weinberge" className="nav-link navbarlink">Weinberge</Link>
            <Link to="/weingut#keller" className="nav-link navbarlink">Keller</Link>
            <Link to="/weingut#vinothek" className="nav-link navbarlink">Vinothek</Link>
          </NavDropdown>

          <Nav.Link className="navbarlink navelement" href={process.env.PUBLIC_URL}>
            <ImageImport
              img={process.env.PUBLIC_URL + "/img/Logo_White.jpg"}
              className="nav-logo"
              alt="Logo"
              width={80}
            />
          </Nav.Link>


          <NavDropdown
            className="navbarlink navelement" title="Weine" id="basic-nav-dropdown"
            onMouseEnter={() => {
              setMenuOpen3(true);
            }}
            onMouseLeave={() => {
              setMenuOpen3(false);
            }}
            show={menuOpen3}
            >
            <Link to="/weine" className="nav-link navbarlink weine">Qualitätspyramide</Link>

          </NavDropdown>


          <Nav.Link className="navbarlink navelement" target="_blank" rel="noopener noreferrer" href="https://loreley-kellerei.winitas-shop.de/">Shop</Nav.Link>





          {/* <NavDropdown className="navbarlink" title="Kontakt" id="basic-nav-dropdown">
              <Link to="/kontakt" className="nav-link navbarlink">Kontakt</Link>
              <Link to="/impressum" className="nav-link navbarlink">Impressum</Link>
              <Link to="/datenschutz" className="nav-link navbarlink">Datenschutz</Link>
            </NavDropdown> */}

        </Nav>



      </Navbar.Collapse>
    </Navbar>



  );
}
export default NavigationBar;