
import React from "react";
import Footer from "../components/footer";
import Menu from "../components/Menu";

const Layout = (props) =>{
    return (
        <div>
                    <Menu />
                {props.children}
                   <Footer/>
        </div>
    )
}


export default Layout;
