import React from 'react';
import slider1 from '../images/homebg.webp';
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
                        <Carousel.Item interval={5000}  >
                            <img
                            className="d-block w-100 h-50"
                            src={slider1}
                            alt="First slide"
                            style={{height:100}}
                            />
                            <Carousel.Caption className="bg-primary">
                            <h3 >Learn C/C++</h3>
                            <p> Learn Data Structure and Algorithms </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={slider1}
                            alt="Second slide"
                            />
                            <Carousel.Caption className="bg-success">
                            <h3 >React JS</h3>
                            <p>High level Front-end UI/UX Design.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={slider1}
                            alt="Second slide"
                            />
                            <Carousel.Caption className="bg-danger">
                            <h3 >Laravel </h3>
                            <p>High level Back-end Architecture Design.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={slider1}
                            alt="Second slide"
                            />
                            <Carousel.Caption className="bg-dark">
                            <h3 > C# </h3>
                            <p>Design Complex Architecture .</p>
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