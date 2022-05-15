
import React from "react";
import Blognotice from "../components/blognotice";
import Layout from "../pages/layout"; 
const Home = (props) =>{
    return (
        <div>
         <Layout>
          <Blognotice />
          </Layout>  
        </div>
    )
}


export default Home;
