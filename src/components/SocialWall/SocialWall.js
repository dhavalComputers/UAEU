import React from "react";
import Buttons, { ButtonsWhite } from "../button/Buttons";
import "./SocialWall.css";
import a from "./1.png";
import b from "./2.png";
import c from "./3.png";
import Heading from "../Heading/Heading";
import instagram from "./instagram.png";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const SocialWall = () => {
  return (
    <>
      <div className="container Social pt-40 pb-60">
        <div className="row">
          <Heading title="Social Wall" cls="text-center mb-30" color="blue" />
          <Cards
            detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos"
            image={a}
            department="Business & Economics"
          />
          <Cards
            detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos"
            image={b}
            department="Mass Communication"
          />
          <Cards
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
            <img className="card-img-top1" src={image} />
            <div className="card-body">
              <p className="card-text mb-15">{detail}</p>
              <img className="instagram text-right" src={instagram} />
            </div>
          </div>
        </Zoom>
      </div>
    </>
  );
};
export default SocialWall;
