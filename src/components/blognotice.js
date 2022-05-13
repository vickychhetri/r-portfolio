import React from 'react';
import award from '../images/award.webp';
import laptop from '../images/laptop.webp';
import { Container,Col, Row,Card } from "react-bootstrap";
import './Blognotice.css';
const Blognotice= (props)=> {
    return (
        <div >
        <Container fluid>
            <Row >
                <Col className="topArea d-flex flex-column justify-content-center 
                align-content-center bg-danger text-white">
                 <div >
                    <h1> 
                        C# Java C/C++  Python PHP laravel 
                        Mysql Sql Server
                         React JS Html CSS JavaScript TypeScript,
                        Ajax Jquery Bootstrap.
                    </h1>
                    <a href="" className='btn mt-4' style={{backgroundColor:'white'}}> Need Help ?</a>

                 </div>

                </Col>
            </Row>
        </Container>


         <Container>
            <Row className='mt-4'>
              
              <Col>
              <img src={award}  className="w-100 shadow rounded"/>
              </Col>

              <Col className="text-left">
              <h2 className="shadow m-2 p-4 text-center" style={{color:'grey'}}>
              Coding Affairs
              </h2>
              <ul className="text-left text-md-start">
                <li className="listbloglatest"> Both Entity Framework Core and Entity Framework 6 are installed? May 13, 2022</li>
                <li className="listbloglatest"> Flipping bits May 13, 2022</li>
                <li className="listbloglatest"> JavaScript Array forEach() May 12, 2022</li>
                <li className="listbloglatest"> Grading Students May 12, 2022 </li>
                <li className="listbloglatest"> Both Entity Framework Core and Entity Framework 6 are installed? May 13, 2022</li>
                <li className="listbloglatest"> Flipping bits May 13, 2022</li>
                <li className="listbloglatest"> JavaScript Array forEach() May 12, 2022</li>
                <li className="listbloglatest"> Grading Students May 12, 2022 </li>
              </ul>
              </Col>
            </Row>

            <Row className="mt-4">
                <Col class="">
               
                <h2 className='text-center '> About me</h2>
                <h4 className='text-center '> Full Stack Developer </h4>
                <hr className="shadow" />
                
                </Col>
            </Row>

            <Row className="mt-4">
                <Col className="col-md-5">
                <h4 className='text-center text-danger'>Developing With a Passion While Exploring The World.</h4>
                <p>
                Just like architecture, which is an art used by people daily and affects their everyday life, so is code. You can create something and people interact with, use, touch and work with. That is an amazing feeling.

Code touches every single person in the organization and makes a difference to every single user that touches it (for good or bad).
                </p>

                <a href="" className='btn btn-danger'> Contact Me</a>
                
                </Col>

                <Col>
                
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
                <Col>
                <img src={laptop} className="imgrightsidelaptop"/>
                
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
            
            <Col>
            <Card className="bg-danger text-white">
                        <Card.Body>
                            <Card.Title>UI/UX Design</Card.Title>
                            <Card.Subtitle className="mb-2 text-white"> Low/High level</Card.Subtitle>
                            <Card.Text>
                            UX Design stands for User Experience Design, whereas UI 
                            Design stands for User Interface Design. UX design is 
                            developing and improving quality interaction between a user and all elements of a company,
                             while UI design transmits the brand’s strength and visual assets to a product’s interface.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
            </Col>
            
            <Col>
            <Card className="bg-danger text-white">
                        <Card.Body>
                            <Card.Title>Digital Marketing</Card.Title>
                            <Card.Subtitle className="mb-2 text-white">Social Media</Card.Subtitle>
                            <Card.Text>
                            Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising,
                             but also text and multimedia messages as a marketing channel.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
            </Col>
            
            <Col>
            <Card className="bg-danger text-white">
                        <Card.Body>
                            <Card.Title>Web Development</Card.Title>
                            <Card.Subtitle className="mb-2 text-white">Laravel, React JS , C#, Java, PHP , Python  </Card.Subtitle>
                            <Card.Text>
                            Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text 
                            to complex web applications, electronic businesses, and social network services.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
            </Col>

    </Row>
</Container>




        </div>
    );
}

export default Blognotice;