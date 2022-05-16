import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
const Footer=(props) =>{
    return (  
        <>
        <Container fluid style={{bottom:0,position:'absolute',left:0,right:0}}>
            <Row className="mt-5">
            
                <Col lg={true} className="shadow ">
                <div className="text-center m-2">
                    <p> @2022 copyright reserved. <a href="https://vickychhetri.com/"> www.vickychhetri.com </a> </p>
                </div>
                </Col>
            </Row>
        </Container>

        </>
    );
}


export default Footer;