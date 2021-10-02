import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../custom.css";
import "./Slider.css";
import slider from "../../images/slider/slider1.png";
import Buttons, { ButtonsWhite, ButtonsRed } from "../button/Buttons";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    // <Carousel {...settings}>
    //   <Wrap>
    //     <img src="../images/slider/slider1.png" alt="" />
    //   </Wrap>
    //   <Wrap>
    //     <img src="../images/slider/slider1.png" alt="" />
    //   </Wrap>
    // </Carousel>
    <>
      <div
        className="sliderBackground"
        style={{ backgroundImage: `url(${slider})` }}
      >
        {/* <Sliders className="sliderImg" src={slider} alt="" /> */}
      </div>
      <Fade left>
        <div className="sliderContent">
          <h1>Develop your skills ability and talents</h1>
          <Buttons title="DISCOVER MORE" />
        </div>
      </Fade>
    </>
  );
}

export default ImgSlider;

// const Carousel = styled(Slider)`
//   width: 100%;
// `;

const Sliders = styled.img`
  width: 100%;
`;

// const Wrap = styled.div`
//   min-height: calc(100vh - 0px);

//   position: relative;

//   width: 100%;
//   img {
//     width: 100%;
//   }
// `;
