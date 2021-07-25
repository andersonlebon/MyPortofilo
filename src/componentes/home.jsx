import React, { Component } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import bg from "../images/pngwing.com.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <section className="home-section justify-content-center align-items-center p-5 d-flex">
        <div className="home-text text-white d-flex align-items-start justify-content-between">
          <h3>INTRODUCE</h3>
          <h1 className="hello text-bold">
            <span className="text-yellow ">HELLO</span> MY NAME <br /> IS
            <span className="text-yellow "> ANDERSON</span>, <br /> I AM A
            SOFTWARE DEVELOPPER
          </h1>
        </div>
        <div className="home-bg w-50">
          <img src={bg} alt="home-bg" className="w-100" />
        </div>
      </section>
    );
  }
}

export default Home;
