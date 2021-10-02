// 1.14 min ImgSlider.js

import React from "react";

// import './App.css';
import "./css/Star.css";

import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import ImgSlider from "./components/Sliders/ImgSlider";
import StickyAndHome from "./components/StickyNav/StickyAndHome";

import { HeaderTable, tableData } from "./components/StickyNav/Data";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <ImgSlider />
      <StickyAndHome headers={HeaderTable} data={tableData} />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
