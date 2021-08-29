import React from "react";
import Carousel from "react-elastic-carousel";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoReact,
} from "react-icons/io";

const Skils = () => {
  return (
    <div className="skils">
      <ul className="languages d-flex">
        <div className="language-item d-flex justify-content-center align-items-center flex-column">
          <div className="lang-icon d-flex justify-content-center align-items-center">
            <IoLogoJavascript />
          </div>
          <span className="lag-label">JavaScript</span>
        </div>
        <div className="language-item d-flex justify-content-center align-items-center flex-column">
          <div className="lang-icon d-flex justify-content-center align-items-center">
            <IoLogoCss3 />
          </div>
          <span className="lag-label">CSS</span>
        </div>
        <div className="language-item d-flex justify-content-center align-items-center flex-column">
          <div className="lang-icon d-flex justify-content-center align-items-center">
            <IoLogoHtml5 />
          </div>
          <span className="lag-label">HTML</span>
        </div>
      </ul>
    </div>
  );
};

export default Skils;
