import React, { useState } from "react";

const Project = () => {
  return (
    <section className="projects d-flex align-items-center">
      <h3 className=" vertical-text">CONTACT ME</h3>
      <div className="projects-carousel">
        <div className="proj-info">
          <h4 className="smal-title">FEATURED WORKS</h4>
          <h2 className="title ">
            <span className="text-yellow">My</span> Featured{" "}
            <span className="text-yellow">Works</span>
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quia
            consectetur mollitia error possimus, at quod, deserunt asperiores ad
            placeat doloribus temporibus, a aliquid quam ipsa perspiciatis
            tempore illum delectus?
          </p>
          <div className="btns">
            <button typp="button">See Project</button>
          </div>
        </div>
        <div className="proj-date">
          <p>May 2018</p>
          <p className="type">WebSite</p>
        </div>
      </div>
    </section>
  );
};

export default Project;
