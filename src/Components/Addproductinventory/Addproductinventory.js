import React from 'react'
import { Form } from 'react-bootstrap'

const Addproductinventory = () => {
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
            />
          </div>
          <label>PRODUCT DESCRIPTION</label>
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}


export default Addproductinventory