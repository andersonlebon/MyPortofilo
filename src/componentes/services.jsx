import React from "react";

const Services = () => {
  return (
    <section className="about-section text-white d-flex justify-content-center align-items-center">
      <div className="aboutme d-flex align-items-start about-text w-50 p-5">
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
          </ol>
        </div>
      </div>
      <div className="experience text-small w-50 p-5"></div>
    </section>
  );
};

export default Services;
