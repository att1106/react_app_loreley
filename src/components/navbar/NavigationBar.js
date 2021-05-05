import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import ImageImport from "../structure/ImageImport";


import "./navbar.css"

const NavigationBar = () => {

  const contentRef = useRef();

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen11, setMenuOpen11] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [menuOpen22, setMenuOpen22] = useState(false);
  const [menuOpen3, setMenuOpen3] = useState(false);
  const [menuOpen33, setMenuOpen33] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      // console.log(width);
    }
  }, [width]);



  const [navbarCollapse, setNavbarCollapse] = useState(false);

  const handleClick = e => {
    if (contentRef.current.contains(e.target)) {
      // inside click
      return
    
    }
    // outside click
    setNavbarCollapse(false);
    setMenuOpen(false);
    setMenuOpen2(false);
    setMenuOpen3(false);
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, []);


  return (

    <Navbar collapseOnSelect className="navbar-mobile" fixed="top" bg="white" expand="lg">
      {/* toggler */}
      <Navbar.Toggle
        bg="white"
        aria-controls="basic-navbar-nav"
        onClick={() => {
          setNavbarCollapse(n => !n);
        }}
      />

      {/* logo for mobile and tablet screes */}
      <div className="logo-mobile">
        <Nav.Link className="navbarlink navelement logo" href="https://www.loreley-kellerei.de/">
          <ImageImport
            img={process.env.PUBLIC_URL + "/img/Logo_White.jpg"}
            className="nav-logo"
            alt="Logo"
            width={60}
          />
        </Nav.Link>
      </div>

      {/* collapsing elements */}

      <div
        className={navbarCollapse ? "navbar-show dropdown-menu" : "navbar-notshow dropdown-menu"}
        id="basic-navbar-nav"
        ref={contentRef}
      >
        <Nav className="headnavbar justify-content-center">


          {width > 992 ? (
            <NavDropdown
              className="navbarlink navelement" title="Info" id="basic-nav-dropdown"

              onMouseEnter={() => {
                setMenuOpen(true)
              }}
              onMouseLeave={() => {
                setMenuOpen(false)
              }}
              show={menuOpen}
            >
              <Link to="/home#aktuelles" className="nav-link navbarlink"
                onClick={() => {
                  setMenuOpen(false);
                  setNavbarCollapse(false);
                }}> Aktuelles</Link>
              <Link to="/home#termine" className="nav-link navbarlink" onClick={() => {
                setMenuOpen(false);
                setNavbarCollapse(false);
              }}>Termine</Link>
              <Link to="/home#oeffnungszeiten" className="nav-link navbarlink" onClick={() => {
                setMenuOpen(false);
                setNavbarCollapse(false);
              }}>Öffnungszeiten</Link>
            </NavDropdown>
          ) : (
            <NavDropdown
              className="navbarlink navelement" title="Info" id="basic-nav-dropdown"

              onClick={() => {
                setMenuOpen(m1 => !m1)
                setMenuOpen2(false)
                setMenuOpen3(false)
              }}

              show={menuOpen}
            >
              <Link to="/home#aktuelles" className="nav-link navbarlink"
                onClick={() => {
                  setMenuOpen(false);
                  setNavbarCollapse(false);
                }}> Aktuelles</Link>
              <Link to="/home#termine" className="nav-link navbarlink" onClick={() => {
                setMenuOpen(false);
                setNavbarCollapse(false);
              }}>Termine</Link>
              <Link to="/home#oeffnungszeiten" className="nav-link navbarlink" onClick={() => {
                setMenuOpen(false);
                setNavbarCollapse(false);
              }}>Öffnungszeiten</Link>
            </NavDropdown>
          )}

          {/* Info */}

          {/* Weingut */}
          {width > 992 ? (
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
              <Link to="/weingut#allgemein" className="nav-link navbarlink" onClick={() => {
                setMenuOpen2(false);
                setNavbarCollapse(false);
              }} >Weingut</Link>
              <Link to="/weingut#vinothek" className="nav-link navbarlink" onClick={() => {
                setMenuOpen2(false);
                setNavbarCollapse(false);
              }}>Vinothek</Link>
              <Link to="/weingut#geschichte" className="nav-link navbarlink" onClick={() => {
                setMenuOpen2(false);
                setNavbarCollapse(false);
              }}>Geschichte</Link>
              <Link to="/weingut#weinberge" className="nav-link navbarlink" onClick={() => {
                setMenuOpen2(false);
                setNavbarCollapse(false);
              }}>Weinberge</Link>
              <Link to="/weingut#keller" className="nav-link navbarlink" onClick={() => {
                setMenuOpen2(false);
                setNavbarCollapse(false);
              }}>Keller</Link>
            </NavDropdown>
          ) : (
            <NavDropdown
              className="navbarlink navelement"
              title="Weingut"
              id="basic-nav-dropdown"

              onClick={() => {
                setMenuOpen(false)
                setMenuOpen2(m2 => !m2)
                setMenuOpen3(false)
              }}
              show={menuOpen2}
            >
              <Link to="/weingut#allgemein" className="nav-link navbarlink" onClick={() => {
                setMenuOpen2(false);
                setNavbarCollapse(false);
              }} >Weingut</Link>
              <Link to="/weingut#vinothek" className="nav-link navbarlink" onClick={() => {
                setMenuOpen2(false);
                setNavbarCollapse(false);
              }}>Vinothek</Link>
              <Link to="/weingut#geschichte" className="nav-link navbarlink" onClick={() => {
                setMenuOpen2(false);
                setNavbarCollapse(false);
              }}>Geschichte</Link>
              <Link to="/weingut#weinberge" className="nav-link navbarlink" onClick={() => {
                setMenuOpen2(false);
                setNavbarCollapse(false);
              }}>Weinberge</Link>
              <Link to="/weingut#keller" className="nav-link navbarlink" onClick={() => {
                setMenuOpen2(false);
                setNavbarCollapse(false);
              }}>Keller</Link>
            </NavDropdown>
          )}


          <div className="logo-desktop">
            <Nav.Link className="navbarlink navelement logo" href="https://www.loreley-kellerei.de/">
              <ImageImport
                img={process.env.PUBLIC_URL + "/img/Logo_White.jpg"}
                className="nav-logo"
                alt="Logo"
                width={75}
              />
            </Nav.Link></div>


          {/* Weine */}
          {width > 992 ? (
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
            <Link to="/weine#qualitaetspyramide" className="nav-link navbarlink weine"
              onClick={() => {
                setMenuOpen3(false);
                setNavbarCollapse(false);
              }}

            >Qualitätspyramide</Link>
            <Link to="/weine#weinlinie" className="nav-link navbarlink weine" onClick={() => {
              setMenuOpen3(false);
              setNavbarCollapse(false);
            }}>Weinlinie</Link>

          </NavDropdown>
          )
          :(
            <NavDropdown
            className="navbarlink navelement weine" title="Weine" id="basic-nav-dropdown"

            onClick={() => {
              setMenuOpen(false)
              setMenuOpen2(false)
              setMenuOpen3(m3 => !m3)
            }}
            show={menuOpen3}
          >
            <Link to="/weine#qualitaetspyramide" className="nav-link navbarlink weine"
              onClick={() => {
                setMenuOpen3(false);
                setNavbarCollapse(false);
              }
              }

            >Qualitätspyramide</Link>
            <Link to="/weine#weinlinie" className="nav-link navbarlink weine" onClick={() => {
              setMenuOpen3(false);
              setNavbarCollapse(false);
            }}>Weinlinie</Link>

          </NavDropdown>
          )}
          

          {/* Shop */}
          <Nav.Link className="navbarlink navelement shop" target="_blank" rel="noopener noreferrer" href="https://loreley-kellerei.winitas-shop.de/">Shop</Nav.Link>
        </Nav>
      </div>

    </Navbar>



  );
}
export default NavigationBar;