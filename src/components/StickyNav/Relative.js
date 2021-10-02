import { useState, useEffect, useRef, useCallback } from "react";

const Relative = (defaultSticky = false) => {
  const [isSticky, setIsSticky] = useState(defaultSticky);
  const tableRef = useRef(null);
  const toggleSticky = useCallback(
    ({ top, bottom }) => {
      // console.log("bottom==" + bottom);
      // console.log("top==" + top);
      // if (top <= 0 && bottom > 2 * 68) {

      if (top <= 100) {
        !isSticky && setIsSticky(true);
      } else {
        if (top <= 650) {
          var percentage = Math.round((650 * 80) / top);
          console.log("percentage", percentage);
          if (percentage >= 100) {
            percentage = 100;
          }
          var margin = (percentage * 7.5) / 100;

          if (percentage <= 83) {
            margin = 0;
          }
          console.log("margin==", margin);
          document.getElementById("navbar").style.width = percentage + "%";
          document.getElementById("navbar").style.backgroundColor = "white";
          document.getElementById("navbar").style.padding = "0 " + margin + "%";
        }
        console.log("top==" + top);
        isSticky && setIsSticky(false);
      }
    },
    [isSticky]
  );
  useEffect(() => {
    const handleScroll = (event) => {
      // console.log("onscrool");
      let scrollTop = event.srcElement.body.scrollTop;
      // console.log("scrollTop" + scrollTop, event);

      toggleSticky(tableRef.current.getBoundingClientRect());
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggleSticky]);
  return { tableRef, isSticky };
};
export default Relative;

// import React, { Fragment, useEffect, useRef, useState } from "react";
// // import Sticky from './sticky';
// import "./StickyNav.css";
// import Sliders from "../Slider/Sliders";

// const Relative = () => {
//   const [isSticky, setSticky] = useState(false);
//   const ref = useRef(null);
//   const handleScroll = () => {
//     if (ref.current) {
//       setSticky(ref.current.getBoundingClientRect().top <= 0);
//       console.log("handleScroll == " + ref.current.getBoundingClientRect().top);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       //   window.removeEventListener('scroll', () => handleScroll);
//     };
//   }, []);

//   return (
//     <Fragment>
//       {/* <p>Lorem ipsum...</p> */}

//       <Sliders />
//       <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
//         {/* <Sticky /> */}
//         <div id="navbar" className="featuresBarContainer">
//           <a href="javascript:void(0)">STUDENT LIFE</a>
//           <a href="javascript:void(0)">ADMISSIONS</a>
//           <a href="javascript:void(0)">Research</a>
//           <a href="javascript:void(0)">LIBRARY</a>
//           <a href="javascript:void(0)">Alumni</a>
//           <a class="active" href="javascript:void(0)">
//             APPLY
//           </a>
//         </div>
//       </div>
//       {/* <p>Lorem ipsum...</p> */}
//     </Fragment>
//   );
// };

// export default Relative;
