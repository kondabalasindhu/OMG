import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

import ApiServices from "../Services/ApiServices";

function Addproductinventory() {
  const [datas, setDatas] = useState();
  const [errors, setErrors] = useState(false);
  const [status, setStatus] = useState(false);
const handleChange = (e) => {
    const { name, value } = e.target;

    setDatas((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ datas });
    ApiServices.AddProductinventory(datas)
      .then((res) => {
        console.log(res.data);
        setErrors(false);
        alert("product added");
        // navigate("/");
      })
      .catch((error) => {
        alert("something went wrong");
        setErrors(true);
        console.log(error);
      });
    setStatus(false);
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          {/* <h3 className="Auth-form-title">Sign In</h3> */}
          <div className="form-group mt-3">
            <label>PRODUCT NAME</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter text"
              name="productName"
              onChange={handleChange}
            />
          </div>
          <label>PRODUCT DESCRIPTION</label>
          <textarea id="w3review" name="w3review" rows="4" cols="50"    onChange={handleChange}></textarea>
          {/* <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div> */}
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>QUNATITY IN STOCK</Form.Label>
              <Form.Control
                type="number"
                required
                placeholder=""
                name="quantity"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>MRP or UNIT PRICE</Form.Label>
              <Form.Control type="" required placeholder="" name="number"    onChange={handleChange}/>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>MFG DATE</Form.Label>
              <Form.Control type="date" required placeholder="" name="date"     onChange={handleChange}/>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>EXP DATE</Form.Label>
              <Form.Control type="date" required placeholder="" name="date"    onChange={handleChange}/>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Purchace Price / UNIT</Form.Label>
              <Form.Control type="text" required placeholder="" name=""    onChange={handleChange}/>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>INVENTORY VALUE </Form.Label>
              <Form.Control type="text" required placeholder="" name=""    onChange={handleChange}/>
            </Form.Group>
          </Row>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Addproductinventory;
