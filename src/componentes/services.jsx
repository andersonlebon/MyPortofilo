import React from "react";
import caleb from "../images/gitprof.png";

const Services = () => {
  return (
    <section className="services text-white d-flex justify-content-center">
      <div className="d-flex align-items-start about-text w-50 pr-5">
        <h3 className=" vertical-text">SERVICES</h3>
        <div className="d-flex flex-column align-items-between">
          <h4>My Services</h4>
          <p className="text-bold">
            I LIKE <span className="text-yellow"> TO MAKE </span> THINGS
            <br />
            EASY AND FUN
          </p>
          <ol className="p-small d-flex flex-column">
            <li>DEVELOPMENT</li>
            <li>DESIGN</li>
            <li>TECH SOLUTIONS</li>
            <li>DEVELOPMENT</li>
            <li>DESIGN</li>
          </ol>
        </div>
      </div>
      <div className="experience text-small w-50 pl-5">
        <div className="my-image">
          <img className="w-100 h-100" src={caleb} alt="My figure" />
        </div>
        <div className="dots"></div>
        <div className="years-exp text-bold text-white align-items-end d-flex justify-center w-100">
          <div className="number text-yellow">2</div>
          <div className="years-text">
            YEARS <br /> EXPERIENCE
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
