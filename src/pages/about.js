
import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Menu from "../components/Menu";
import Layout from "./layout";
const About = (props) =>{
    return (
        <div>
           <Layout>
            <Container>
                <Row>
                    <Col>
                    <div className="shadow p-4 m-4">
                    Coding
                    </div>
                    </Col>

                    <Col>
                    <div className="shadow p-4 m-4">
                    Version control
                    </div>
                    </Col>

                    <Col>
                    <div className="shadow p-4 m-4">
                    Technical SEO   
                    </div>
                    </Col>

                    <Col>
                    <div className="shadow p-4 m-4">
                    Responsive design
                    </div>
                    </Col>

                </Row>
                <Row>
                    <Col>
                    <div className="shadow p-4 m-4">
                    Coding
                    </div>
                    </Col>

                    <Col>
                    <div className="shadow p-4 m-4">
                    Version control
                    </div>
                    </Col>

                    <Col>
                    <div className="shadow p-4 m-4">
                    Technical SEO   
                    </div>
                    </Col>

                    <Col>
                    <div className="shadow p-4 m-4">
                    Responsive design
                    </div>
                    </Col>

                </Row>
            </Container>
            
            </Layout>
        </div>
    )
}


export default About;
