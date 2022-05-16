import React, { useState } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Layout from "./layout";

const Register = (props) => {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [cpassword, setCpassword]=useState('');
    const [submitted, setSubmitted] = useState(false);
    const handleNameChange= (event) =>{
        event.persist();
        setName(event.target.value);
    }
    const handleEmailChange= (event) =>{
        event.persist();
        setEmail(event.target.value);
    }
    const handlePasswordChange= (event) =>{
        event.persist();
        setPassword(event.target.value);
    }
    const handleCPasswordChange= (event) =>{
        event.persist();
        setCpassword(event.target.value);
    }

    const submitRegistration = (event) => {
        event.preventDefault();
        setSubmitted(true);
    console.log("form submitted");
        }
    return (
    <div>
      <Layout>
        <Container>
          <Row>
            <Col></Col>
            <Col lg={6}>
              <div className="shadow w-100 p-4">
                  {name}
                <Form onSubmit={submitRegistration}>
                  <Form.Group controlId="form-group-id-name" className="mt-2">
                    <Form.Label className="d-flex justify-content-start">
                      Name
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter your Name"
                     name="fullName" value={name} onChange={handleNameChange} />
                     {submitted && !name && <span id='last-name-error' class="text-danger">Please Enter Your Full Name</span>}
                  </Form.Group>

                  <Form.Group controlId="form-group-id-email" className="mt-2">
                    <Form.Label className="d-flex justify-content-start">
                      Email
                    </Form.Label>
                    <Form.Control type="email" 
                    placeholder="Enter your email"  name="email" value={email} onChange={handleEmailChange}/>
                  </Form.Group>

                  <Form.Group controlId="form-group-id-password" className="mt-2">
                    <Form.Label className="d-flex justify-content-start">
                      Password
                    </Form.Label>
                    <Form.Control type="password" placeholder="********" value={password} onChange={handlePasswordChange}/>
                
                  </Form.Group>

                  <Form.Group controlId="form-group-id-cpassword" className="mt-2">
                    <Form.Label className="d-flex justify-content-start">
                      Confirm Password
                    </Form.Label>
                    <Form.Control type="password" placeholder="********" value={cpassword} 
                    onChange={handleCPasswordChange}/>
                  </Form.Group>

                  <Button
                    variant="danger"
                    type="submit"
                    className="mt-4"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default Register;
