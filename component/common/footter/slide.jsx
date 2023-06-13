import React from "react";
import SlideFlag from "./slide-flag";

const Slide = () => {
  return (
    <div className="clsslidefooter">
      <div className="clsslidefooter-content container">
        <p className="clsslidefooter-text ">
          ©2023. <b>Công ty TNHH GIA THÁI DOCTORLOAN.</b> GPDKKD: 0314397356 do
          sở KH & ĐT TP.HCM cấp ngày 11/05/2017. <br /> Địa chỉ: 9A Tôn Thất
          Tùng, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.
          MST: 0314397356
        </p>
        <div className="clsslidefooter-flag ">
          <p className="clsslidefooter-flag__title ">
            <b>
              SẢN PHẨM DOCTORLOAN ĐƯỢC CẤP BẰNG SÁNG CHẾ ĐỘC QUYỀN HƠN 60 QUỐC
              GIA
            </b>
          </p>
          <SlideFlag />
        </div>
      </div>
    </div>
  );
};

export default Slide;
