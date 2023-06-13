import React from "react";
import Slide from "./slide";

const Footer = () => {
  return (
    <footer className="clsfooter">
      <div className="clsfooter-content container">
        <div className="clsfooter-contact">
          <img src="/image/home/logo-footer.svg" alt="logo-footer" />
          <b>Liên Hệ</b>
          <ul>
            <li className="mt-10">
              Hotline : <span className="blue-primary">08 9913 6868</span>
            </li>
            <li className="mt-10">
              Email: <span className="blue-primary">cskh@doctorloan.vn</span>
            </li>
            <li className="mt-10">
              Website: <span className="blue-primary">www.doctorloan.vn</span>
            </li>
          </ul>
        </div>
        <div className="clsfooter-location">
          <div className="clsfooter-location-item1">
            <b className="blue-main text-uppercase">
              TRỤ SỞ : <br />
            </b>
            <p className="blue-main text-uppercase mt-30">
              <b>DOANH NGHIỆP KHOA HỌC VÀ CÔNG NGHỆ GIA THÁI DOCTORLOAN</b>
            </p>
            <p className="mt-30">
              GPDKKD: 0314397356 do sở KH & ĐT TP.HCM cấp ngày 11/05/2017
            </p>
            <p className="mt-30">
              Địa Chỉ: 9A, Tôn Thất Tùng, P. Phạm Ngũ Lão, Q.1, TP. Hồ Chí Minh
            </p>
            <b className="blue-main text-uppercase">
              nhà máy sản xuất sản phẩm DOCTORLOAN
            </b>
            <p className="mt-30">
              Thửa đất số 4786, Tờ bản đồ số 19, Khu phố Đông Chiêu, Phường Tân
              Đông Hiệp, Thành phố Dĩ An, Tỉnh Bình Dương
            </p>
          </div>
          <div className="clsfooter-location-item">
            <b className="blue-main text-uppercase">
              phòng khám đức phúc doctorloan
            </b>
            <p className="mt-30">
              Địa Chỉ: 9A, Tôn Thất Tùng, P. Phạm Ngũ Lão, Q.1, TP. Hồ Chí Minh
            </p>
            <b className="blue-main text-uppercase">showroom DOCTORLOAN</b>
            <p className="mt-30">
              Địa Chỉ: 9A, Tôn Thất Tùng, P. Phạm Ngũ Lão, Q.1, TP. Hồ Chí Minh
            </p>
          </div>
          <div className="clsfooter-location-item">
            <b className="blue-main text-uppercase">
              trung tâm nghiên cứu bệnh cơ xướng khớp DOCTORLOAN
            </b>
            <p className="mt-30">
              Địa Chỉ: Số 26 Trần Tử Bình, Phường Nghĩa Tân, Quận Cầu Giấy,TP.Hà
              Nội ĐT: 0944 151 915 - 0969 177 117 - 093 3333 669
            </p>
            <b className="blue-main text-uppercase">
              CÔNG TY TNHH GIA THÁI DOCTORLOAN <br />
              CHI NHÁNH PHÍA BẮC TẠI HÀ NỘI
            </b>
            <p className="mt-30">
              Địa Chỉ: Số 26 Trần Tử Bình, Phường Nghĩa Tân, Quận Cầu Giấy,TP.Hà
              Nội ĐT: 0944 151 915 - 0969 177 117 - 093 3333 669
            </p>
          </div>
        </div>
        <div className="clsfooter-connect">
          <div className="clsfooter-conect-social">
            <p>LIÊN KẾT VỚI CHÚNG TÔI</p>
          </div>
        </div>
      </div>
      <Slide/>
    </footer>
    
  );
};

export default Footer;
