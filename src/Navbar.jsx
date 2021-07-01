import React from "react";
import LogoBm from "./LogoBm.png";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function NavbarB() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="NavBar align-top navbar-dark"
      >
        <img src={LogoBm} className=" nav-logo" height="70" alt="logo" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              to="/"
              eventKey="1"
              className="inactiveLink nav-link"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/About"
              eventKey="2"
              className="inactiveLink nav-link"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Products"
              eventKey="1"
              className="inactiveLink nav-link"
            >
              Our Products
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link className="Ctinfo">
              Call Us <FontAwesomeIcon icon={faPhoneSquareAlt} /> @
              +91-9654330401
            </Nav.Link>
            <Nav.Link className="Ctinfo">
              Mail Us <FontAwesomeIcon icon={faEnvelopeSquare} /> :
              contact@bikanermasaala.com
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default NavbarB;
