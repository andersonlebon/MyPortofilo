import React, { Component } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import bg from "../images/pngwing.com.png";

class Home extends Component {
  state = {};
  section = React.createRef();

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        console.log(window.scrollY);
        this.section.current.classList.toggle("anim-section");
      }
    });
  }
  section = React.createRef();

  handlScroll = () => {};
  render() {
    return (
      <div>
        <section
          onScroll={this.handlScroll}
          ref={this.section}
          className="home-section justify-content-center align-items-center p-5 d-flex"
        >
          <div className="home-text text-white d-flex align-items-start justify-content-between">
            <h3 className="vertical-text">INTRODUCE</h3>
            <h1 className="hello text-bold">
              <span className="text-yellow ">HELLO</span> MY NAME IS <br />
              <span className="text-yellow name"> ANDERSON</span>, I AM A <br />
              SOFTWARE DEVELOPPER
            </h1>
          </div>
          <div className="home-bg w-50">
            <img src={bg} alt="home-bg" className="w-100" />
          </div>
        </section>
        <section ref={this.section2} className="scrolll bg-dark"></section>
        <section ref={this.section3} className="scrolll bg-primary"></section>
        <section ref={this.section4} className="scrolll bg-warning"></section>
        <section ref={this.section5} className="scrolll bg-danger"></section>
      </div>
    );
  }
}

export default Home;
