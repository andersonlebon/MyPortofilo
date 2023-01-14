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
          <Link to="" className="navbar-item">
            <AiFillGithub />
          </Link>
        </li>
        <li>
          <Link to="" className="navbar-item">
            <AiFillLinkedin />
          </Link>
        </li>
        <li>
          <Link to="" className="navbar-item">
            <FaAngellist />
          </Link>
        </li>
        <li>
          <Link to="" className="navbar-item">
            <CgFacebook />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MediaLink;
