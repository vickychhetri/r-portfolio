
import React from "react";
import Layout from "./layout";
import {  useParams } from "react-router-dom";
import { blogData } from "../Data/dataBlog";
import { Container,Row,Col } from "react-bootstrap";
const SinglePage = (props) =>{

    let {userId} = useParams();
    
    return (
        <div>
           <Layout>
               {/* {userId} */}
               {/* {blogData[0].id} */}
                <Container fluid >
                    <Row>
                        <Col>
                        </Col>
                        <Col lg={8} className="m-2 shadow">
                    
                        <h2> {blogData[0].title} </h2>
                        <hr/>

                        <img src={blogData[0].image} className="h-5 w-50" />
                      
                       <div className="mt-2 p-2">
                        <p className="text-justify" style={{textAlign:'justify'}}>
                        <span className="text-muted"> 15-May 2022 </span>   
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                         unknown printer took a galley of type and scrambled it to make a type specimen book. 
                         It has survived not only five centuries, but also the leap into electronic typesetting, 
                         
                         remaining essentially unchanged. It was popularised in the 1960s with the release of 
                         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                         software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p style={{textAlign:'justify'}}>
                        orem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                         unknown printer took a galley of type and scrambled it to make a type specimen book. 
                         It has survived not only five centuries, but also the leap into electronic typesetting, 
                         
                         remaining essentially unchanged. It was popularised in the 1960s with the release of 
                         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                         software like Aldus PageMaker including versions of Lorem Ipsum.
                         
                        orem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                         unknown printer took a galley of type and scrambled it to make a type specimen book. 
                         It has survived not only five centuries, but also the leap into electronic typesetting, 
                         
                         remaining essentially unchanged. It was popularised in the 1960s with the release of 
                         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                         software like Aldus PageMaker including versions of Lorem Ipsum.
                         
                        orem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                         unknown printer took a galley of type and scrambled it to make a type specimen book. 
                         It has survived not only five centuries, but also the leap into electronic typesetting, 
                         
                         remaining essentially unchanged. It was popularised in the 1960s with the release of 
                         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                         software like Aldus PageMaker including versions of Lorem Ipsum.
                         
                        orem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                         unknown printer took a galley of type and scrambled it to make a type specimen book. 
                         It has survived not only five centuries, but also the leap into electronic typesetting, 
                         
                         remaining essentially unchanged. It was popularised in the 1960s with the release of 
                         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                         software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
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


export default SinglePage;
