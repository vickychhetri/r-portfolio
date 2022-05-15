import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
const Footer=(props) =>{
    return (  
        <>
        <Container fluid>
            <Row className="mt-5">
            
                <Col lg={true} className="bg-dark text-white">
                <div className="text-center m-2">
                    <p> @2022 Copyright reserved. Design and Developed by Vicky Chhetri. </p>
                </div>
                </Col>
            </Row>
        </Container>

        </>
    );
}


export default Footer;