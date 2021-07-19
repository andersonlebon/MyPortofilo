import React from "react";
import MediaLink from "./medalink";
import { Link } from "react-router-dom";

const MenuSide = (props) => {
  return (
    <aside
      className={
        props.showMenu
          ? "menu-side d-flex flex-column justify-content-evenly show-side"
          : "menu-side d-flex flex-column justify-content-evenly"
      }
    >
      <ul className="lang d-flex">
        <li>ENG</li>
        <li>FRA</li>
        <li>ESP</li>
      </ul>
      <ul className="menu flex-column justify-content-center d-flex">
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#">Personalization</Link>
        </li>
        <li>
          <Link to="#">Services</Link>
        </li>
        <li>
          <Link to="#">Projects</Link>
        </li>
        <li>
          <Link to="#">Reviews</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>
      <MediaLink color="small-color" />
      <div className="side-info">
        Contact :
        <i>
          <u> buyananderson@gmail.com </u>
        </i>
        or
        <i>
          <u> +250785213173</u>
        </i>
      </div>
    </aside>
  );
};

export default MenuSide;
