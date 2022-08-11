import React from 'react'
import { Container, Navbar, NavDropdown, Nav, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './NavBar.css';
import LOGO2 from "./LOGO2.PNG"; 

const NavBar = () => {
    return (
        <Navbar bg="green" expand="lg" style={{display:"flex",justifyContent: "space-between"}}
        
        
        >
            <Container fluid >
                <Navbar.Brand href="/">
               <img  src={LOGO2}
                    OMG />   
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-4 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        
                    >
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-4"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar