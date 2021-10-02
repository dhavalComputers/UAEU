import React from "react";
import "./button.css";
import btnArrow from "../../images/btnArrow.png";
import btnImgWhite from "../../images/btnImgWhite.png";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Buttons = (props) => {
  const { title, cls } = props;
  return (
    <>
      <Zoom bottom>
        <a className={`myBtn btn btn-outline-secondary mt-20  `}>
          {title}
          <img className="myBtnimg" src={btnArrow} />{" "}
        </a>
      </Zoom>
    </>
  );
};
export const ButtonsWhite = (props) => {
  const { title, cls } = props;
  return (
    <>
      <Zoom bottom>
        <a className={`myBtn btn btn-outline-white mt-20  `}>
          {title}
          <img className="myBtnimg" src={btnImgWhite} />{" "}
        </a>
      </Zoom>
    </>
  );
};
export const ButtonsRed = (props) => {
  const { title, cls } = props;
  return (
    <>
      <Zoom bottom>
        <a className={`myBtn btn btn-outline-red mt-20 ${cls}  `}>
          {title}
          <img className="myBtnimg" src={btnImgWhite} />{" "}
        </a>
      </Zoom>
    </>
  );
};

export default Buttons;
