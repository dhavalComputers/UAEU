import React from "react";
import "./StickyNav.css";

const StickyNav = () => {
  return (
    <>
      <div id="navbar" className="featuresBarContainer">
        <a href="javascript:void(0)">STUDENT LIFE</a>
        <a href="javascript:void(0)">ADMISSIONS</a>
        <a href="javascript:void(0)">Research</a>
        <a href="javascript:void(0)">LIBRARY</a>
        <a href="javascript:void(0)">Alumni</a>
        <a class="active" href="javascript:void(0)">
          APPLY
        </a>
      </div>
    </>
  );
};

export default StickyNav;
