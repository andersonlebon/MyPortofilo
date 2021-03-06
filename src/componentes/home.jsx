import Carousel from "react-elastic-carousel";
import React, { Component } from "react";
import bg from "../images/pngwing.com.png";
import About from "./about-section";
import Contact from "./contact";
import Projects from "./projects";
import Services from "./services";

class Home extends Component {
  state = {};
  section = React.createRef();

  handlScroll = () => {};
  render() {
    return (
      <>
        <section
          onScroll={this.handlScroll}
          ref={this.section}
          className="home-section justify-content-between align-items-center p-5 d-flex"
        >
          <div className="home-text text-white d-flex align-items-start justify-content-start">
            <h3 className="vertical-text">INTRODUCE</h3>
            <h1 className="hello text-bold">
              <span className="text-yellow ">HELLO</span> MY NAME IS <br />
              <span className="text-yellow name"> ANDERSON</span>, I AM A <br />
              SOFTWARE DEVELOPPER.
            </h1>
          </div>
          <div className="home-bg w-50">
            <img src={bg} alt="home-bg" className="w-100" />
          </div>
        </section>
        <Services />
        <Projects />
        <About />
        <Contact />
      </>
    );
  }
}

export default Home;
