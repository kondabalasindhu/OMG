import React, { useState } from "react";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyAccount.css";
import Micro from "../Images/Micro.png";
import Vector from "../Images/Vector.png";
import basket from "../Images/basket .png";

const MyAccount = () => {
  const [mypr, setMypr] = useState(false);
  const [editPro, setEditPro] = useState(false);
  const [delAdd, setDelAdd] = useState(false);
  const [mycard, setMycard] = useState(false);
  const [MyOrder, setMyorder] = useState(false);
  const [help, setHelp] = useState(false);

  return (
    <>
      <Navbar
        bg=""
        className="cont"
        expand="lg"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Container fluid className="cont">
          <Navbar.Brand href="/">
            <img src={Micro} className="micro" OMG />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScrolls">
            <Nav
              className="me-auto my-4 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder=""
                  className="me-4 ss"
                  aria-label="Search"
                />
                {/* <Button variant="outline-success">Search</Button> */}
              </Form>
              <img src={Vector} className="reds" />
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              {/* <img src={basket} className="icon" /> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <button
          className="btn btn-success rr me-md-2 "
          shape="rounded-0"
          type="button"
        >
          Categories
        </button>
        <button
          className="btn btn-success rr me-md-2 "
          shape="rounded-0"
          type="button"
        >
          About Us
        </button>
        <button
          className="btn btn-success rr me-md-2 "
          shape="rounded-0"
          type="button"
        >
          Contact us
        </button>
      </div>
      <div className="myAccountBody">
        <div className="sidebar">
          <p className="MyAccount">MyAccount</p>
          <span
            className="personal"
            onClick={(e) => {
              e.preventDefault();
              setMypr(!mypr);
            }}
          >
            Personal details
          </span>
          <br></br>
          <span
            className="personal"
            onClick={(e) => {
              e.preventDefault();
              setEditPro(!editPro);
            }}
          >
            Edit profile
          </span>
          <br></br>
          <span
            className="personal"
            onClick={(e) => {
              e.preventDefault();
              setDelAdd(!delAdd);
            }}
          >
            Delivery Address
          </span>
          <br></br>
          <span
            className="personal"
            onClick={(e) => {
              e.preventDefault();
              setMycard(!mycard);
            }}
          >
            My Cart
          </span>
          <br></br>
          <span
            className="personal"
            onClick={(e) => {
              e.preventDefault();
              setMyorder(!MyOrder);
            }}
          >
            My Order
          </span>
          <br></br>
          <span
            className="personal"
            onClick={(e) => {
              e.preventDefault();
              setMyorder(!MyOrder);
            }}
          >
            Help
          </span>

          <ul className="ern"></ul>
        </div>
        <hr className="divider" />
        <div className="maincontent">
          {mypr && (
            <>
              <p className="details">PersonalDetails</p>
              <p className="first">first Name last name</p>
              <p className="online">onlinemarketforgrocery@gmail.com</p>
              <p className="number"> 8688286557</p>
            </>
          )}
          {editPro && (
            <>
              <div>PersonalDetails</div>
              <input type="text" id="lname" name="lname"></input>
              <br></br>
              <input type="text" id="lname" name="lname"></input>
              <br></br>
              <input type="text" id="lname" name="lname"></input>
            </>
          )}
          {delAdd && (
            <>
              <div>Default address</div>
              <p className="raj">
                Rajesh Veeranki Room no 3, opp st Joseph school gate 1, shiva
                sree Deluxe BOYS Hostel, st Joseph school gate 1, Street Number
                8, Ravindra Nagar Colony, Sai Chitra Nagar, Habsiguda,
                Hyderabad, Telangana 500007, Hyderabad - 500007 ph: 6301351297
              </p>
            </>
          )}
          {mycard && (
            <>
              <div>
                Your Cart having ( 04 items)
                <p>Order Summary</p>
                <div className="card">
                  <p>ITEM DESCRIPTION</p>
                  <p className="UNIT"></p>
                  <p className="reddy">
                    <p className="reddy2"></p>
                  </p>
                </div>
              </div>
            </>
          )}
          {MyOrder && (
            <>
              <div>hellorder</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MyAccount;
