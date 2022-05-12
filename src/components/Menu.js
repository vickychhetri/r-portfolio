import React from 'react';
import logo from '../images/logo.webp';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import './Menu.css';
const Menu= (props)=> {
    return (
        <div >
            <Navbar className="MenuBarCustomcss" collapseOnSelect expand="lg"   variant="light">
                   
                    <Container>
                   
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Company Brand"/>
                    </Navbar.Brand>
                   
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                   
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                <Nav.Link href="#features">About</Nav.Link>
                                <Nav.Link href="#pricing">Portfolio</Nav.Link>
                                <NavDropdown title="Shop" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Domain</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Hosting</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">SSL</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Tech Support</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#features">Blog</Nav.Link>
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