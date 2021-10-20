import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faPhoneVolume, faSearch } from '@fortawesome/free-solid-svg-icons'
import {
    Link
  } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="headerStyle" variant="dark">
                <Container>
                    <Navbar.Brand  as={Link} to="/home"><FontAwesomeIcon className="me-2 h-25" icon={faCar} />Driver</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link  as={Link} to="/aboutUs">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <NavDropdown title="Services" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/services">Services</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/services">Another action</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/services">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/services">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link to="/search">
                                <div className="search">
                                    <input type="text" />
                                    <FontAwesomeIcon className="icon" icon={faSearch} />
                                </div>

                            </Nav.Link>
                            <Nav.Link eventKey={2} to="/number">
                                <FontAwesomeIcon className="" icon={faPhoneVolume} /> +8801942565009
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;