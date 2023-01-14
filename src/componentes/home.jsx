import React, { Component } from "react";
import About from "./about-section";
import Contact from "./contact";
import Projects from "./projects";
import Services from "./services";
import Aos from "aos";
import HomeSection from "./homeSection";

class Home extends Component {
  state = {};
  componentDidMount() {
    Aos.init({
      duration: 1000,
    });
  }

  handlScroll = () => {};
  render() {
    return (
      <>
        <HomeSection />
        <Services />
        <About />
        <Projects />
        <Contact />
      </>
    );
  }
}

export default Home;
