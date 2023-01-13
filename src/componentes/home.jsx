import Carousel from "react-elastic-carousel";
import React, { Component } from "react";
import bg from "../images/gitprof3.png";
import About from "./about-section";
import Contact from "./contact";
import Projects from "./projects";
import Services from "./services";
import MediaLink from "./common/medalink";
import Aos from "aos";

class Home extends Component {
  state = {};
  section = React.createRef();
  componentDidMount() {
    Aos.init({
      duration: 1000,
    });
  }

  handlScroll = () => {};
  render() {
    return (
      <>
        <section id="home" className="home-section justify-content-between align-items-center p-5 d-flex">
          <div className="home-text text-white d-flex align-items-start justify-content-start">
            <h3 className="vertical-text" data-aos="fade-down">INTRODUCE</h3>
            <div>
              <h1 className="hello text-bold"  data-aos="fade-right">
              <span className="text-yellow " data-aos="fade-down">HELLO</span> MY NAME IS <br />
              <span className="text-yellow name"> ANDERSON</span>, I AM A <br />
              FULL STACK DEVELOPPER.
            </h1>
            <MediaLink color="white" />
            </div>
          </div>
          <div className="square d-flex justify-content-between" data-aos="fade-down">
            <div className="hire-me d-flex align-items-end">
              <button href="contact" className="black-btn" data-aos="fade-right" type="submit">
                Hire me
              </button>
              <a href="contact" className="" data-aos="fade-left"type="submit">
                Download CV
                <svg stroke="#f3ca2f" fill="#f3ca2f" stroke-width="0" viewBox="0 0 24 24" class="download-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"></path><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"></path></svg>
              </a>
            </div>
            <div className="experience text-small">
              <div className="dots"></div>
              <div className="years-exp text-bold text-white align-items-end d-flex justify-center w-100">
                <div className="number text-yellow" data-aos="fade-right">3</div>
                <div className="years-text" data-aos="fade-left">
                  YEARS <br /> EXPERIENCE
                </div>
              </div>
            </div>
          </div>
          <div className="home-bg" data-aos="zoom-in">
            <img src={bg} alt="home-bg" className="" />
          </div>
        </section>
        <Services />
        <About />
        <Projects />
        <Contact />
      </>
    );
  }
}

export default Home;
