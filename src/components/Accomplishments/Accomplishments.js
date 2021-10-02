import React from "react";
import Buttons, { ButtonsWhite } from "../button/Buttons";
import "./Accomplishments.css";
import a from "./1.png";
import b from "./2.png";
import c from "./3.png";
import Heading from "../Heading/Heading";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Accomplishments = () => {
  return (
    <>
      <div className="container pt-40">
        <div className="row">
          <Heading title="Accomplishments" cls="text-center mb-30" />
          <Cards
            title="Person’s Name"
            detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos"
            image={a}
            department="Business & Economics"
          />
          <Cards
            title="Person’s Name"
            detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos"
            image={b}
            department="Mass Communication"
          />
          <Cards
            title="Person’s Name"
            detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos"
            image={c}
            department="Law"
          />
        </div>
      </div>
    </>
  );
};

const Cards = (props) => {
  const { title, detail, image, department } = props;
  return (
    <>
      <div className="col-md-4">
        <Zoom bottom>
          <div className="card text-center">
            <img className="card-img-top" src={image} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h5 className="card-Department">DEPARTMENT</h5>
              <h5 className="card-Department1">{department}</h5>
              <p className="card-text mb-0">{detail}</p>
              <Buttons title="KNOW MORE" />
            </div>
          </div>
        </Zoom>
      </div>
    </>
  );
};
export default Accomplishments;
