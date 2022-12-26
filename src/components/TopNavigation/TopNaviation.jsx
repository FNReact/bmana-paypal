import React, { Fragment, useEffect, useState } from 'react'
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/style.css";
import "../../asset/css/responsive.css";
import logo from '../../asset/image/bmana.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { Col, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'; 
 
const TopNaviation = (props) => {

  const [memberShow, setMemberShow] = useState(false); 
  const [stickyNav, setStickyNav] = useState(false);


    useEffect(() => {
        window.onscroll = () => {
          setStickyNav(window.pageYOffset === 0 ? false : true);
          return () => (window.onscroll = null);
        };
      }, []);

return ( 
  <Fragment>
    <title>{props.title}</title>
       <header>
        <div className={` header ${stickyNav ? 'HeaderSticky' : ''} }`}>
           <div className="header_part_one">
                <Container>
                  <div className="home_header">
                       <div className="logo">
                          <img src={logo} alt="" />
                          <span>Bangladesh Medical Association of North America</span>
                       </div>
                       <div className="header_end_side">
                            <Link className="mamberLogin" to="/about"> Become a Mamber  </Link>
                         <div className="mamberLogin" onClick={() => setMemberShow(true)}>
                             Login
                         </div> 
                        <div className="search_box">
                              <form action="#">
                                   <input type="text" placeholder=" SEARCH PHYSICIAN " className="form_control" />
                                   <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                              </form>
                         </div>
                      </div>
                  </div>
               </Container> 
           </div>
           <div className="header_part_two">
               <Container fluid> 
                      <ul className="nav_list">
                              <li><Link to="/"> Home</Link></li> 
                              <li><a>  About Us <i><FontAwesomeIcon icon={faCaretDown}/> </i>
                                  <span className="droppper" ></span></a>
                                  <ul className="sub_down">
                                       <li> <Link to="/"> About BMANA</Link> </li>
                                       <li> <Link to="/"> Mission and Vision </Link> </li>
                                       <li> <Link to="/"> Constitution </Link> </li>
                                       <li> <Link to="/"> President’s Message</Link> </li>
                                       <li> <Link to="/"> Past Executive Committee </Link> </li>
                                       <li> <Link to="/"> Local Chapters </Link> </li>
                                    </ul>
                              </li>
                              <li><Link to="/"> Membership Directory </Link></li>
                              <li><Link to="/"> Executive Committee </Link></li>
                              <li><Link to="/"> Election </Link></li>
                              <li><a>  Standing Committees <i><FontAwesomeIcon icon={faCaretDown}/> </i>
                                  <span className="droppper" ></span></a>
                                  <ul className="sub_down">
                                       <li> <Link to="/"> Constitution & By-Laws Committee </Link> </li>
                                       <li> <Link to="/"> Nominating & Election Committee </Link> </li>
                                       <li> <Link to="/"> Research and Scientific </Link> </li>
                                  </ul>
                              </li>
                              <li><a> AGM Minutes Archive <i><FontAwesomeIcon icon={faCaretDown}/> </i>
                                  <span className="droppper" ></span></a>
                                  <ul className="sub_down">
                                       <li> <Link to="/"> 2018 New Orleans </Link> </li>
                                       <li> <Link to="/"> 2019 Detroit </Link> </li>
                                  </ul>
                              </li>
                              <li><a> Past Conventions <i><FontAwesomeIcon icon={faCaretDown}/> </i>
                                  <span className="droppper" ></span></a>
                                  <ul className="sub_down">
                                       <li> <Link to="/"> BMANA CONVENTION 2021 </Link> </li>
                                       <li> <Link to="/"> BMANA CONVENTION 2019  </Link> </li>
                                       <li> <Link to="/"> BMANA CONVENTION 2018  </Link> </li>
                                       <li> <Link to="/"> OTHER BMANA CONVENTIONS  </Link> </li>
                                  </ul>
                              </li>
                              <li><Link to="/"> Media</Link></li>
                              <li><Link to="/"> Publications </Link></li>
                              <li><Link to="/"> Contact Us</Link></li>
                      </ul> 
               </Container>
           </div>
          </div>
       </header>
    <MyVerticallyCenteredModal show={memberShow} onHide={() => setMemberShow(false)}/>
  </Fragment>
)

 // Login Modal 

 function MyVerticallyCenteredModal(props) {
  return (
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="memberModal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="logo">
           <img src={logo} alt="" />
        </div>
        <div className="logo_title"> Bangladesh Medical Association of North America </div>
        <div className="modal_main_content">
             <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav variant="pills" className="flex-row">
                     <Nav.Item>
                       <Nav.Link eventKey="first">Sign In</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                       <Nav.Link eventKey="second">New Mamber Sign Up</Nav.Link>
                     </Nav.Item>
                </Nav>
                <Tab.Content>
                     <Tab.Pane eventKey="first">
                         <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                            <div className="login_bday">
                                   <form action="#">
                                          <Row>
                                              <Col lg={12}>
                                                 <input type="text"className="form_control" name="" placeholder="Email / Username "/>
                                              </Col>
                                              <Col lg={12}>
                                                <input type="text"className="form_control" name="" placeholder="Password"/>
                                              </Col>
                                              <Col lg={12}>
                                                 <div className="login_pass_save">
                                                    <div className="pass_left">
                                                      <input type="checkbox" className="chequeB"/> Remember
                                                    </div>
                                                    <div className="pass_right">
                                                      Forget Password?
                                                    </div>
                                                 </div>
                                              </Col>
                                              <Col lg={12}>
                                                 <div className="login_btn"> Log In</div>
                                              </Col> 
                                          </Row>
                                   </form>
                               </div>
                            </Col>
                            <Col lg={2}></Col>
                         </Row>
                     </Tab.Pane>
                     <Tab.Pane eventKey="second">
                         <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                            <div className="registerBody">
                                   <form action="#">
                                          <Row>
                                              <Col lg={12}>
                                                 <input type="text"className="form_control" name="" placeholder=" First Name  "/>
                                              </Col>
                                              <Col lg={12}>
                                                <input type="text"className="form_control" name="" placeholder=" Last Name "/>
                                              </Col>
                                              <Col lg={12}>
                                                <input type="text"className="form_control" name="" placeholder=" E-mail "/>
                                              </Col>
                                              <Col lg={12}>
                                                <input type="text"className="form_control" name="" placeholder=" Username "/>
                                              </Col>
                                              <Col lg={12}>
                                                <input type="text"className="form_control" name="" placeholder=" Password "/>
                                              </Col>
                                              <Col lg={12}>
                                                <input type="text"className="form_control" name="" placeholder=" Reapet Password "/>
                                              </Col>
                                              <Col lg={12}>
                                                 <div className="login_pass_save">
                                                    <div className="pass_left">
                                                      <input type="checkbox" className="chequeB"/> Agree with our terms and condition
                                                    </div>
                                                 </div>
                                              </Col> 
                                              <Col lg={12}>
                                                 <div className="login_btn"> Continue </div>
                                              </Col> 
                                          </Row>
                                   </form>
                               </div>
                            </Col>
                            <Col lg={2}></Col>
                          </Row>
                     </Tab.Pane>
                </Tab.Content>

             </Tab.Container>
        </div>
      </Modal.Body>
    </Modal>
  );
}

}

export default TopNaviation