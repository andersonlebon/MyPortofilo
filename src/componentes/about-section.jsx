import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import ProgressBar from "@ramonak/react-progress-bar";

const About = () => {
  return (
    <section className="about-section text-white d-flex justify-content-center align-items-center">
      <h3 className="vertical-text">WHAT I DO</h3>
      <div className="about-text">
        <h4>About me</h4>
        <p className="text-bold">
          MY MISSION IS <span className="text-yellow"> DESIGN & DEVELOP </span>{" "}
          THE BEST WEBSITES AROUND
        </p>
      </div>
      <div className="about-progress text-small w-50 p-5">
        <ul>
          <li>
            <span>Developement</span>
            <ProgressBar
              bgColor="#f3ca2f"
              completed={60}
              height="8px"
              labelAlignment="outside"
              labelColor="#9e9e9e"
              labelSize="10"
              transitionDuration="3s"
            />
          </li>
          <li>
            <ProgressBar
              bgColor="#f3ca2f"
              completed={60}
              height="8px"
              labelAlignment="outside"
              labelColor="#9e9e9e"
              labelSize="10"
              transitionDuration="3s"
            />
          </li>
          <li>
            <ProgressBar
              bgColor="#f3ca2f"
              completed={60}
              height="8px"
              labelAlignment="outside"
              labelColor="#9e9e9e"
              labelSize="10"
              transitionDuration="3s"
            />
          </li>
          <li>
            <ProgressBar
              bgColor="#f3ca2f"
              completed={60}
              height="8px"
              labelAlignment="outside"
              labelColor="#9e9e9e"
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
