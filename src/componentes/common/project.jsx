import React from "react";

const Project = (props) => {
  const { description, title, date, type, image, projImage } = props.project;

  let bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    // backgroundSize: "cover",
    backgroundSize: "130%",
  };

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
               {props.project.techs.map((tool, i) => (
                 <li key={tool.id}>{tool}</li>
                ))}
              </ul>
              <ul className="project-stacks d-flex p-small">
               {props.project.stacks.map((stack, i) => (
                 <li key={stack.id}>{stack}</li>
                ))}
              </ul>
            <div className="btns mt-5">
              <button typp="button" className="black-btn">
                See Project
              </button>
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
