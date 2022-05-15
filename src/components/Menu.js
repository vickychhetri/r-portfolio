import React from 'react';
import logo from '../images/logo.webp';
import { Navbar,Container,Nav } from 'react-bootstrap';
import TopBar from "../components/Topbar";
 
import './Menu.css';

const Menu= (props)=> {
    return (
        <div >
             <TopBar title="Join in our Coder team in Discord."/>
            <Navbar className="MenuBarCustomcss" collapseOnSelect expand="lg"   variant="light">
                   
                    <Container>
                   
                    <Navbar.Brand href="#home">
                      <a href="/">   <img src={logo} alt="Company Brand"/></a>
                    </Navbar.Brand>
                   
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                   
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                                {/* <NavDropdown title="Shop" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Domain</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Hosting</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">SSL</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Tech Support</NavDropdown.Item>
                                </NavDropdown> */}
                                <Nav.Link href="/blog">Blog</Nav.Link>
                                <Nav.Link href="#pricing">Contact</Nav.Link>
                                <Nav.Link href="#pricing">Login</Nav.Link>
                                </Nav>
                                <Nav>
                                <Nav.Link href="#deets" className="btn btn-danger text-white"> Talk Now</Nav.Link>
                                
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
            </Navbar>
        
        </div>
    );
}

export default Menu;