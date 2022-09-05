import React, { useState } from "react";
import {
  Button,
  Container, Modal, Nav, Navbar
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AddGrocery from "../AddGrocery/AddGrocery";
import Micro from "../Images/Micro.png";
import testt from "../testt.png";
import "./Admin.css";

function Admin() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  
  const handlelogout=()=>
  {
    sessionStorage.clear();
    navigate("/login")
  }
  



  return (
    <>
      <Navbar
        bg="red"
        expand="lg"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={Micro} alt="logo"className="logoMicro" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <p className="hero">Welcome to ADMIN Dashboard</p>
            <Nav.Link  onClick={handlelogout} className="logout">
              Logout
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={() => setShow(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {/* Custom Modal Styling */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddGrocery />
        </Modal.Body>
      </Modal>
      <div>
        <button
          className="Addgrobut"
          style={{ backgroundImage: `url(${testt})` }}
          onClick={() => setShow(!show)}
        >
          AddGrocery
        </button>
         {/* <button
          className="Addgro"
          style={{ backgroundImage: `url(${testt})` }}
          // onClick={() => setInvest(!invest)}
        >
         Inventory
        </button> */}

        <Button as= {Link} to="/Inventory" variant="" className="Addgro" style={{ backgroundImage: `url(${testt})` }} >
              Inventory
            </Button>
        <img src={testt} alt="logo" className="imgrr" />
      </div>
    </>
  );
}

export default Admin;
