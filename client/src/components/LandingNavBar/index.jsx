import React from 'react';

// Bootstrap:
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

// CSS:
import './assets/css/landingnavbar.css';

const LandingNavBar = (props) => {

    return(
        <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 bg-mainpurple">
          <Container fluid>
            <Navbar.Brand className='nav-title-text'>UDateMe</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-bluepurple"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}
                className='nav-title-text'
                >
                  Welcome!
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 nav-link-text">
                  <Nav.Link onClick={props.homeClick}>Home</Nav.Link>
                  <Nav.Link onClick={props.loginClick}>Login</Nav.Link>
                  <Nav.Link onClick={props.signUpClick}>Sign Up</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    )
};

export default LandingNavBar;