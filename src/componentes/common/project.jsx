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
        <h3 className=" vertical-text">FEATURED WORKS</h3>
        <div className="projects-carousel d-flex justify-content-between">
          <div className="proj-info">
            <h4 className="smal-title">FEATURED WORKS</h4>
            <h2 className="title ">
              <span className="text-yellow">{"> "}</span>
              {title}
            </h2>
              <p className="p-small">{description}</p>
              <ul className="tools p-small d-flex">
                <li>Ruby</li>
                <li>JavaSript</li>
                <li>Reactjs</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
              </ul>
              <ul className="project-stacks d-flex p-small">
                <li>Frontend</li>
                <li>Fullstack</li>
                <li>Frontennd</li>
              </ul>
            <div className="btns mt-5">
              <button typp="button" className="black-btn">
                See Project
              </button>
            </div>
          </div>
          <div className="proj-date d-flex flex-column align-items-end">
            <p>{date}</p>
            <p className="type text-yellow">{type}</p>

            <div className="project-img d-flex justify-content-center align-items-center">
              <img src={projImage} alt="" className=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
