import React from 'react';
import slider1 from '../images/h1.jpg';
import slider2 from '../images/he2.jpg';
import { Carousel,Container,Col, Row} from 'react-bootstrap';
import './TopBar.css';

const SliderCaro= (props)=> {
    return (
        <div >

            <Container className="CarosolContainer" fluid>
                <Row>
                    <Col>
                    <Carousel>
                        <Carousel.Item interval={4000}  >
                            <img
                            className="d-block w-100 h-50"
                            src={slider1}
                            alt="First slide"
                            style={{height:100}}
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={slider2}
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                     </Carousel>
                </Col>
            </Row>
            </Container> 
        </div>
    );
}

export default SliderCaro;