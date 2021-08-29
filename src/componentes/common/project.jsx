import React from "react";

const Project = (props) => {
  const { description, title, date, type, image } = props.project;

  let bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    // backgroundSize: "cover",
    backgroundSize: "100%",
  };

  console.log(bgStyle);
  return (
    <section
      style={bgStyle}
      className="projects d-flex justify-content-center align-items-center"
    >
      {/* <div className="bg-img">
        <img src={image} alt="" srcset="" />
      </div> */}
      <div className="d-flex justify-content-center">
        <h3 className=" vertical-text">CONTACT ME{props.title}</h3>
        <div className="projects-carousel d-flex justify-content-between">
          <div className="proj-info">
            <h4 className="smal-title">FEATURED WORKS</h4>
            <h2 className="title ">
              <span className="text-yellow">{"> "}</span>
              {title}
            </h2>
            <p className="p-small">{description}</p>
            <div className="btns">
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
