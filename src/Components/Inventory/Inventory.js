

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';



function Inventory() {
 
  return (
<div className="Auth-form-container">

<form  className="Auth-form">
  <div className="Auth-form-content">
    
    <div className="form-group mt-3">
      <label>PRODUCT NAME</label>
      <input
        type="text"
        required
        className="form-control mt-1"
        placeholder="Enter product name" 
        name='email'
       
      />
    </div>
    
<Row className="mb-3"> 
              <Form.Group as={Col} >
                
                <Form.Label htmlFor="UserName">PRODUCT DESCRIPTION</Form.Label>
                <textarea class="form-control mb-5" placeholder="Simla apples - 1 kg"></textarea>
                
                </Form.Group>
                <Form.Group as={Col} >
        </Form.Group>
                </Row>
<Row className="mb-3">      
      <Form.Group as={Col} >
          <Form.Label>QUNATITY IN STOCK</Form.Label>
         <Form.Control type="text"
          required
          placeholder=""  
          name='password'
         
          />
     </Form.Group>

       <Form.Group as={Col} >
        <Form.Label>MRP or UNIT PRICE</Form.Label>
          <Form.Control type="text" 
           required
          placeholder=""
          name='confirmPassword' 
         
          />
        </Form.Group>
        </Row>
        <Row className="mb-3">      
      <Form.Group as={Col} >
          <Form.Label>MFG DATE</Form.Label>
         <Form.Control type="date"
          required
          placeholder="Enter password"  
          name='date'
          
          />
     </Form.Group>

       <Form.Group as={Col} >
        <Form.Label>EXP DATE</Form.Label>
          <Form.Control type="date" 
           required
          placeholder=""
          name='date' 
         
          />
        </Form.Group>
        </Row>
        <Row className="mb-3">      
      <Form.Group as={Col} >
          <Form.Label>Purchace Price / UNIT</Form.Label>
         <Form.Control type="text"
          required
          placeholder=""  
          name='password'
          
          />
     </Form.Group>

       <Form.Group as={Col} >
        <Form.Label>INVENTORY VALUE </Form.Label>
          <Form.Control type="text" 
           required
          placeholder=""
          name='text' 
        
          />
        </Form.Group>
        </Row>
       
    <p className="forgot-password text-right mt-2">
     <Button className="btn-signup" type="submit">
                submit
              </Button>{" "}
              <Button as= {Link} to="/" variant="danger">
              Cancel
            </Button>
    </p>
  </div>
</form>


</div>

)
}

export default Inventory;