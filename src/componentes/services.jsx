import React from "react";
import caleb from "../images/gitprof3.png";
import frontend from "../images/front-end.png";
import backend from "../images/backend.png";
import mobile from "../images/mobile.png";

const Services = () => {
  return (
    <section className="services text-white d-flex align-items-center">
      <div className="d-flex service-text align-items-start about-text">
        <h3 className=" vertical-text">SERVICES</h3>
        <div className="d-flex flex-column align-items-between">
          <h4 className="smal-title mb-5">My Services</h4>
          <p className="text-bold">
            I LIKE <span className="text-yellow"> TO MAKE </span> THINGS
            <br /> 
            {" "}EASY AND FUN
          </p>
          <ol className="p-small d-flex flex-column">
            <li>DEVELOPMENT</li>
            <li>DESIGN</li>
            <li>TECH SOLUTIONS</li>
            <li>DEVELOPMENT</li>
          </ol>
        </div>
      </div>
        <div className="services-tec d-flex align-items-center justify-content-center ">

        <div className="service-tec-wraper before-after d-flex justify-content-center align-items-center">
            <img src={backend} alt="" />
             <h4 className="w-50">Backend Developement</h4>
            </div>
         <div className="d-flex services-front justify-content-center flex-column align-items-center">
           <div className="service-tec-wraper d-flex justify-content-center align-items-center">
            <img src={mobile} alt="" />
             <h4 className="w-50">Mobile Developement</h4>
            </div>
                      <div className="service-tec-wraper d-flex justify-content-center align-items-center">
            <img src={frontend} alt="" />
            <h4 className="w-50">Frontend Developement</h4>
          </div>
         </div>
        </div>
     
    </section>
  );
};

export default Services;
