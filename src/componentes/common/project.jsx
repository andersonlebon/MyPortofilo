import React from "react";

const Project = (props) => {
  const { description, title, date, type } = props.project;

  return (
    <section className="projects d-flex justify-content-center align-items-center">
      <h3 className=" vertical-text">CONTACT ME{props.title}</h3>
      <div className="projects-carousel d-flex justify-content-between">
        <div className="proj-info">
          <h4 className="smal-title">FEATURED WORKS</h4>
          <h2 className="title ">
            <span className="text-yellow">{"> "}</span>
            {title}
          </h2>
          <p>{description}</p>
          <div className="btns">
            <button typp="button">See Project</button>
          </div>
        </div>
        <div className="proj-date">
          <p>{date}</p>
          <p className="type text-yellow">{type}</p>
        </div>
      </div>
    </section>
  );
};

export default Project;
