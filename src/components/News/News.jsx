import React, { Fragment } from "react";
import { Container} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Navigation } from "swiper";
import news1 from '../../asset/image/s3.jpg'   
import { Link } from "react-router-dom"; 
 
const News = () =>{
    return( 
        <Fragment>
            <div className="news">
                <Container>
                    <div className="news_wrapper">
                        <div className="section_heading">
                             NEWS AND ANNOUNCEMENT 
                        </div>
                       <Swiper
                        slidesPerView={3} 
                        spaceBetween={0} 
                         navigation={true}
                         keyboard={true}
                         loop={true}
                         autoplay={{ 
                           delay: 3000,
                           disableOnInteraction: false,
                         }}
                         modules={[ Autoplay, Navigation]}
                         className="mySwiper">
                         <SwiperSlide>
                               <div class="slider_item"> 
                                   <div class="sl_img">
                                        <img src={news1} alt=""/> 
                                   </div>
                                   <h4>YOUNG PHYSICIAN CAREER</h4>
                                   <Link to="/"> Read More</Link>
                              </div> 
                         </SwiperSlide>
                         <SwiperSlide> 
                                <div class="slider_item"> 
                                    <div class="sl_img"> 
                                        <img src={news1} alt=""/>  
                                    </div>  
                                      <h4>YOUNG PHYSICIAN CAREER</h4> 
                                      <a href="#">Read More</a> 
                                  </div> 
                         </SwiperSlide>
                         <SwiperSlide> 
                                <div class="slider_item"> 
                                    <div class="sl_img"> 
                                        <img src={news1} alt=""/>  
                                    </div>  
                                      <h4>YOUNG PHYSICIAN CAREER</h4> 
                                      <a href="#">Read More</a> 
                                  </div> 
                         </SwiperSlide> 
                         <SwiperSlide>  
                                <div class="slider_item"> 
                                    <div class="sl_img"> 
                                        <img src={news1} alt=""/>  
                                    </div>  
                                      <h4>YOUNG PHYSICIAN CAREER</h4> 
                                      <a href="#">Read More</a> 
                                  </div> 
                         </SwiperSlide>
                       </Swiper>
                    </div>
                </Container>
            </div>
        </Fragment>
    )
}
export default  News;