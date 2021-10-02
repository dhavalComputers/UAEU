import React from "react";
import Heading from "../Heading/Heading";
import "./Partners.css";
import a1 from "./a1.png";
import a2 from "./a2.png";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Partners = () => {
  return (
    <>
      <div className="container ss11 pt-50 pb-60 Partners">
        <div className="row">
          <Heading title="OUR Partners" color="blue" cls=" mb-30 text-center" />

          <div className="col-md-6">
            <div className="title">
              <Items title="EDUCATION INSTITUTE" />
              <Items title="MINISTRY" />
              <Items title="COMMUNITY" />
              <Items title="RESEARCH PARTNERS" />
              <Items title="ORGANIZATION" />
            </div>
          </div>

          <div className="col-md-6">
            <Zoom>
              <div className="pt-70">
                <h5 className="headding">PUBLIC & PRIVATE ORGANIZATIONS</h5>
                <img src={a2} alt="imagesss" className="imgess" />
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </>
  );
};

const Items = (props) => {
  const { title } = props;
  return (
    <>
      <Zoom bottom>
        <div className="border-bottom t1">
          <h5>{title}</h5>
          <img src={a1} alt="images" className="image1" />
        </div>
      </Zoom>
    </>
  );
};

export default Partners;
