import React from "react";
import caleb from "../images/gitprof3.png";

const Services = () => {
  return (
    <section className="services text-white d-flex justify-content-between">
      <div className="d-flex align-items-start about-text w-50 pr-5">
        <h3 className=" vertical-text">SERVICES</h3>
        <div className="d-flex flex-column align-items-between">
          <h4 className="smal-title mb-5">My Services</h4>
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
     
    </section>
  );
};

export default Services;
