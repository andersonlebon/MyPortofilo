import React from "react";

const Services = () => {
  return (
    <section className="about-section text-white d-flex justify-content-center align-items-center">
      <div className="aboutme d-flex align-items-start about-text w-50 p-5">
        <h3 className=" vertical-text">My Services</h3>
        <div className="d-flex flex-column align-items-between">
          <h4>About me</h4>
          <p className="text-bold">
            I LIKE EASY
            <span className="text-yellow"> TO MAKE </span>
            <br />
            THINGS AND FUN
          </p>
          <ul className="p-small d-flex flex-column"></ul>
        </div>
      </div>
      <div className="experience text-small w-50 p-5"></div>
    </section>
  );
};

export default Services;
