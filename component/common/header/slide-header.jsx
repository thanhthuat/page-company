import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
//
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const SlideHeader = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="clsslideheader"
    >
      <SwiperSlide>
        <div className="clsslideheader-item">
          <p className="clsslideheader-item__title">
            15/06/2023 sự kiện ra mắt ghế doctorLoan N85
          </p>
          <button className="clsslideheader-item__button text-uppercase">Xem thêm</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="clsslideheader-item">
          <p className="clsslideheader-item__title">
            15/06/2023 sự kiện ra mắt ghế doctorLoan N85
          </p>
          <button className="clsslideheader-item__button text-uppercase">Xem thêm</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="clsslideheader-item">
          <p className="clsslideheader-item__title">
            15/06/2023 sự kiện ra mắt ghế doctorLoan N85
          </p>
          <button className="clsslideheader-item__button text-uppercase">Xem thêm</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="clsslideheader-item">
          <p className="clsslideheader-item__title">
            15/06/2023 sự kiện ra mắt ghế doctorLoan N85
          </p>
          <button className="clsslideheader-item__button text-uppercase">Xem thêm</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="clsslideheader-item">
          <p className="clsslideheader-item__title">
            15/06/2023 sự kiện ra mắt ghế doctorLoan N85
          </p>
          <button className="clsslideheader-item__button text-uppercase">Xem thêm</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="clsslideheader-item">
          <p className="clsslideheader-item__title">
            15/06/2023 sự kiện ra mắt ghế doctorLoan N85
          </p>
          <button className="clsslideheader-item__button text-uppercase">Xem thêm</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="clsslideheader-item">
          <p className="clsslideheader-item__title">
            15/06/2023 sự kiện ra mắt ghế doctorLoan N85
          </p>
          <button className="clsslideheader-item__button text-uppercase">Xem thêm</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="clsslideheader-item">
          <p className="clsslideheader-item__title">
            15/06/2023 sự kiện ra mắt ghế doctorLoan N85
          </p>
          <button className="clsslideheader-item__button text-uppercase">Xem thêm</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="clsslideheader-item">
          <p className="clsslideheader-item__title">
            15/06/2023 sự kiện ra mắt ghế doctorLoan N85
          </p>
          <button className="clsslideheader-item__button text-uppercase">Xem thêm</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SlideHeader;
