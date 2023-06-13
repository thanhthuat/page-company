import React from "react";
import SlideHeader from "./slide-header";

const Header = () => {
  return (
    <div className="clsheaderbg">
      <SlideHeader />
      <nav className="clsheader ">
        <div>
          <img src="/image/home/logo-header.png" alt="logo" />
        </div>
        <ul className="clsheader-list">
          <li className=" text-uppercase">Trang chủ</li>
          <li className=" text-uppercase"> giới thiệu</li>
          <li className=" text-uppercase">đức phúc doctorloan</li>
          <li className=" text-uppercase">showroom</li>
          <li className=" text-uppercase">sản phẩm</li>
          <li className=" text-uppercase">tin tức</li>
          <li className=" text-uppercase">Liên hệ</li>
        </ul>
        <div lassName="clsheader-user">
          <div lassName="clsheader-uer__avatar"></div>
          <div lassName="clsheader-uer__shop"></div>
        </div>
        <div lassName="clsheader-search"></div>
        <div lassName="clsheader-langue"></div>
      </nav>
      <div className="clsheaderbg-content">
        <h1 className="clsheaderbg-content__title">
          GIẢI PHÁP <br /> CHO CỘT SỐNG KHỎE
        </h1>
        <h6 className="clsheaderbg-content__description">
          SÁNG CHẾ CỦA NGƯỜI VIỆT NAM <br /> MANG TÍNH ĐỘT PHÁ CHO SÚC KHỎE CỘT
          SỐNG <br />
          ĐƯỢC BẢO HỘ ĐỘC QUYỀN TRÊN 60 QUỐC GIA
        </h6>
      </div>
      <div className="clsheaderbg-doctor">
        <img src="/image/home/doctor.png" alt="" />
      </div>
      <div className="clsheaderbg-facity">
        <div className="clsheaderbg-facity1">
          <p>
            <b>Bác sĩ PHẠM THỊ KIM LOAN</b>
            <span className=""> NHÀ SÁNG LẬP - CHỦ TỊCH </span>
            <b className="">ĐỨC PHÚC DOCTORLOAN</b>
          </p>
        </div>
        <div className="clsheaderbg-facity2">
          <img src="/image/home/logo-duc.png" />
          <p>
            Phòng khám <br /> ĐỨC PHÚC <br /> DOCTORLOAN
          </p>
        </div>
        <div className="clsheaderbg-facity3">
          <img src="/image/home/logo-chain.png" />
          <p>
            R&D/IPRs <br />
            <small>
              Research and Development <br /> Intellectual property rights
            </small>
          </p>
        </div>

        <div className="clsheaderbg-facity4">
          <img src="/image/home/logo-doctor.png" />
          <p>
            Sản phẩm <br />
            DOCTORLOAN
          </p>
        </div>

        <div className="clsheaderbg-facity1">
          <img src="" />
          <p>
            Nhà máy <br />
            sản xuất <br />
            DOCTORLOAN
          </p>
        </div>

        <div className="clsheaderbg-facity1">
          <img src="" />
          <p>
            TƯ VẤN NGAY <br />
            08 9913 6868 <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
