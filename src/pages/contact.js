import React from "react";
import { Form,Container,Col,Row,Button } from "react-bootstrap";
import Layout from "./layout";
const Contact = (props) =>{
    return (
        <div>
            <Layout>
                <Container>
                    <Row>
                        <Col>
                        </Col>
                        <Col lg={8} >
                        <div className="mt-4 shadow p-4">
                                <h1> Contact Me</h1>
                            <Form>
                            <Form.Group controlId="form-group-id" className="mt-2">
                            <Form.Label className="d-flex justify-content-start">Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group controlId="form-group-id" className="mt-2">
                            <Form.Label className="d-flex justify-content-start">Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Name" />
                            </Form.Group>

                            <Form.Group controlId="form-group-id" className="mt-2">
                            <Form.Label className="d-flex justify-content-start">Subject</Form.Label>
                            <Form.Control type="text" placeholder="Enter your subject" />
                            </Form.Group>

                            <Form.Group controlId="form-group-id" className="mt-2">
                            <Form.Label className="d-flex justify-content-start">Message </Form.Label>
                            <Form.Control as="textarea" placeholder="Enter your message" rows={3} />
                            </Form.Group>


                            <Button variant="danger" className="mt-4" onClick={() => console.log("Danger")}>
                                Submit
                            </Button>
                            </Form>

                          

                            
                        </div>


                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}


export default Contact;
