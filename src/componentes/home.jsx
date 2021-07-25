import React, { Component } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import bg from "../images/pngwing.com.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <section className="home-section justify-content-center align-items-center d-flex">
        <div className="home-text text-white p-5">
          <h3>INTRODUTION</h3>
          <h1 className="hello">
            <span className="text-yellow">HELLO</span> MY NAME IS ANDERSON, I AM
            A SOFTWARE DEVELOPPER
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
