import React from "react";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./UserDashboard.css";
import Micro from "../Images/Micro.png";
import Vector from "../Images/Vector.png";
import basket from "../Images/basket .png";
import { NavigationBar } from "../NavigationBar";
import Carsouel from "../Carsouel";
import Cards from "../Cards";
import Footer from "../Footer/Footer";

const UserDashboard = () => {
  return (
    <>
      <Navbar
        bg="green"
        className="cont"
        expand="lg"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Container fluid className="cont">
          <Navbar.Brand href="/">
            <img src={Micro} className="micro" OMG />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
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
              <img src={basket} className="icon" />
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
          className="btn btn-success rr     me-md-2 "
          shape="rounded-0"
          type="button"
        >
          Contact us
        </button>
      </div>
      <Carsouel />
      {/* <Cards /> */}
      <div className="row mb-4 card-items ">
        <div className="col-sm-3 text-center">
          <div className="card ">
            <div className="sticker">New</div>
            <img
              src="https://images.newscientist.com/wp-content/uploads/2021/07/19142457/20-july_tomato-nervous-system.jpg"
              alt=""
            />
          </div>
          <p>Text placeholder</p>
        </div>

        <div className="col-sm-3 text-center">
          <div className="card">
            <div className="sticker">Old</div>
            <img
              src="https://images.newscientist.com/wp-content/uploads/2021/07/19142457/20-july_tomato-nervous-system.jpg"
              alt=""
            />
          </div>
          <p>Text placeholder</p>
        </div>

        <div className="col-sm-3 text-center">
          <div className="card">
            <div className="sticker">Old</div>
            <img
              src="https://images.newscientist.com/wp-content/uploads/2021/07/19142457/20-july_tomato-nervous-system.jpg"
              alt=""
            />
          </div>
          <p>Text placeholder</p>
        </div>

        <div className="col-sm-3 text-center">
          <div className="card">
            <div className="sticker">Old</div>
            <img
              src="https://images.newscientist.com/wp-content/uploads/2021/07/19142457/20-july_tomato-nervous-system.jpg"
              alt=""
            />
          </div>
          <p>Text placeholder</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-8 col-xs-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md- 3 col-sm-4 col-xs-12">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        {/* <div class="col-md- 3 col-sm-12 col-xs-12">
    <div class="card ">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div> */}
      </div>

      <Footer />
    </>
  );
};

export default UserDashboard;
