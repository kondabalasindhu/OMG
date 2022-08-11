import React, { useState } from "react";
import { Container, Navbar, NavDropdown, Nav, Form, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Admin.css';
import testt from "../testt.png"; 
import AddGrocery from "../AddGrocery/AddGrocery";
import Micro from "../Images/Micro.png"



function Admin() {
    const [show, setShow] = useState(false);
    return (
        <>
        <Navbar bg="red" expand="lg" style={{display:"flex",justifyContent: "space-between"}}
 >
            <Container fluid >
                <Navbar.Brand href="/">
               <img  src={Micro}
                     className="logoMicro"/>
                    
                     
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {/* <Nav
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
                    </Nav> */}
                    <p className="hero" >Welcome to ADMIN Dashboard</p>
                      <Nav.Link as={Link} to="/logout" className="logout">Logout</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
          
       
        <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
       
       
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {/* Custom Modal Styling */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddGrocery />
        </Modal.Body>
      </Modal>
      <div >
      <button className="Addgrobut" style={{ backgroundImage:`url(${testt})` }}   onClick={() => setShow(!show)}>AddGrocery</button>
        <img  src={testt} className="imgrr"/>
        </div>

</>
    )
}

export default Admin;                                                                                                                                                                                                                                                                                                                                                                       