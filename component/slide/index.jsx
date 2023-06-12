import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function SlidePage() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
            <div style={{ width:'100px',height:'100px', background:"#6ce"}}> Slide 1</div>
           </SwiperSlide>
        <SwiperSlide>  <div style={{ width:'100px',height:'100px', background:"#6ce"}}> Slide 1</div></SwiperSlide>
        <SwiperSlide>  <div style={{ width:'100px',height:'100px', background:"#6ce"}}> Slide 2</div></SwiperSlide>
        <SwiperSlide>  <div style={{ width:'100px',height:'100px', background:"#6ce"}}> Slide 3</div></SwiperSlide>
        <SwiperSlide>  <div style={{ width:'100px',height:'100px', background:"#6ce"}}> Slide 4</div></SwiperSlide>
        <SwiperSlide>  <div style={{ width:'100px',height:'100px', background:"#6ce"}}> Slide 5</div></SwiperSlide>
        <SwiperSlide>  <div style={{ width:'100px',height:'100px', background:"#6ce"}}> Slide 6</div></SwiperSlide>
        <SwiperSlide>  <div style={{ width:'100px',height:'100px', background:"#6ce"}}> Slide 7</div></SwiperSlide>
        <SwiperSlide>  <div style={{ width:'100px',height:'100px', background:"#6ce"}}> Slide 8</div></SwiperSlide>
      </Swiper>
    </>
  );
}
