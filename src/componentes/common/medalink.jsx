import React from "react";
import { Link } from "react-router-dom";
import { CgFacebook } from "react-icons/cg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";

const MediaLink = (props) => {
  return (
    <nav className={props.color}>
      <ul
        className="d-flex w-100 align-items-center justify-content-start"
        data-aos="fade-left"
      >
        <li>
          <a href="https://github.com/andersonlebon" className="navbar-item">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anderson-caleb-915343209/" className="navbar-item">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="https://angel.co/u/anderson-caleb" className="navbar-item">
            <FaAngellist />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/caleb.buyana.9" className="navbar-item">
            <CgFacebook />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MediaLink;
