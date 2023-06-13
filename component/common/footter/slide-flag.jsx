import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
const SlideFlag = () => {
  return (
   
      <Swiper className="mySwiper" modules={[Autoplay]} autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}>
        <SwiperSlide><img src="/image/home/flag.png" alt="flag" /></SwiperSlide>
        <SwiperSlide><img src="/image/home/flag1.png" alt="flag" /></SwiperSlide>
        <SwiperSlide><img src="/image/home/flag3.png" alt="flag" /></SwiperSlide>
        <SwiperSlide><img src="/image/home/flag4.png" alt="flag" /></SwiperSlide>
        <SwiperSlide><img src="/image/home/flag5.png" alt="flag" /></SwiperSlide>
        <SwiperSlide><img src="/image/home/flag6.png" alt="flag" /></SwiperSlide>
        <SwiperSlide><img src="/image/home/flag7.png" alt="flag" /></SwiperSlide>
        <SwiperSlide><img src="/image/home/flag8.png" alt="flag" /></SwiperSlide>
       
      </Swiper>
   
  );
};

export default SlideFlag
