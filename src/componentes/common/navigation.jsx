import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CgFacebook } from "react-icons/cg";
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <header className="header d-flex w-100 align-items-center">
        <Link to="home" className="logo w-25">
          LOGO
        </Link>
        <nav className="">
          <ul className="d-flex w-100 align-items-center justify-content-start">
            <li>
              <Link to="" className="navbar-item">
                <CgFacebook />
              </Link>
            </li>
            <li>
              <Link to="" className="navbar-item">
                <AiFillGithub />
              </Link>
            </li>
            <li>
              <Link to="" classNme="navbar-item">
                <AiFillLinkedin />
              </Link>
            </li>
            <li>
              <Link to="" className="navbar-item">
                <FaAngellist />
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </Link>
      </header>
    );
  }
}

export default Navigation;
