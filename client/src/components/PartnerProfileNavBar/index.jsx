import React from "react";

// Bootstrap:
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const PartnerProfileNavBar = (props) => {

    return (<>
        {[false].map((expand) => (
            <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                <Container fluid>
                    <Navbar.Brand>UDateMe</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Welcome!
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/dashboard">Home</Nav.Link>
                                <Nav.Link onClick={props.quizClick}>Quiz</Nav.Link>
                                <Nav.Link onClick={props.logoutClick}>Logout</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        ))}
    </>)
}

export default PartnerProfileNavBar;