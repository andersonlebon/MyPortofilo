import React from "react";
import MediaLink from "./medalink";

const MenuSide = (props) => {
  return (
    <aside className="menu-side">
      <ul className="lang d-flex">
        <li>ENG</li>
        <li>FRA</li>
        <li>ESP</li>
      </ul>
      <ul className="menu flex-column justify-content-center d-flex">
        <li>Home</li>
        <li>Personalization</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Reviews</li>
        <li>Contact</li>
      </ul>
      <MediaLink color="small-color" />
    </aside>
  );
};

export default MenuSide;
