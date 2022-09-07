import React from "react";
// import { Button, ButtonGroup } from 'react-bootstrap'
import "./Inventory.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useState } from "react";



// import Sonnet from '../../components/Sonnet';
import Addproductinventory from "../Addproductinventory/Addproductinventory";
import Listofinventory from "../Listofinventory/Listofinventory";
import ApiServices from "../Services/ApiServices";





function Inventory() {
  
  return (
    <Tab.Container id="tabs-example" defaultActiveKey="first">
      {/* <Row>
        <Col sm={6}> */}
          <Nav variant="pills" className="flex-row" >
            <Nav.Item>
              <Nav.Link eventKey="first">ADD PRODUCT TO INVENTORY</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">LIST OF INVENTORY</Nav.Link>
            </Nav.Item>
          </Nav>
        {/* </Col> */}
        {/* <Col sm={9}> */}
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Addproductinventory />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Listofinventory />
            </Tab.Pane>
          </Tab.Content>
        {/* </Col>
      </Row> */}
    </Tab.Container>
  );
}

export default Inventory;
