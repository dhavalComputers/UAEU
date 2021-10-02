import React from "react";
import Buttons, { ButtonsWhite } from "../button/Buttons";
import "./Calendar.css";
import a from "./1.png";
import b from "./2.png";
import c from "./3.png";
import d from "./4.png";
import Heading from "../Heading/Heading";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Calendar = () => {
  return (
    <>
      <div className="container pt-60 Calen">
        <div className="row" style={{ height: "100%" }}>
          <Heading title="Calendar" cls="mb-30" />
          <Cards
            title="Lorem ipsum dolor"
            detail=" sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
            image={a}
            date="JULY 14"
            cls="pr-0"
          />
          <CardsRevers
            title="Lorem ipsum dolor"
            detail=" sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
            image={b}
            date="AUGUST 14"
            cls="p-0"
          />
          <Cards
            title="Lorem ipsum dolor"
            detail=" sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
            image={c}
            date="SEPTEMEBER 14"
            cls="p-0"
          />
          <CardsRevers
            title="Lorem ipsum dolor"
            detail=" sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
            image={d}
            date="OCTOBER 10"
            cls="pl-0"
          />
        </div>
      </div>
    </>
  );
};

const CardsRevers = (props) => {
  const { title, detail, image, date, cls } = props;
  return (
    <>
      <div className={`col-md-3 ${cls}`}>
        <Zoom bottom>
          <div className="card text-center" style={{ height: "100%" }}>
            <div className="date">
              <h3>{date}</h3>
            </div>
            <div className="calBody">
              <div className="card-body text-left pr-10 reverse">
                <h5 className="card-title">{title}</h5>
                <p className="card-text mb-0">{detail}</p>
                <Buttons title="KNOW MORE" />
              </div>
              <img className="card-img-bottom" src={image} />
            </div>
          </div>
        </Zoom>
      </div>
    </>
  );
};
const Cards = (props) => {
  const { title, detail, image, date, cls } = props;
  return (
    <>
      <div className={`col-md-3 ${cls}`}>
        <Zoom bottom>
          <div className="card text-center" style={{ height: "100%" }}>
            <div className="date">
              <h3>{date}</h3>
            </div>
            <div className="calBody">
              <img className="card-img-top" src={image} />
              <div className="card-body text-left pr-10">
                <h5 className="card-title">{title}</h5>
                <p className="card-text mb-0">{detail}</p>
                <Buttons title="KNOW MORE" />
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </>
  );
};
export default Calendar;
