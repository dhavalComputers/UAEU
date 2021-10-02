import React from "react";
import "./BuildCareer.css";

import a from "./1.png";
import b from "./2.png";

import Buttons, { ButtonsWhite } from "../button/Buttons";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const BuildCareer = () => {
  return (
    <>
      <div className="container-fluid Research Career mb-60">
        <div className="row">
          <div className="col-md-6">
            <Zoom left>
              <img className="CareerImg" src={a} />
            </Zoom>
          </div>
          <div className="col-md-6">
            <Zoom>
              <div className="researchCard">
                <h1 className="title">Build Your Career</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam.
                </p>
                <Buttons title="DISCOVER MORE" />
              </div>
            </Zoom>
          </div>
        </div>
        <div className="row bottomSec">
          <div className="col-md-6">
            <Zoom>
              <div className="researchCard">
                <h1 className="title">International Recognition</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam.
                </p>
                <Buttons title="DISCOVER MORE" />
              </div>
            </Zoom>
          </div>
          <div className="col-md-6" style={{ height: 475 }}>
            <Zoom right>
              <img className="CareerImg" src={b} />
            </Zoom>
          </div>
        </div>
      </div>
    </>
  );
};

const Card = (props) => {
  const { title, image } = props;
  return (
    <div className="col-md-2">
      <img src={image} className="img-responsive" />
      <h1 className="imageTitle">{title}</h1>
    </div>
  );
};

export default BuildCareer;
