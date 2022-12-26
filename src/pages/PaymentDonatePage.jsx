import React, { Fragment, useEffect, useState } from "react";
import About from "../components/About/About";
import CommonTop from "../components/CommonTop/CommonTop";
import Footer from "../components/Footer/Footer";
import PayaplDonate from "../components/Payment/PaypalDonate";
import TopNaviation from "../components/TopNavigation/TopNaviation";



const PaypalDonatePage = () =>{
    return(
        <Fragment> 
            <div className="header_Two"> 
               <TopNaviation/>  
            </div> 
            <CommonTop/>  
            <PayaplDonate/>
            <Footer/>     
        </Fragment>  
    )
}

export default PaypalDonatePage