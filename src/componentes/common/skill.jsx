import React from "react";

const Skill = (props) => {
  return (
    <div className="language-item d-flex justify-content-center align-items-center flex-column">
      <div className="lang-icon d-flex justify-content-center align-items-center">
        <IoLogoJavascript />
      </div>
      <span className="lag-label">JavaScript</span>
    </div>
  );
};

export default Skill;
