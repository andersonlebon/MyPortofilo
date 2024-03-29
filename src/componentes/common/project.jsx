import React from "react";
import { BsGithub } from "react-icons/bs";
import {BiLinkExternal} from "react-icons/bi"

const Project = (props) => {
  const { description, title, date, type, projImage, githubLink, demoLink, techs, stacks } = props.project;

  return (
    <section
      className="projects d-flex w-100 align-items-center"
    >
      <div className="projects-container d-flex w-100 justify-content-center">
        <h3 className=" vertical-text" data-aos="fade-down">FEATURED WORKS</h3>
        <div className="projects-carousel d-flex justify-content-between">
          <div className="proj-info" data-aos="fade-down">
            <h4 className="smal-title" data-aos="fade-right">FEATURED WORKS</h4>
            <h2 className="title " data-aos="fade-left">
              <span className="text-yellow ">{"> "}</span>
              {title}
            </h2>
              <p data-aos="zoom-in"  className="p-small">{description}</p>
              <ul className="tools p-small d-flex" >
               {techs.map((tool, id) => (
                 <li key={id}>{tool}</li>
                ))}
              </ul>
              <ul className="project-stacks d-flex p-small">
               {stacks.map((stack, id) => (
                 <li key={id}>{stack}</li>
                ))}
              </ul>
            <div className="btns mt-5 d-flex">
              <a className="black-btn" href={ githubLink }>
                Source code<span><BsGithub/></span>
              </a>
              <a href={ demoLink } className="black-btn">
                See Live   <span><BiLinkExternal/></span>
              </a>
            </div>
          </div>
          <div className="proj-date d-flex flex-column align-items-end">
            <p data-aos="fade-left" >{date}</p>
            <p data-aos="fade-left" className="type text-yellow">{type}</p>

            <div className="project-img d-flex justify-content-center align-items-center" data-aos="fade-down">
              <img src={projImage} alt="" className="" data-aos="flip-right"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
