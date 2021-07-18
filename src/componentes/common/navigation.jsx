import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CgFacebook } from "react-icons/cg";
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <Link to="home" className="logo">
          LOGO
        </Link>
        <nav className="nav-bar">
          <ul>
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
          <Link to="" classNme="navbar-item">
            <AiOutlineMenu />
          </Link>
        </nav>
      </header>
    );
  }
}

export default Navigation;
