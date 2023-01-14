import React from "react";
import Carousel from "react-elastic-carousel";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoSass,
  IoLogoGithub
} from "react-icons/io";
import {
  SiRubyonrails,
  SiBootstrap,
  SiTailwindcss,
  SiPostgresql,
  SiJquery,
  SiDocker,
  SiVisualstudiocode,
  SiMongodb,
  SiLinux,
  SiGitlab,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiRuby } from "react-icons/di";
import Skill from "./skill";
import { CgCPlusPlus, CgFigma } from "react-icons/cg";

const SkilsData = {
  language: [
    { label: "Javascript", logo: IoLogoJavascript },
    { label: "Ruby", logo: DiRuby },
    { label: "HTML", logo: IoLogoHtml5 },
    { label: "CSS", logo: IoLogoCss3 },
    { label: "C++", logo: CgCPlusPlus },
  ],
  labrariesFrameworks: [
    { label: "Reactjs", logo: GrReactjs },
    { label: "Ruby on Rails", logo: SiRubyonrails },
    { label: "Bootstrap", logo: SiBootstrap },
    { label: "Sass", logo: IoLogoSass },
    { label: "TailWindCss", logo: SiTailwindcss },
    { label: "Postgresql", logo: SiPostgresql },
    { label: "Jquery", logo: SiJquery },
    { label: "Docker", logo: SiDocker },
    { label: "Visualstudiocode", logo: SiVisualstudiocode },
    { label: "Mongodb", logo: SiMongodb },
    { label: "Linux", logo: SiLinux },
    { label: "Figma", logo: CgFigma },
    { label: "LogoGithub", logo: IoLogoGithub },
    { label: "Gitlab", logo: SiGitlab },
  ],
};

const Skils = () => {
  return (
    <div className="skils d-flex flex-column justify-content ">
      <div className="lang ">
        <h3 data-aos="fade-down">Languages</h3>
        <Carousel className="languages d-flex" itemsToShow={3}>
          {SkilsData.language.map((skill) => (
            <Skill Logo={skill.logo} label={skill.label} />
          ))}
        </Carousel>
      </div>

      <div className="libraries my-5">
        <h3 data-aos="fade-down">Labraries && Frameworks && Tools</h3>
        <Carousel className="languages d-flex" itemsToShow={3}>
          {SkilsData.labrariesFrameworks.map((skill) => (
            <Skill Logo={skill.logo} label={skill.label} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Skils;
