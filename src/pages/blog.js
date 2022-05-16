
import React from "react";
import Layout from "./layout";
import { blogData } from "../Data/dataBlog";
import { Container,Row,Col } from 'react-bootstrap';
const Blog = (props) =>{
    return (
        <div>
          <Layout> 
          <Container className="mt-2">
                    <Row >
           {blogData.map((data,key)=>{
             return (
              <Col lg={6}>
              <div key={key}  className="shadow mb-5 mt-5 p-2"> 
                  
                    <div>
                    <img src={data.image} className="w-50 h-50" />
                    </div>
                    <h2 className="p-2 text-uppercase"> {data.title}</h2>
                    <p className="p-2">
                        {data.description.substring(0,100)}... 
                        <a href={`blog/${+data.id}`}> Read More </a>
                    </p>
              </div>
                </Col>
             )
           })}
            </Row>
              </Container>
          </Layout>
        </div>
    )
}


export default Blog;
