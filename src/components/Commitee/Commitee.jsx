import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import demo1 from '../../asset/image/ja.png'

const Commitee = () =>{
    return(
        <Fragment>
            <div className="commitee">
               <Container>
                    <div className="committe_wrapper">
                        <div className="section_heading">
                             EXECUTIVE COMMITTEE
                        </div>
                         <Row> 
                            <Col lg={3}>
                               <div className="committe_wrap">
                                    <div className="profile_img text-center">
                                        <div className="p_img"> 
                                         <img src={demo1} alt=""/>
                                        </div>
                                        <div className="designation">
                                            President
                                        </div>
                                    </div>
                                    <div className="profile_info">
                                         <h5> Jamal Uddin, MD</h5>
                                         <h6>mjuddin109@aol.com </h6>
                                    </div>
                               </div>
                            </Col>
                         </Row>
                    </div>
               </Container>
            </div>
        </Fragment>
    )
}
export default  Commitee;