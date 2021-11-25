import React from "react";
import "../index.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import img from "../images/logo.png";
const Home = () => {
  return (
    <div>
      <>
        <Navbar expand="lg" fixed="top" bg="light">
          <Container className="Navbar">
            <Navbar.Brand href="#home">
              <img src={img} alt="brand" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="nav-items" id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav className="ms-auto nav-items">
                  <Nav.Link className="nav-links" href="#home">
                    Home
                  </Nav.Link>
                  <Nav.Link className="nav-links" href="#products">
                    products
                  </Nav.Link>
                  <Nav.Link className="nav-links" href="#special">
                    special
                  </Nav.Link>
                  <Nav.Link className="nav-links" href="#contact">
                    contact
                  </Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Home;
