import React from "react";
import "./LifeatAlAin.css";

import a from "./1.png";
import b from "./2.png";
import c from "./3.png";
import Heading from "../Heading/Heading";
import Buttons, { ButtonsWhite } from "../button/Buttons";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const LifeatAlAin = () => {
  return (
    <>
      <div className="container-fluid Research Career11 Life">
        <div className="row">
          <Heading title="Life at Al Ain" cls="pl-80 mb-30" />
          <div className="col-md-6">
            <Zoom bottom>
              <img className="LifeImg" src={a} />
            </Zoom>
          </div>
          <div className="col-md-6">
            <ResearchCard
              title="CAMPUS"
              title2="EXPERIENCE"
              title3="Lorem ipsum dolor"
              detail="sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."
            />
          </div>
        </div>
        <div className="row bottomSec">
          <div className="col-md-6">
            <ResearchCard
              title="FACILITIES"
              title3="Lorem ipsum dolor"
              detail="sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."
            />
          </div>
          <div className="col-md-6">
            <Zoom bottom>
              <img className="LifeImg" src={b} />
            </Zoom>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Zoom bottom>
              <img className="LifeImg" src={c} />
            </Zoom>
          </div>
          <div className="col-md-6">
            <ResearchCard
              title="SUPPORT"
              title3="Lorem ipsum dolor"
              detail="sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."
            />
          </div>
        </div>
      </div>
    </>
  );
};

const ResearchCard = (props) => {
  const { title, title2, title3, detail } = props;
  return (
    <>
      <Zoom>
        <div className="researchCard">
          <h1 className="title">{title}</h1>
          <h2 className="title2">{title2}</h2>
          <h5 className="title3">{title3}</h5>
          <p className="mb-0">{detail}</p>
          <Buttons title="DISCOVER MORE" />
        </div>
      </Zoom>
    </>
  );
};

export default LifeatAlAin;
