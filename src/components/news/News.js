import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import "./style.css";
import Buttons, { ButtonsWhite } from "../button/Buttons";
import a from "../../images/news/1.png";
import b from "../../images/news/2.png";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const News = () => {
  return (
    <>
      <div className="container">
        <div className="row news">
          <h1 style={{ float: "left", display: "flex" }} className="mt-0">
            News
          </h1>
          <div className="col-md-4 MH">
            <Zoom bottom>
              <div>
                <img className="imgNews" src={a} />
                <div className="content">
                  <p>
                    College of Food and Agriculture at UAEU signs a Memorandum
                    of Understanding with CODE134 Technology LLC” for artificial
                    fertilization of date palms with drones
                  </p>
                  <ButtonsWhite title="KNOW MORE" />
                </div>
              </div>
            </Zoom>
          </div>
          <div className="col-md-8 MH">
            <Zoom bottom>
              <div>
                <img className="imgNews" src={b} />
                <div className="content">
                  <p>
                    UAEU marks this day through knowledge transfer and research
                    capacity building
                  </p>
                  <ButtonsWhite title="KNOW MORE" />
                </div>
              </div>
            </Zoom>
          </div>
          <div className="col-md-12 text-center mb-50">
            <Buttons title="DISCOVER MORE" color="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
