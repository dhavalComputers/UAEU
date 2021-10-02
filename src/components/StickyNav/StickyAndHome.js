import React, { useState } from "react";
// import StickyHeader from "./StickyHeader.js";
import Relative from "./Relative";
import { countryData } from "./Data";
import "./Table.css";
import "./StickyNav.css";
import Home from "../Home";

export default function StickyAndHome({ headers = [], data = [] }) {
  const { tableRef, isSticky } = Relative();
  const [display, setDisplay] = useState(false);
  const [countryDetails, setData] = useState({
    countryHistroy: null,
  });

  const openDetails = (e) => {
    countryData.forEach((details) => {
      if (details.country === e.target.textContent) {
        setData({
          countryHistroy: details.data,
        });
      }
    });
    setDisplay(true);
  };
  const closeDetails = () => {
    setDisplay(false);
  };
  const renderHeader = () => (
    <div id="navbar" className="">
      <a href="javascript:void(0)">STUDENT LIFE</a>
      <a href="javascript:void(0)">ADMISSIONS</a>
      <a href="javascript:void(0)">Research</a>
      <a href="javascript:void(0)">LIBRARY</a>
      <a href="javascript:void(0)">Alumni</a>
      <a class="active" href="javascript:void(0)">
        APPLY
      </a>
    </div>
  );
  return (
    <div>
      {isSticky && (
        <>
          <div id="navbar" className="sticky">
            <div className="blueBg"></div>
            <div className="stickyLinks">
              <a href="javascript:void(0)">STUDENT LIFE</a>
              <a href="javascript:void(0)">ADMISSIONS</a>
              <a href="javascript:void(0)">Research</a>
              <a href="javascript:void(0)">LIBRARY</a>
              <a href="javascript:void(0)">Alumni</a>
              <a class="active" href="javascript:void(0)">
                APPLY
              </a>
            </div>
          </div>
        </>
      )}

      <div ref={tableRef}>
        {renderHeader()}
        <>
          <Home />
        </>
      </div>

      <div
        className="country-details"
        style={{ display: display ? "block" : "none" }}
      >
        <p className="country-description">{countryDetails.countryHistroy}</p>
      </div>
    </div>
  );
}
