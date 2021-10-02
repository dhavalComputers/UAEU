import { getRules } from "axe-core";
import React from "react";
import Heading from "../Heading/Heading";
import footerBg1 from "./footerBg1.png";
import footerBg2 from "./footerBg2.png";
import logo from "./logo.png";
import social from "./social.png";
import UAE from "./UAE.png";
import line from "./line.png";
import "./Footer.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid pt-50 pb-30 Footer"
        style={{ backgroundColor: "#192B3B" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <h1>Quick Links</h1>

                <div className="col-md-5">
                  <Links title="Apply" path="" />
                  <Links title="Colleges" path="" />
                  <Links title="Research" path="" />
                  <Links title="Undergraduate programs" path="" />
                  <Links title="Graduate Programs" path="" />
                </div>
                <div className="col-md-3">
                  <Links title="Faculty" path="" />
                  <Links title="Alumni" path="" />
                  <Links title="Leadership" path="" />
                  <Links title="Employment" path="" />
                  <Links title="Policies" path="" />
                </div>
                <div className="col-md-3">
                  <Links title="Support" path="" />
                  <Links title="Publications" path="" />
                  <Links title="News" path="" />
                  <Links title="Media" path="" />
                  <Links title="Maps" path="" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <h6 className="footerTitle">CONTACT US</h6>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Zoom>
                  <div className="logoSec">
                    <img className="UAE" src={UAE} />
                    <img className="social" src={social} />
                  </div>

                  <img className="logo" src={logo} />
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterBottom />
    </>
  );
};

const FooterBottom = () => {
  return (
    <>
      <div
        className="container-fluid pt-30 pb-30 Footer"
        style={{ backgroundColor: "rgb(0 23 43)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <FbottomLink title="Feedback" path="" />
              <FbottomLink title="Privacy Policy" path="" />
              <FbottomLink title="Terms and Conditions" path="" />
              <FbottomLink title="Copyright" path="" />
              <FbottomLink title="Disclaimer Happiness" path="" />
              <FbottomLink title="Formula Sitemap" path="" />
              <FbottomLink title="Stats" path="" />
              <FbottomLink
                title="©2017 United Arab Emirates University"
                path=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FbottomLink = (props) => {
  const { title, path } = props;
  return (
    <>
      <Zoom left>
        <div className="FBlinks">
          <a href={path} className="FBlink">
            {title}
          </a>
          <img src={line} />
        </div>
      </Zoom>
    </>
  );
};

const Links = (props) => {
  const { title, path } = props;
  return (
    <>
      <Zoom bottom>
        <a href={path} className="qlink">
          {title}
        </a>
      </Zoom>
    </>
  );
};

export default Footer;
