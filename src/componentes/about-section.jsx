import React from "react";
import "react-sweet-progress/lib/style.css";
import ProgressBar from "@ramonak/react-progress-bar";

const About = () => {
  return (
    <section className="about-section text-white d-flex py-5 justify-content-center">
      <div className="aboutme d-flex align-items-start about-text w-50 pr-5">
        <h3 className=" vertical-text">WHAT I DO</h3>
        <div className="d-flex flex-column align-items-between">
          <h4 className=" smal-title mb-5">About me</h4>
          <p className="text-bold">
            MY MISSION IS <br />
            <span className="text-yellow"> DESIGN & DEVELOP </span> THE BEST
            WEBSITES AROUND
          </p>
          <p className="p-small">
            I can help you build a product , feature or website Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don’t hestiate to contact me.
          </p>
        </div>
      </div>
      <div className="about-progress text-small w-50 p-5">
        <ul className="w-75">
          <li className="w-100">
            <div className="d-flex label w-100 justify-content-between">
              <span>Development</span> <span>80%</span>
            </div>
            <ProgressBar
              bgColor="#f3ca2f"
              completed={80}
              height="8px"
              labelAlignment="outside"
              labelColor="#272727"
              labelSize="10"
              transitionDuration="3s"
            />
          </li>
          <li>
            <div className="d-flex label w-100 justify-content-between">
              <span>Development</span> <span>68%</span>
            </div>
            <ProgressBar
              bgColor="#f3ca2f"
              completed={68}
              height="8px"
              labelAlignment="outside"
              labelColor="#272727"
              labelSize="10"
              transitionDuration="3s"
            />
          </li>
          <li>
            <div className="d-flex label w-100 justify-content-between">
              <span>Development</span> <span>75%</span>
            </div>
            <ProgressBar
              bgColor="#f3ca2f"
              completed={75}
              height="8px"
              labelAlignment="outside"
              labelColor="#272727"
              labelSize="10"
              transitionDuration="3s"
            />
          </li>
          <li>
            <div className="d-flex label w-100 justify-content-between">
              <span>Development</span> <span>60%</span>
            </div>
            <ProgressBar
              bgColor="#f3ca2f"
              completed={60}
              height="8px"
              labelAlignment="outside"
              labelColor="#272727"
              labelSize="10"
              transitionDuration="3s"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
