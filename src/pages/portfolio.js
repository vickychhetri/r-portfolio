import '../css/portfolio.css';
import Layout from "./layout";
import { portfolioData } from "../Data/dataPort";
import { Container,Col,Row } from "react-bootstrap";
const Portfolio = (props) =>{
     
    return (
        <div>
          <Layout>
              <Container className="mt-2">
                    <Row >
              {portfolioData.map((data,key)=>{
                  return(
                  <Col lg={6}>
                  <div key={key} style={style} className="shadow mb-5 mt-5"> 
                        <h2 className="p-2 text-uppercase textcsssmooth text-white"> {data.title}</h2>
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


export default Portfolio;


const style={
    backgroundColor:'white'
}