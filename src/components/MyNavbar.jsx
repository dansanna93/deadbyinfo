import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/logo.png"
              width="43"
              height="30"
              className="d-inline-block align-top"
              alt="DBD logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/">Dead by Info</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/link">Link</Nav.Link>
              <NavDropdown title="Browse" id="basic-nav-dropdown">
                <NavDropdown.Item href="/killers">Killers</NavDropdown.Item>
                <NavDropdown.Item href="/survivors">Survivors</NavDropdown.Item>
                <NavDropdown.Item href="/perks">Perks</NavDropdown.Item>
                <NavDropdown.Item href="/maps">Maps</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
