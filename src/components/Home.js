import React from "react";
import styled from "styled-components";
import ImgSlider from "./Sliders/ImgSlider";
import News from "./news/News";
import Research from "./Research/Research";
import BuildCareer from "./BuildCareer/BuildCareer";
import LifeatAlAin from "./LifeatAlAin/LifeatAlAin";
import KeyFacts from "./KeyFacts/KeyFacts";
import Event from "./event/Event";
import Accomplishments from "./Accomplishments/Accomplishments";
import SocialWall from "./SocialWall/SocialWall";
import Partners from "./Partners/Partners";
import Calendar from "./Calendar/Calendar";
// import Forms from "./Forms/Forms";
import CollegePrograms from "./CollegePrograms/CollegePrograms";

function Home() {
  return (
    <>
      {/* <Container> */}
      {/* <ImgSlider /> */}

      <News />
      <KeyFacts />
      <Research />
      <BuildCareer />
      <CollegePrograms />
      <LifeatAlAin />
      <Event />
      <Accomplishments />
      <Calendar />
      <SocialWall />
      {/* <Forms /> */}
      <Partners />
      {/* </Container> */}
    </>
  );
}

export default Home;

// const Container = styled.main`
//   min-height: calc(100vh - 70px);
//   padding: 0 calc(3.5vw + 5px);
//   position: relative;

//   &:before {
//     background: url("/images/home-background.png") center center / cover
//       no-repeat fixed;
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: -1;
//   }
// `;
