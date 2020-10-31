import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './Menu.css'

const Menu = () => {
  return (
    
    <section style={{ backgroundColor: '#1f2235' }}>
      
      <div className="container">
        <div className="row">
          
        <Navbar bg="red" expand="lg">
      <Navbar.Brand style={{ textDecoration:" none",color: "#C82333 !important"}} className="logo"><Link to="/">Jahirul Islam</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink className="mr-2 menu-item" to="/home">
            Home
          </NavLink>
          <NavLink className="mr-2 menu-item" to="/about">
            About
          </NavLink>
          <NavLink className="mr-2 menu-item" to="/porfolio">
            Portfolio
          </NavLink>
          <NavLink className="mr-2 menu-item" to="/blog">
            Blog
          </NavLink>
          <NavLink className="mr-2 menu-item" to="/contact">
            Contact
          </NavLink>
          <NavLink className="mr-2 menu-item" to="/">
            Resume
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
        </div>
      </div>
    
    
    </section>
      
      
     
  );
};

export default Menu;
