import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

const CommonTop = () =>{ 
    return(
        <Fragment>
            <div className="commonTop">
                <Container>
                  <div className="commonTop_wrapper">
                       <div className="top_wrap">
                           <h3>Bangladesh Medical Association of North America</h3>
                           <div className="page_name">
                                Page Name 
                           </div>
                       </div>
                   </div>
                </Container>
            </div>
        </Fragment>
    )
}
export default  CommonTop;