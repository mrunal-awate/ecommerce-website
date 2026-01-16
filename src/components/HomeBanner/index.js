import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeBanner = () => {                        // HomeBanner
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <div className="homeBannerSection">                        // homeBannerSection       
      <Slider {...settings}>
        {
          <div className="item">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h31/hbd/33214877761566/Adidas-web_g7-h8t_57--gui.jpg"
              alt="#"
              className="w-100"
            ></img>
          </div>
        }
        {
          <div className="item">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h0a/haa/33279581913118/casio-fossil-web600_8--ek.jpg"
              alt="#"
              className="w-100"
            ></img>
          </div>
        }
        {
          <div className="item">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h1e/hab/33261367164958/tommy-hilfiger-web--2024-08--02.jpg"
              alt="#"
              className="w-100"
            ></img>
          </div>
        }
        {
          <div className="item">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h25/h93/33278735220766/Tommy-hilfiger-web_060824.jpg"
              alt="#"
              className="w-100"
            ></img>
          </div>
        }
        {
          <div className="item">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/hed/h7f/33134901592094/Lid-Banner_Web--2024--06--06--new_j--w92.jpg"
              alt="#"
              className="w-100"
            ></img>
          </div>
        }
      </Slider>
    </div>
  );
};

export default HomeBanner;
