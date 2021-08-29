import React from "react";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from "react-icons/io";

const Skils = () => {
  return (
    <div className="skils">
      <ul className="languages">
        <li className="language-item">
          <IoLogoCss3 />
        </li>
        <li className="language-item">
          <IoLogoJavascript />
        </li>
        <li className="language-item">
          <IoLogoHtml5 />
        </li>
      </ul>
    </div>
  );
};

export default Skils;
