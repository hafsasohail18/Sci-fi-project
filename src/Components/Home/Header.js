import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import '../Home/Header.css';
import ModeButton from './ModeButton';



function Header() {
  return (
    <div className="transparent-container">
      <Navbar sticky="top" expand="lg" className="custom-navbar" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand className='main-title' href="#">SCIFI-TIK</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 ms-auto" // Add ms-auto class to move Nav to the right
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/"><b>HOME</b></Nav.Link>
              <Nav.Link href="/movies"><b>MOVIES</b></Nav.Link>
              <Nav.Link href="/series"><b>SERIES</b></Nav.Link>
              {/* <NavDropdown title="WATCH" id="navbarScrollingDropdown" style={{ fontWeight: 'bold' }}>
                <NavDropdown.Item href="/movies">MOVIES</NavDropdown.Item>
                <NavDropdown.Item href="/series">SERIES</NavDropdown.Item>
              </NavDropdown>  */}
              <Nav.Link href="/news"><b>NEWS/UPDATES</b></Nav.Link>
              <Nav.Link href="/quiz"><b>QUIZ</b></Nav.Link>
              <Nav.Link href="/community"><b>COMMUNITY FORUM</b></Nav.Link>
             
            
            </Nav>
            {/*  <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
          <ModeButton />
        </Container>
        
      </Navbar>
    </div>
  );
}

export default Header;

 




