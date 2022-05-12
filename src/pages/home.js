import React from "react";
import Menu from "../components/Menu";
import SliderCaro from "../components/sliderCaro";
import TopBar from "../components/Topbar";

const Home = (props) =>{
    return (
        <div>
          <TopBar title="Join in our Coder team in Discord."/>
          <Menu />
          <SliderCaro />
        
        </div>
    )
}
export default Home;