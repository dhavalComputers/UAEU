import React from "react";
import "./KeyFacts.css";
import Background from "./KeyFacts.png";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import CountUp from "react-countup";

const KeyFacts = () => {
  return (
    <>
      <div
        className="container-fluid sec2"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="row">
          <div className="col-md-3">
            <Zoom left>
              <div className="title">
                <h1>Key Facts</h1>
              </div>
            </Zoom>
          </div>

          <div className="col-md-9">
            <div className="row">
              <Data
                first="Ranked"
                second="in the arab world"
                has="#"
                number="3"
              />
              <Data first="Ranked" second="worldwide" has="#" number="284" />
              <Data
                first="Ranked in the top"
                second="universities under"
                number="50"
              />
              <Data first="Granted" second="patents" number="118" plus="+" />
              <Data
                first="World class"
                second="research centers"
                number="9"
                plus="+"
              />
              <Data
                first="Students from"
                second="countries"
                number="284"
                plus="+"
              />
              <Data first="Total" second="colleges" number="9" plus="+" />
              <Data
                first="On campus"
                second="Students"
                number="13000"
                plus="+"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Data = (props) => {
  const { first, second, number, plus, has } = props;
  return (
    <div className="col-md-3 pb-40">
      <Zoom>
        <div className="data">
          <h6>{first}</h6>
          {/* <h1>{number}</h1> */}
          <h1>
            <span>{has}</span>
            <CountUp delay={5} end={number} />
            <span>{plus}</span>
          </h1>

          <h6>{second}</h6>
        </div>
      </Zoom>
    </div>
  );
};
export default KeyFacts;
