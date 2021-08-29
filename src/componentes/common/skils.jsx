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
    { label: "Ruby", logo: DiRuby },
    { label: "CSS", logo: IoLogoCss3 },
  ],
};

const Skils = () => {
  return (
    <div className="skils">
      <ul className="languages d-flex">
        {SkilsData.language.map((skill) => (
          <Skill Logo={skill.logo} label={skill.label} />
        ))}
      </ul>
    </div>
  );
};

export default Skils;
