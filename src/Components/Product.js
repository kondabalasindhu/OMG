import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import test4 from "./test4.jpg";
import test5 from "./test5.jpg";
// import test4 from "./test4.jpg";

const Product = (props) => {
  console.log(props)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.imageUrl} />
      <Card.Body>
        <Card.Title>{props.data.prodName}</Card.Title>
       <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.{props.data.price}
        </Card.Text> 
       <Button variant="primary">Rs.{props.data.price}/-</Button>
     </Card.Body>
    </Card> 
  )
}

export default Product