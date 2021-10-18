import React from 'react';
import logo from '../../../img/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
  const {user, logOut} = useAuth();
    return (
                // use  link for route component 
               <div>
                   <Navbar collapseOnSelect expand="lg" className="navbar-bg" variant="dark" sticky="top">
  <Container>
  <Navbar.Brand as={NavLink} to="/home"><img src={logo} width='125px' alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link}  to="/home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      <Nav.Link as={Link} to="/departments">Departments</Nav.Link>
    </Nav>
    <Navbar/>
    <Navbar.Collapse className="justify-content-end">
       { user?.email?
         <Button onClick={logOut} variant="light">LogOut</Button>:
       <Nav.Link as={Link} to="/login" className="nav-style2 me-2 fs-5 fw-bold">Login</Nav.Link> }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar.Collapse>
  </Container>
</Navbar>
               </div>
    );
};

export default Header;