import React from 'react'
// import { Button, ButtonGroup } from 'react-bootstrap'
import "./Inventory.css";

// const Inventory = () => {
//   return (
    
//     <ButtonGroup className='invest' aria-label="Basic example">
//     <Button id="inventory "  className='active' variant="light" >Left</Button>
//     <Button id="inventory2"className='' variant="light">Middle</Button>
   
//   </ButtonGroup>
//   )
// }

// export default Inventory
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// import Sonnet from '../../components/Sonnet';
import Addproductinventory from '../Addproductinventory/Addproductinventory';
import Listofinventory from '../Listofinventory/Listofinventory';

function Inventory() {
  return (
    <Tab.Container id="tabs-example" defaultActiveKey="first">
      <Row>
   
        <Col sm={6}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Addproductinventory/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Listofinventory />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Inventory;