import React from 'react';
// import './App.css'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { signout } from '../../actions';

const Header = (props) => {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  } 

  const loggedInLinks = () => {
    return (
      <Nav>
        <li>
          <span className="nav-link" onClick={logout}>Sign out</span>
        </li>


      </Nav>
    )
  }

  const nonLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="signin" className="nav-link" >Signin</NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="nav-link" >Signup</NavLink>
        </li>


      </Nav>
    )
  }
  return (<>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ zIndex: "1" }}>
      <Container>
        
        <Link to="/" className="navbar-brand"> Admin Dashboard </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>

          {auth.authenticate ? loggedInLinks() : nonLoggedInLinks()}
        </Navbar.Collapse>
      </Container>

    </Navbar>

  </>
  )
}

export default Header