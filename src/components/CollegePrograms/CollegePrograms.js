import React from "react";
import Heading from "../Heading/Heading";
import "./CollegePrograms.css";
import a1 from "./a1.png";
import a2 from "./a2.png";
import a from "./1.png";
import programBg from "./programBg.png";
import Buttons, { ButtonsRed } from "../button/Buttons";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CollegePrograms = () => {
  return (
    <>
      <div className="container-fluid pt-40 pb-60 College">
        <div className="row pl-50 pr-50">
          <div className="col-md-12">
            <Heading
              title="COLLEGES & PROGRAMS"
              color="blue"
              cls="text-center titleBg"
            />
          </div>
          <div className="col-md-12">
            <div className="tabs active">
              <h1>UNDER GRADUATE PROGRAMS</h1>
            </div>
            <div className="tabs">
              <h1>GRADUATE PROGRAMS</h1>
            </div>
          </div>
          {/* 1 */}
          <div className="col-md-7" style={{ paddingTop: 1 }}>
            <div className="row" style={{ height: "100%" }}>
              <Tabs>
                <div className="col-md-12" style={{ height: "100%" }}>
                  <div className="col1" style={{ height: "100%" }}>
                    <TabList>
                      <Tab>
                        <Items title="College Of Business & Economics" />
                      </Tab>
                      <Tab>
                        <Items title="College Of Education" />
                      </Tab>
                      <Tab>
                        <Items title="College Of Engineering" />
                      </Tab>
                      <Tab>
                        <Items title="College Of Food & Agriculture" />
                      </Tab>
                      <Tab>
                        <Items title="College Of HUMANITY & Social Sciences" />
                      </Tab>
                      <Tab>
                        <Items title="College Of Medicine & Health Sciences" />
                      </Tab>
                      <Tab>
                        <Items title="College Of Science" />
                      </Tab>
                      <Tab>
                        <Items title="General Education" />
                      </Tab>
                    </TabList>
                    {/* 1 */}
                    <TabPanel>
                      <div className="col2" style={{ height: "100%" }}>
                        <Items title="Bachelor Of Accounting" />
                        <Items title="Minor In Entrepreneurship" />
                        <Items title="Bachelor Of Business Administration" />
                        <Items title="Bachelor Of Economics" />
                        <Items title="Bachelor Of Finance And Banking" />
                        <Items title="Bachelor Of Science In Statistics & Data Analytics" />
                      </div>
                    </TabPanel>
                    {/* 2 */}
                    <TabPanel>
                      <div className="col2" style={{ height: "100%" }}>
                        <Items title="Text will come here ..1" />
                        <Items title="Text will come here ..2" />
                      </div>
                    </TabPanel>
                    {/* 3 */}
                    <TabPanel>
                      <div className="col2" style={{ height: "100%" }}>
                        <Items title="Text will come here ..3" />
                        <Items title="Text will come here ..4" />
                      </div>
                    </TabPanel>
                  </div>
                </div>
                {/* <div
                  className="col-md-6"
                  style={{ backgroundColor: "#e5e6e6" }}
                >
                  <TabPanel>
                    <div className="col2" style={{ height: "100%" }}>
                      <Items title="Bachelor Of Accounting" />
                      <Items title="Minor In Entrepreneurship" />
                      <Items title="Bachelor Of Business Administration" />
                      <Items title="Bachelor Of Economics" />
                      <Items title="Bachelor Of Finance And Banking" />
                      <Items title="Bachelor Of Science In Statistics & Data Analytics" />
                    </div>
                  </TabPanel>
                </div> */}
              </Tabs>
            </div>
          </div>
          {/* 2 */}
          <div className="col-md-5 pl-0" style={{ paddingTop: 1 }}>
            <div className="imgSec">
              <div className="row">
                <div className="col-md-12">
                  <img className="mainImg" src={a} />
                </div>

                <div className="content1">
                  <div className="col-md-12">
                    <h4>Program Synopsys</h4>
                    <p>
                      The department offers one Bachelor’s degree in Accounting.
                      The program is designed to provide comprehensive
                      accounting education for students interested in learning
                      about preparation of businesses financial statements and
                      how these are audited; use of accounting information for
                      managerial decisions; use of advanced management.
                    </p>
                  </div>
                  <div className="row">
                    <Duration title="DURATION" detail="1 year" />
                    <Duration title="LANGUAGE" detail="Arabic/English" />
                    <Duration title="LOCATION" detail="University Campus" />
                    <Duration title="INTAKE" detail="July 2021" />
                    <div className="col-md-12 text-center">
                      <ButtonsRed title="DISCOVER MORE" cls="mt-10 mb-20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="programs"
              style={{
                backgroundImage: `url(${programBg})`,
                backgroundSize: "100%",
              }}
            >
              <h3 className="mb-15">FIND YOUR PROGRAM</h3>
              <div className="row">
                <div className="col-md-2">
                  <h3 className="pt-20">FILTER BY</h3>
                </div>
                <Selects lable="Areas" title="All the areas" />
                <Selects lable="Disciplines" title="All the disciplines" />

                <div className="col-md-4 cars">
                  <h4>Program Type</h4>
                  <a>Under Graduate</a>
                  <a>Graduate</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Selects = (props) => {
  const { title, lable } = props;
  return (
    <>
      <div className="col-md-3 cars">
        <h4>{lable}</h4>
        <select name="cars" id="cars">
          <option value={title}>{title}</option>
          <option value={title}>{title}</option>
        </select>
      </div>
    </>
  );
};
const Duration = (props) => {
  const { title, detail } = props;
  return (
    <>
      <div className="col-md-4 mb-15">
        <div className="dura">
          <h2>{title}</h2>
          <h5>{detail}</h5>
        </div>
      </div>
    </>
  );
};
const Items = (props) => {
  const { title } = props;
  return (
    <>
      <div className="border-bottom t1">
        <h5>{title}</h5>
        <img src={a1} alt="images" className="image1" />
      </div>
    </>
  );
};

export default CollegePrograms;
