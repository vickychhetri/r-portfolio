
import React from "react";
import Blognotice from "../components/blognotice";

import Menu from "../components/Menu";
import SliderCaro from "../components/sliderCaro";
import TopBar from "../components/Topbar";

const Home = (props) =>{
    return (
        <div>
          <TopBar title="Join in our Coder team in Discord."/>
          <Menu />
          {/* <SliderCaro /> */}
          
          
          
          <Blognotice />
        
          <div className="text-center">
            <hr/>
            <p> @2022 Copyright reserved. Design and Developed by Vicky Chhetri. </p>
          </div>


        </div>
    )
}


export default Home;
