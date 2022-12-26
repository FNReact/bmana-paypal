import React, { Fragment, useEffect, useState } from "react";
import About from "../components/About/About";
import CommonTop from "../components/CommonTop/CommonTop";
import Footer from "../components/Footer/Footer";
import Member from "../components/Member/Member";
import TopNaviation from "../components/TopNavigation/TopNaviation";



const AboutPage = () =>{
    return(
        <Fragment> 
            <div className="header_Two"> 
               <TopNaviation/>  
            </div> 
            <CommonTop/>  
            <Member/>
            <Footer/>     
        </Fragment>  
    )
}

export default AboutPage