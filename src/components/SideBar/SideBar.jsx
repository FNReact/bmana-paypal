import React, { Fragment, useContext, useEffect, useState } from "react";
import logo from '../../asset/image/bmana.png' 
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";


// Axios
const SideBar = () =>{



    return(
        <Fragment>
            <div className="sideBar"> 
            <div className="sideBar_contain">
                  <div className="logo text-center"> 
                       <img src={logo} alt="" /> 
                  </div>
                  <hr/>
                  <div className="nav_list">
                  <Accordion>
                      <Accordion.Item eventKey="0">
                         <Accordion.Header> Home </Accordion.Header>
                       
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header> About Us <i><FontAwesomeIcon icon={faCaretDown}/> </i></Accordion.Header>
                        <Accordion.Body>
                             <ul>  
                                <li> <Link to="/about"><i><FontAwesomeIcon icon={faAngleRight}/></i> About BMANA</Link> </li>
                                <li> <Link to="/mission">  <i><FontAwesomeIcon icon={faAngleRight}/></i> Mission and Vision </Link> </li>
                                <li> <Link to="/constitution"> <i><FontAwesomeIcon icon={faAngleRight}/></i> Constitution</Link> </li>
                                <li> <Link to="/president-message"> <i><FontAwesomeIcon icon={faAngleRight}/></i> President’s Message </Link> </li> 
                                <li> <Link to="/past-exicutive-commitee"> <i><FontAwesomeIcon icon={faAngleRight}/></i> Past Executive Committee </Link> </li>
                                <li> <Link to="/"> <i><FontAwesomeIcon icon={faAngleRight}/></i> Local Chapters </Link> </li>
                             </ul> 
                        </Accordion.Body> 
                      </Accordion.Item>  
                      {/* <Accordion.Item eventKey="3">
                        <Accordion.Header><Link to="/membership-directory"> Fahim </Link> </Accordion.Header>
                      </Accordion.Item> */}
                      {/* <Accordion.Item eventKey="4">   
                        <Accordion.Header> <Link to="/executive-committee-page"> Naeem </Link></Accordion.Header>
                      </Accordion.Item> */}
                      <Accordion.Item eventKey="5">
                        <Accordion.Header> <Link to="">Election</Link></Accordion.Header>
                      </Accordion.Item> 
                      <Accordion.Item eventKey="6">
                        <Accordion.Header> Standing Committees <i><FontAwesomeIcon icon={faCaretDown}/> </i> </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li> <Link to=""> <i><FontAwesomeIcon icon={faAngleRight}/></i> Constitution & By-Laws Committee  </Link> </li>
                                <li> <Link to=""> <i><FontAwesomeIcon icon={faAngleRight}/></i> Nominating & Election Committee</Link> </li>
                                <li> <Link to=""> <i><FontAwesomeIcon icon={faAngleRight}/></i> Research and Scientific</Link> </li>
                            </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header>AGM Minutes Archive <i><FontAwesomeIcon icon={faCaretDown}/> </i>  </Accordion.Header>
                        <Accordion.Body>
                             <ul>
                                 <li> <Link to=""> <i><FontAwesomeIcon icon={faAngleRight}/></i> 2018 New Orleans </Link> </li>
                                 <li> <Link to=""> <i><FontAwesomeIcon icon={faAngleRight}/></i> 2019 Detroit</Link> </li>
                             </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="8">
                        <Accordion.Header> Past Conventions </Accordion.Header>
                        <Accordion.Body>
                             <ul>
                                 <li> <Link to=""> <i><FontAwesomeIcon icon={faAngleRight}/></i> BMANA CONVENTION 2021 </Link> </li>
                                 <li> <Link to=""> <i><FontAwesomeIcon icon={faAngleRight}/></i> BMANA CONVENTION 2019</Link> </li>
                                 <li> <Link to=""> <i><FontAwesomeIcon icon={faAngleRight}/></i> BMANA CONVENTION 2018</Link> </li>
                                 <li> <Link to=""> <i><FontAwesomeIcon icon={faAngleRight}/></i> OTHER BMANA CONVENTIONS</Link> </li>
                             </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="9">
                        <Accordion.Header> Media </Accordion.Header>
                      </Accordion.Item>
                      <Accordion.Item eventKey="10">
                        <Accordion.Header>Publications </Accordion.Header>
                      </Accordion.Item>
                      <Accordion.Item eventKey="11">
                        <Accordion.Header>Contact Us</Accordion.Header>
                      </Accordion.Item>
                    </Accordion> 
                  </div>
                </div>
            </div>
          
       </Fragment>
    )
}
export default  SideBar;