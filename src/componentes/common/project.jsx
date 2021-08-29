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

  console.log(bgStyle);
  return (
    <section
      style={bgStyle}
      className="projects d-flex w-100 align-items-center"
    >
      <div className="d-flex w-100 justify-content-center">
        <h3 className=" vertical-text">CONTACT ME{props.title}</h3>
        <div className="projects-carousel d-flex justify-content-between">
          <div className="proj-info">
            <h4 className="smal-title">FEATURED WORKS</h4>
            <h2 className="title ">
              <span className="text-yellow">{"> "}</span>
              {title}
            </h2>
            <div className="proj-img">
              <img className="w-100 h-100" src={projImage} alt="" srcset="" />
              <p className="p-small">{description}</p>
            </div>
            <div className="btns mt-5">
              <button typp="button" className="black-btn">
                See Project
              </button>
            </div>
          </div>
          <div className="proj-date">
            <p>{date}</p>
            <p className="type text-yellow">{type}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
