import React from "react";
import MediaLink from "./medalink";
import { Link } from "react-router-dom";

const MenuSide = (props) => {
  return (
    <aside className="menu-side d-flex flex-column justify-content-evenly">
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
    </aside>
  );
};

export default MenuSide;
