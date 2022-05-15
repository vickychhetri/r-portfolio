import React from 'react';
import award from '../images/award.webp';
import laptop from '../images/laptop.webp';
import { Container,Col, Row,Card,Form } from "react-bootstrap";
import './Blognotice.css';
const Blognotice= (props)=> {
    return (
        <div >
        <Container fluid>
            <Row >
                <Col className="topArea d-flex flex-column justify-content-center 
                align-content-center bg-danger text-white">
               

                </Col>
            </Row>
        </Container>


         <Container>
            <Row className='mt-4'>
              
              <Col lg={true}>
              <img src={award}  className="w-100 shadow rounded"/>
              </Col>

              <Col className="text-left shadow">
              <h2 className=" m-2 p-2 text-center" style={{color:'black',fontWeight:'bold',fontFamily:'OpenSans',fontSize:40}}>
              Weekly Coding Affairs
              </h2>
              <ul className="text-left text-md-start"  style={{listStyleType:'none'}}>
                <li className="listbloglatest shadow"> 
                <a href="" className="text-decoration-none text-black"> 
                Both Entity Framework Core and Entity Framework 6 are installed? May 13, 2022
                </a>

                </li>
                <li className="listbloglatest shadow">   <a href="" className="text-decoration-none text-black">  Flipping bits May 13, 2022 </a></li>
                <li className="listbloglatest shadow">   <a href="" className="text-decoration-none text-black">  Flipping bits May 13, 2022 </a></li>
                <li className="listbloglatest shadow">   <a href="" className="text-decoration-none text-black">  JavaScript Array forEach() May 12, 2022 </a></li>
                <li className="listbloglatest shadow">   <a href="" className="text-decoration-none text-black"> Grading Students May 12, 2022 </a></li>
              </ul>
              <a href="" className="btn btn-danger btn-lg shadow-lg mt-3 mb-3"> Load More</a>
              </Col>
            </Row>

            <Row className="mt-4">
                <Col >
               
                <h2 className='text-center mt-4 text-uppercase'> About Me</h2>
                <h4 className='text-center '> Full Stack Developer </h4>
                
                </Col>
            </Row>

            <Row className="mt-4">
                <Col className="col-md-5">
                <h4 className='text-danger'>Developing With a Passion While Exploring The World.</h4>
                <p>
                Just like architecture, which is an art used by people daily and affects their everyday life, so is code. You can create something and people interact with, use, touch and work with. That is an amazing feeling.

Code touches every single person in the organization and makes a difference to every single user that touches it (for good or bad).
                </p>

                <a href="" className='btn btn-danger m-4'> Contact Me</a>
                
                </Col>

                <Col lg={true}>
                
                <p className='text-justify'>
                Since code is a usable art, a whole team of people are connected to the practice. From the client to the account managers, and including the business people,
                 finance, the support team, QA team, designers, product managers and project managers.
                </p>
                <p className='text-justify'>
                All you need to do after you thought it up 
                is actually write it and presto a new thing is
                 created into the world. That really feels like being a wizard.
                </p>
                </Col>
                <Col lg={true} className="p-3 m-3">
                <img src={laptop} className="imgrightsidelaptop rounded"/>
                
                </Col>
            </Row>

          </Container>

<Container >
    <Row className='mt-4'>
        <Col className='text-center  d-flex justify-content-center align-content-center flex-column p-4'>
        <h2> What Services I'm Providing </h2>
        <h5> Web Services.</h5>
        </Col>
    </Row>

    <Row>
            
            <Col lg={true}>
            <Card className=" shadow m-4
            ">
                        <Card.Body>
                            <Card.Title>UI/UX Design</Card.Title>
                            <Card.Subtitle className="mb-2"> Low/High level</Card.Subtitle>
                            <Card.Text>
                            UX Design stands for User Experience Design, whereas UI 
                            Design stands for User Interface Design. UX design is 
                            developing and improving quality interaction between a user and all elements of a company,
                             while UI design transmits the brand’s strength and visual assets to a product’s interface.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
            </Col>
            
            <Col lg={true}>
            <Card className="shadow m-4">
                        <Card.Body>
                            <Card.Title>Digital Marketing</Card.Title>
                            <Card.Subtitle className="mb-2">Social Media</Card.Subtitle>
                            <Card.Text>
                            Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising,
                             but also text and multimedia messages as a marketing channel.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
            </Col>
            
            <Col lg={true}>
            <Card className="m-4">
                        <Card.Body>
                            <Card.Title>Web Development</Card.Title>
                            <Card.Subtitle className="mb-2">Laravel, React JS , C#, Java, PHP , Python  </Card.Subtitle>
                            <Card.Text>
                            Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text 
                            to complex web applications, electronic businesses, and social network services.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
            </Col>

    </Row>
</Container>


<Container>
    <Row className="mt-5">
    <Col lg={true} >

    </Col>
        <Col lg={true} className="d-flex justify-content-center flex-column ">
            <h1>
                Stay in Touch 
            </h1>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group> 
        <Form.Control type="submit" className="btn btn-danger"/>
        </Form>
           


        </Col>
        <Col lg={true} >
        
        </Col>
    </Row>
</Container>




        </div>
    );
}

export default Blognotice;
