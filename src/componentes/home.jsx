import React, { Component } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import bg from "../images/pngwing.com.png";

class Home extends Component {
  state = {};
  section = React.createRef();

  componentDidMount() {
    const sectionOneOptions = {
      rootMargin: "-88% 0px 0px 0px",
    };
    const section = this.section.current;
    const sectionOneObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          console.log("is entering");
          section.classList.add("anim-section");
        } else {
          console.log("NOt is not");
          section.classList.remove("anim-section");
        }
      });
    }, sectionOneOptions);

    sectionOneObserver.observe(section);
    // console.log(this.section);
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
            <h3>INTRODUCE</h3>
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
        <div className="scrolll"></div>
        <div className="scrolll"></div>
        <div className="scrolll"></div>
        <div className="scrolll"></div>
      </div>
    );
  }
}

export default Home;
