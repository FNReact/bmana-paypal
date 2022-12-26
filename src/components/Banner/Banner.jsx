import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import Banner1 from '../../asset/image/Banner1.png' 
import SideBar from "../SideBar/SideBar";

const Banner = (props) =>{

    return(
        <Fragment>
            <div className="banner">
            <Swiper
              //effect={"fade"}   
              cssMode={true}
              navigation={true}
              keyboard={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{ 
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay, Navigation, Pagination]}
              className="mySwiper">
              <SwiperSlide>
                     <img src={Banner1} alt="" />
              </SwiperSlide>
              <SwiperSlide> 
                     <img src={Banner1} alt="" />
              </SwiperSlide>
            </Swiper>
            <div className="banner_text">
                Bangladesh Medical Association of North America (BMANA)
            </div>
            <SideBar user={props.user} />
            </div>
        </Fragment>
    )
}
export default  Banner;