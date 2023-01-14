import React from "react";

const Skill = (props) => {
  const { Logo, label } = props;
  return (
    <div
      className="language-item d-flex justify-content-center align-items-center flex-column"
      data-aos="fade-left"
    >
      <div className="lang-icon d-flex justify-content-center align-items-center">
        <Logo />
      </div>
      <span className="lag-label">{label}</span>
    </div>
  );
};

export default Skill;
