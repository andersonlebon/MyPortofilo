import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CgFacebook } from "react-icons/cg";
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <header className="header d-flex w-100 justify-content-between">
        <Link to="home" className="logo">
          LOGO
        </Link>
        <nav className="">
          <ul className="d-flex w-100 justify-content-between">
            <li>
              <Link to="" classNme="navbar-item">
                <CgFacebook />
              </Link>
            </li>
            <li>
              <Link to="" classNme="navbar-item">
                <AiFillGithub />
              </Link>
            </li>
            <li>
              <Link to="" classNme="navbar-item">
                <AiFillLinkedin />
              </Link>
            </li>
            <li>
              <Link to="" classNme="navbar-item">
                <FaAngellist />
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="" classNme="navbar-item">
          <AiOutlineMenu />
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          libero eaque magni expedita fuga explicabo? Recusandae dignissimos
          molestiae sunt nisi nemo error quae quod. Omnis pariatur sed nam
          sapiente ratione!
        </p>
      </header>
    );
  }
}

export default Navigation;
