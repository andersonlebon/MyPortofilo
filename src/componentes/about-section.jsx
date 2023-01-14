import React from "react";
import "react-sweet-progress/lib/style.css";
import ProgressBar from "@ramonak/react-progress-bar";
import Skils from "./common/skils";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="about-section text-white d-flex py-5  align-items-center justify-content-center">
      <div className="aboutme d-flex align-items-start about-text w-50 pr-5">
        <h3 className=" vertical-text" data-aos="fade-down">WHAT I DO</h3>
        <div className="d-flex flex-column align-items-between">
          <h4 className=" smal-title mb-5" data-aos="fade-right">About me</h4>
          <p className="text-bold" data-aos="fade-left">
            MY MISSION IS <br />
            <span className="text-yellow"> DESIGN & DEVELOP </span> THE BEST
            WEBSITES AROUND
          </p>
          <p className="p-small" data-aos="zoom-in">
            I can help you build a product , feature or website Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don’t hestiate to contact me.
          </p>
          <ul className="w-75 font-size-12" data-aos="fade-up">
            <li className="w-100">
              <div className="d-flex label w-100 justify-content-between">
                <span>Front End</span> <span>80%</span>
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
                <span>Backend</span> <span>80%</span>
              </div>
              <ProgressBar
                bgColor="#f3ca2f"
                completed={85}
                height="8px"
                labelAlignment="outside"
                labelColor="#272727"
                labelSize="10"
                transitionDuration="3s"
              />
            </li>
            <li>
              <div className="d-flex label w-100 justify-content-between">
                <span>Problem Solving</span> <span>75%</span>
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
          </ul>
        </div>
      </div>
      <div className="about-exp d-flex flex-column justify-content-center w-50 p-5">
        <Skils />
        <div className="lets-connect" data-aos="zoom-out">
            <div className="d-flex align-items-end">
              <button href="contact" className="black-btn" type="submit">
                <Link to="contacts">
                Hire me
                </Link>
              </button>
              <a href="https://drive.google.com/file/d/1auJRIuuwt9Uw8zLkOxcA54TelgVmndT1/view?usp=sharing" className="" type="submit">
                Download CV
                <svg stroke="#f3ca2f" fill="#f3ca2f" stroke-width="0" viewBox="0 0 24 24" class="download-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"></path><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"></path></svg>
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
