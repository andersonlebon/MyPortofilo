import React from "react";
import Carousel from "react-elastic-carousel";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoReact,
} from "react-icons/io";
import { DiRuby } from "react-icons/di";
import Skill from "./skill";

const SkilsData = {
  language: [
    { label: "Javascript", logo: IoLogoJavascript },
    { label: "HTML", logo: IoLogoHtml5 },
    { label: "HTML", logo: IoLogoHtml5 },
    { label: "HTML", logo: IoLogoHtml5 },
    { label: "HTML", logo: IoLogoHtml5 },
    { label: "HTML", logo: IoLogoHtml5 },
    { label: "HTML", logo: IoLogoHtml5 },
    { label: "HTML", logo: IoLogoHtml5 },
    { label: "Ruby", logo: DiRuby },
    { label: "CSS", logo: IoLogoCss3 },
  ],
};

const Skils = () => {
  return (
    <div className="skils d-flex flex-column justify-content ">
      <div className="lang ">
        <h3>Languages</h3>
        <Carousel className="languages d-flex" itemsToShow={3}>
          {SkilsData.language.map((skill) => (
            <Skill Logo={skill.logo} label={skill.label} />
          ))}
        </Carousel>
      </div>

      <div className="libraries my-5">
        <h3>Labraries && Frameworks</h3>
        <Carousel className="languages d-flex" itemsToShow={3}>
          {SkilsData.language.map((skill) => (
            <Skill Logo={skill.logo} label={skill.label} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Skils;
