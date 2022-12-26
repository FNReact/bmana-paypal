import React, { Fragment, useEffect, useState } from "react";
import About from "../components/About/About";
import CommonTop from "../components/CommonTop/CommonTop";
import Footer from "../components/Footer/Footer";
import PaypalPayment from "../components/Payment/PaypalPayment";
import TopNaviation from "../components/TopNavigation/TopNaviation";



const PaymentPage = () =>{
    return(
        <Fragment> 
            <div className="header_Two"> 
               <TopNaviation/>  
            </div> 
            <CommonTop/>  
            <PaypalPayment/>
            <Footer/>      
        </Fragment>  
    )
}

export default PaymentPage