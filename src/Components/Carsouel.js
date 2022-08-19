import React from 'react'
import { Carousel } from 'react-bootstrap'
import test4 from "./test4.jpg";
import test5 from "./test5.jpg";
// import test2 from "./test2.jpg";
const Carsouel = () => {
  return (
    
    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{maxHeight: "500px",objectFit: "contain"}}
        //   style={{height:"725px"}}
          src={test4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          style={{maxHeight: "500px",objectFit: "contain"}}
          src={test5}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight: "500px",objectFit: "contain"}}
          src={test4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carsouel