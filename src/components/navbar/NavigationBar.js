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

    <Navbar fixed="top" bg="white" expand="lg">
      {/* toggler */}
      <Navbar.Toggle 
        className="navbar-toggler" 
        bg="white" 
        aria-controls="basic-navbar-nav"
        />

      {/* logo for mobile and tablet screes */}
      <div className="logo-mobile">
        <Nav.Link className="navbarlink navelement logo" href={process.env.PUBLIC_URL}>
          <ImageImport
            img={process.env.PUBLIC_URL + "/img/Logo_White.jpg"}
            className="nav-logo"
            alt="Logo"
            width={60}
          />
        </Nav.Link>
      </div>

      {/* collapsing elements */}
      <Navbar.Collapse>
        <Nav className="headnavbar justify-content-center">

          {/* Info */}
          <NavDropdown
            className="navbarlink navelement" title="Info" id="basic-nav-dropdown"
            onMouseEnter={() => {
              setMenuOpen(true);
            }}
            onMouseLeave={() => {
              setMenuOpen(false);
            }}
            show={menuOpen}
            onClick={()=> setMenuOpen(m => !m)}
          >
            <Link to="/home#aktuelles" className="nav-link navbarlink" 
            onClick={()=> {
              setMenuOpen(false)
            }}> Aktuelles</Link>
            <Link to="/home#termine" className="nav-link navbarlink" onClick={()=> setMenuOpen(false)}>Termine</Link>
            <Link to="/home#oeffnungszeiten" className="nav-link navbarlink" onClick={()=> setMenuOpen(false)}>Öffnungszeiten</Link>
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
            onClick={()=> setMenuOpen2(m => !m)}
          >
            <Link to="/weingut#allgemein" className="nav-link navbarlink" onClick={()=> setMenuOpen2(false)} >Weingut</Link>
            <Link to="/weingut#vinothek" className="nav-link navbarlink" onClick={()=> setMenuOpen2(false)}>Vinothek</Link>
            <Link to="/weingut#geschichte" className="nav-link navbarlink" onClick={()=> setMenuOpen2(false)}>Geschichte</Link>
            <Link to="/weingut#weinberge" className="nav-link navbarlink" onClick={()=> setMenuOpen2(false)}>Weinberge</Link>
            <Link to="/weingut#keller" className="nav-link navbarlink" onClick={()=> setMenuOpen2(false)}>Keller</Link>
          </NavDropdown>

          <div className="logo-desktop">
            <Nav.Link className="navbarlink navelement logo" href={process.env.PUBLIC_URL}>
              <ImageImport
                img={process.env.PUBLIC_URL + "/img/Logo_White.jpg"}
                className="nav-logo"
                alt="Logo"
                width={75}
              />
            </Nav.Link></div>


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
            onClick={()=> setMenuOpen3(false)}
            onClick={()=> setMenuOpen3(m => !m)}
          >
            <Link to="/weine" className="nav-link navbarlink weine" onClick={()=> setMenuOpen3(false)}>Qualitätspyramide</Link>
            <Link to="/weine#weinlinie" className="nav-link navbarlink weine" onClick={()=> setMenuOpen3(false)}>Weinlinie</Link>
          </NavDropdown>

          {/* Shop */}
          <Nav.Link className="navbarlink navelement shop" target="_blank" rel="noopener noreferrer" href="https://loreley-kellerei.winitas-shop.de/">Shop</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>



  );
}
export default NavigationBar;