import React from "react";
import "./Research.css";

import a from "./1.png";
import b from "./2.png";
import c from "./3.png";
import Buttons, { ButtonsWhite } from "../button/Buttons";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Research = () => {
  return (
    <>
      <div className="container-fluid Research threeImagesSec">
        <div
          className="row"
          // style={{ justifyContent: "flex-end" }}
        >
          <Card title="Research Excellence" image={c} />
          <ImageContent
            title="Research Excellence"
            detail="Text will come here .. Text will come here .. Text will come here .. "
          />
          <Card title="Research Support" image={b} />
          <ImageContent
            title="Research Support"
            detail="Text will come here .. Text will come here .. Text will come here .. "
          />
          <Card title="Research Centers" image={a} />
          <ImageContent
            title="Research Centers"
            detail="Text will come here .. Text will come here .. Text will come here .. "
          />
          <div className="col-md-6 First pull-left">
            <div className="researchCard">
              <h1 className="title">RESEARCH</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam.
              </p>
              <Buttons title="DISCOVER MORE" />
            </div>
          </div>
        </div>
      </div>
      {/* <Research1 /> */}
    </>
  );
};

const Card = (props) => {
  const { title, image } = props;
  return (
    <>
      {/* <Zoom right> */}
      <div className="col-md-2 ImageSection pull-right">
        <div className="">
          <img src={image} className="img-responsive" />
          <h1 className="imageTitle">{title}</h1>
        </div>
      </div>
      {/* </Zoom> */}
    </>
  );
};
const ImageContent = (props) => {
  const { title, detail } = props;
  return (
    <>
      {/* <Zoom right> */}
      <div className="col-md-6 Second">
        <div className="researchCard">
          <h1 className="title">{title}</h1>
          <p>{detail}</p>
          <Buttons title="DISCOVER MORE" />
        </div>
      </div>
      {/* </Zoom> */}
    </>
  );
};

const Research1 = () => {
  return (
    <>
      <div className="container-fluid Research Research1 threeImagesSec">
        <div className="row" style={{ justifyContent: "flex-end" }}>
          <div className="col-md-6">
            <div className="researchCard">
              <h1 className="title">RESEARCH</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam.
              </p>
              <Buttons title="DISCOVER MORE" />
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
};

export default Research;
