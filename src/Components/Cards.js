import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import test4 from "./test4.jpg";
import test5 from "./test5.jpg";
// import test4 from "./test4.jpg";

const Cards = () => {
  return (
    <>
    <CardGroup >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={test4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> 
       <Button variant="primary">Go somewhere</Button>
     </Card.Body>
    </Card> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={test4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
     <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> 
       <Button variant="primary">Go somewhere</Button> 
      </Card.Body>
    </Card> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={test5} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
     <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> 
       <Button variant="primary">Go somewhere</Button> 
      </Card.Body>
    </Card> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={test4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
     <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> 
       <Button variant="primary">Go somewhere</Button> 
      </Card.Body>
    </Card> 
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={test5} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
     <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> 
       <Button variant="primary">Go somewhere</Button> 
      </Card.Body>
    </Card> 
    </CardGroup>
    </>
  )
}

export default Cards