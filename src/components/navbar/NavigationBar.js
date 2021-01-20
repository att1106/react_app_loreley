import React from "react";
// import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import "./navbar.css"

const NavigationBar = () => {
  return (
    <Container>
      <Navbar fixed="top" bg="white" expand="lg">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="headnavbar justify-content-center" style={{ flex: 1 }}>

            <NavDropdown className="navbarlink" title="Information" id="basic-nav-dropdown">
              <Link to="/home" className="nav-link navbarlink">Akutelles</Link>
              <Link to="/home#termine" className="nav-link navbarlink">Termine</Link>
              <Link to="/home#oeffungszeiten" className="nav-link navbarlink">Öffnungszeiten</Link>
            </NavDropdown>

            <NavDropdown className="navbarlink" title="Weingut" id="basic-nav-dropdown">
              <Link to="/weingut" className="nav-link navbarlink">Weingut</Link>
              <Link to="/weingut/geschichte" className="nav-link navbarlink">Geschichte</Link>
              <Link to="/weingut/weinberge" className="nav-link navbarlink">Weinberge</Link>
              <Link to="/weingut/keller" className="nav-link navbarlink">Keller</Link>
              <Link to="/weingut/vinothek" className="nav-link navbarlink">Vinothek</Link>
            </NavDropdown>

            <NavDropdown className="navbarlink" title="Weine" id="basic-nav-dropdown">
              <Link to="/weine" className="nav-link navbarlink">Qualitätspyramide</Link>
            </NavDropdown>

            <Nav.Link className="navbarlink" target="_blank" rel="noopener noreferrer" href="https://loreley-kellerei.winitas-shop.de/">Shop</Nav.Link>

            <NavDropdown className="navbarlink" title="Kontakt" id="basic-nav-dropdown">
              <Link to="/kontakt" className="nav-link navbarlink">Kontakt</Link>
              <Link to="/impressum" className="nav-link navbarlink">Impressum</Link>
              <Link to="/datenschutz" className="nav-link navbarlink">Datenschutz</Link>
            </NavDropdown>

          </Nav>



        </Navbar.Collapse>
      </Navbar>
    </Container>


  );
}
export default NavigationBar;