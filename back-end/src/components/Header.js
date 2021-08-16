import React, {Component} from 'react';
import {  Navbar, Nav, Container} from 'react-bootstrap';

class Header extends Component {
    render() {
        return(
          <Navbar collapseOnSelect expand="lg" bg="light" className="navbar-style" fixed="top">
          <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/signin">Products</Nav.Link>
              <Nav.Link href="/signin">Service</Nav.Link>
              <Nav.Link href="/signin">Team</Nav.Link>
              <Nav.Link href="/signin">Contact Us</Nav.Link>
              
            </Nav>
            <Nav>
            <Nav.Link href="/signin">Sign in</Nav.Link>
              <Nav.Link href="/signup">Sign up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        
        )
    }
}
export default Header