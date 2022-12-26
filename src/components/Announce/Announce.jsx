import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
 
const Announce = () =>{
    return( 
        <Fragment>
            <div className="announce">
               <Container> 
                    <Row>
                      <Col lg={4}>
                        <Link to="Common-Page" className="announce_wrap">
                             <div className="announce_wrap_item">
                                 <h2> BMANA CONVENTION 2021  </h2>
                                  <div className="read_btn"> Read More </div>
                             </div>
                        </Link>
                      </Col>
                    </Row>     
               </Container>
            </div> 
        </Fragment>
    )
}
export default  Announce;