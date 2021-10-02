import React from "react";
import a from "../event/12.png";
import b from "../event/10.png";
import c from "../event/11.png";
import { Card } from "reactstrap";
import "./event.css";
import Heading from "../Heading/Heading";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Event = () => {
  return (
    <>
      <div className="container event pt-50">
        <Heading title="Events" cls="mb-30" />
        <div className="row">
          <div className="col-md-3">
            <Zoom>
              <div className="event1">
                <img className="eventImg" src={a} />
                <div className="event1Content">
                  <h1 className="eventText">THE 5TH ANNUAL USRCSRC</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
            </Zoom>
          </div>

          <div className="col-md-3">
            <Zoom>
              <div className="event2">
                <img className="eventImg2" src={b} />
                <div className="event1Content2">
                  <h1 className="eventText1">
                    UNDERGRADUATE STUDENT RESEARCH CONFERENCE
                  </h1>
                </div>
              </div>
            </Zoom>
          </div>

          <div className="col-md-6 ser">
            <Zoom>
              <h1 className="uae">
                UAE UNIVERSITY RECEIVES A 5-STAR RATING IN THE ONLINE LEARNING
              </h1>
              <img src={c} alt="imahe" className="imm" />
            </Zoom>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
