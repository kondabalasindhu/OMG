import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Cards from './Cards';

// import test6 from "./test6.jpg";

import Carsouel from './Carsouel';
import NavBar from './NavBar';


const Styles = styled.div`
  .navbar { background-color: #64dd1f; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;   
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
 
.omg{
  font-size: 2.4em !important;
    color: #9FFFCB;
    font-family: 'Cormorant SC', serif;

}
.btn-success {
  color: green;
  background-color: green;
  border-color: #9FFFCB;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
}
.carousel-indicators {
  padding-bottom: 142px !important;
    position: inherit !important;
    
}


`;

// export const NavigationBar = () => (
//   <Styles>
//     {/* <Navbar expand="lg">
//       <div className="omg">
//         <Navbar.Brand href="/">OMG</Navbar.Brand></div>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Form className="form-center">
//         <FormControl type="text" placeholder="Search" className="" />
//       </Form>
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Item><Nav.Link to="/login">login</Nav.Link></Nav.Item>

//           {/* <button type="button" class="btn btn-outline-dark me-2" Link className="NavLink" to="/login">Login</button>
//           <button type="button" class="btn btn-warning">Cart</button>
//           <Link className=" navLink" to="/login">Login</Link> */}
//           {/* <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item> */}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar> */}

//     <button class="btn btn-success rr me-md-2 " shape="rounded-0" type="button">Categories</button>
//     <button class="btn btn-success me-md-2 " shape="rounded-0" type="button">About Us</button>
//     <button class="btn btn-success me-md-2 " shape="rounded-0" type="button">Contact us</button>


//     {/* );
//   */}

//     {/* function BasicExample() { */}



//     <CardGroup>
//       <Card>
//         <Card.Img variant="top" src={test5} />
//         <Card.Body>
//           <Card.Title>fRUITS</Card.Title>
//           <Card.Text>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This content is a little bit longer.
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           {/* <small className="text-muted">Last updated 3 mins ago</small> */}

//         </Card.Footer>
//       </Card>
//       <Card>
//         <Card.Img variant="top" src={test2} />
//         <Card.Body>
//           <Card.Title>vegtables</Card.Title>
//           <Card.Text>
//             This card has supporting text below as a natural lead-in to
//             additional content.{' '}
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           {/* <small className="text-muted">Last updated 3 mins ago</small> */}
//         </Card.Footer>
//       </Card>
//       <Card>
//         <Card.Img variant="top" src={test2} />
//         <Card.Body>
//           <Card.Title>Fruits</Card.Title>
//           <Card.Text>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This card has even longer content than the
//             first to show that equal height action.
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           {/* <small className="text-muted">Last updated 3 mins ago</small> */}
//         </Card.Footer>
//       </Card>
//     </CardGroup>


//     export default GroupExample;



//     {/* export default BasicExample;

// export default IndividualIntervalsExample; */}
//   </>
// )


export const NavigationBar =
  () => {
    return (
      <>
        <NavBar />
        <div>
          <button class="btn btn-success rr me-md-2 " shape="rounded-0" type="button">Categories</button>
          <button class="btn btn-success me-md-2 " shape="rounded-0" type="button">About Us</button>
          <button class="btn btn-success me-md-2 " shape="rounded-0" type="button">Contact us</button>
          </div>
        <Carsouel />
        <Cards />
      </>
    )

  }