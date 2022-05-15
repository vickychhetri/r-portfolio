
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
              <div key={key}  className="shadow mb-5 mt-5"> 
                    <h2 className="p-2 text-uppercase"> {data.title}</h2>
                    <div>
                    <img src={data.image} className="w-100 h-100 portfoliobox" />
                    </div>
                    <p className="p-2">
                        {data.description}
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
