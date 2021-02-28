import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import ImageImport from "../structure/ImageImport";


import "./navbar.css"

const NavigationBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [menuOpen3, setMenuOpen3] = useState(false);

  return (

    <Navbar className="headnavbar" fixed="top" bg="white" expand="lg">

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

   

      <Nav className="justify-content-center">
   


          <Navbar.Collapse>
            {/* Info */}
            <NavDropdown
              className="navbarlink navelement info" title="Info" id="basic-nav-dropdown"
              onMouseEnter={() => {
                setMenuOpen(true);
              }}
              onMouseLeave={() => {
                setMenuOpen(false);
              }}
              show={menuOpen}
            >

              <Link to="/home#aktuelles" className="nav-link navbarlink">Aktuelles</Link>
              <Link to="/home#termine" className="nav-link navbarlink">Termine</Link>
              <Link to="/home#oeffnungszeiten" className="nav-link navbarlink">Öffnungszeiten</Link>

            </NavDropdown>

            {/* Weingut */}
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
              <Link to="/weingut#vinothek" className="nav-link navbarlink">Vinothek</Link>
              <Link to="/weingut#geschichte" className="nav-link navbarlink">Geschichte</Link>
              <Link to="/weingut#weinberge" className="nav-link navbarlink">Weinberge</Link>
              <Link to="/weingut#keller" className="nav-link navbarlink">Keller</Link>
            </NavDropdown>
          </Navbar.Collapse>


        <div className="logo-desktop">
        <Nav.Link className="navbarlink navelement logo" href={process.env.PUBLIC_URL}>
          <ImageImport
            img={process.env.PUBLIC_URL + "/img/Logo_White.jpg"}
            className="nav-logo"
            alt="Logo"
            width={75}
          />
        </Nav.Link></div>


    
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Weine */}
          <NavDropdown
            className="navbarlink navelement weine" title="Weine" id="basic-nav-dropdown"
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

          {/* Shop */}
          <Nav.Link className="navbarlink navelement shop" target="_blank" rel="noopener noreferrer" href="https://loreley-kellerei.winitas-shop.de/">Shop</Nav.Link>
        </Navbar.Collapse>
  
        
        

      </Nav>

      <div className="logo-mobile">
        <Nav.Link className="navbarlink navelement logo" href={process.env.PUBLIC_URL}>
          <ImageImport
            img={process.env.PUBLIC_URL + "/img/Logo_White.jpg"}
            className="nav-logo"
            alt="Logo"
            width={75}
          />
        </Nav.Link></div>


    </Navbar>



  );
}
export default NavigationBar;