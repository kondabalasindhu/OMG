import './ForgetPage.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import test18 from "../test18.png";
import test19 from "../test19.png";
import { Link } from 'react-router-dom';




function ForgetPage() {
  return (
    <div className="Auth-form-container">
<img src={test19}
                    OMG />
      <form className="Auth-form">
        <div className="Auth-form-content">
          <Row className="mb-3">
            <h3 className="Auth-form-title">Forgot Password</h3>
            <Form.Group as={Col} controlId="formGridPhoneNumber">
              <Form.Label htmlFor="phone number">Phone Number</Form.Label>
              <Form.Control
                id="phone number"
                type="tel"
                message="please enter correct number"
                name="phoneNo"
                title="enter phone number like +919999999999"
                placeholder='enter phoneNumber'
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridgetotp">
              {/* <Form.Label>Getotp</Form.Label> */}
              <br></br>
              <Button className="btn-signup btn-success" type="submit">
                Getotp
              </Button>
              {/* <Form.Control type="password" placeholder="Enter confirm password" /> */}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label htmlFor="phone number">Please Enter Valid OTP here</Form.Label>
              <Form.Control
                id="otp"
                type="text"
                message="please Enter Valid OTP here"
                name="UName"
                title="enter Valid OTP here"
                placeholder='enterValid OTP here'
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridgetotp">
              {/* <Form.Label>Confirm Password</Form.Label> */}
              {/* <Form.Control type="button" placeholder="Enter confirm password" /> */}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label htmlFor="New Password">New Password</Form.Label>
              <Form.Control
                id="New Password"
                type="password"
                message="please Enter New Password"
                name="UName"
                title="enterNew Password"
                placeholder='enter New Password'
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridgetotp">
              {/* <Form.Label>Confirm Password</Form.Label> */}
              {/* <Form.Control type="button" placeholder="Enter confirm password" /> */}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label htmlFor="Confirm Password">Confirm Password</Form.Label>
              <Form.Control
                id="Confirm Password"
                type=" Password"
                message="please Enter Confirm Password"
                name="UName"
                title="enter Confirm Password"
                placeholder='enter Confirm Password'
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridgetotp">
              {/* <Form.Label>Confirm Password</Form.Label> */}
              {/* <Form.Control type="button" placeholder="Enter confirm password" /> */}
            </Form.Group>
          </Row>
          {/* <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div> */}
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
      <img src={test18}
                    OMG />
    </div>
  )
}

export default ForgetPage;