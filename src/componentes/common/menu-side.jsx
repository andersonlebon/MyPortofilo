import React from "react";
import MediaLink from "./medalink";
import { Link } from 'react-scroll';

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
        <li data-aos="fade-right">
          <Link onClick={props.onShowMenu} to="home">Home</Link>
        </li>
        <li data-aos="fade-right">
          <Link onClick={props.onShowMenu} to="services">Services</Link>
        </li>
        <li data-aos="fade-left">
          <Link onClick={props.onShowMenu} to="projects">Projects</Link>
        </li>
        <li data-aos="fade-right">
          <Link onClick={props.onShowMenu} to="about">About</Link>
        </li>
        <li data-aos="fade-left">
          <Link onClick={props.onShowMenu} to="contacts">Contacts</Link>
        </li>
        <li data-aos="fade-left">
          <Link onClick={props.onShowMenu} to="blog">Blog</Link>
        </li>
      </ul>
      <MediaLink color="small-color" />
      <div className="side-info">
        <ul className="d-flex flex-column ">
            <li  class="aos-init aos-animate">
              <a href="#f" className="d-flex" >
                <div class="address-icon-wrapper">
                  <svg
                    stroke="#f3ca2f"
                    fill="#f3ca2f"
                    stroke-width="0"
                    viewBox="0 0 384 512"
                    class="contact-address-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                </div>
                Rwanda - Kigali - Kk Av8 109St
              </a>
            </li>
            <li  class="aos-init aos-animate">
              <a href="#f" className="d-flex">
                <div class="address-icon-wrapper">
                  <svg
                    stroke="#f3ca2f"
                    fill="#f3ca2f"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    class="contact-address-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M.071 4.243a.5.5 0 01.686-.172L8 8.417l7.243-4.346a.5.5 0 01.514.858L8 9.583.243 4.93a.5.5 0 01-.172-.686z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M6.752 8.932l.432-.252-.504-.864-.432.252.504.864zm-6 3.5l6-3.5-.504-.864-6 3.5.504.864zm8.496-3.5l-.432-.252.504-.864.432.252-.504.864zm6 3.5l-6-3.5.504-.864 6 3.5-.504.864z"></path>
                  </svg>
                </div>
                buyananderson@gmail.com
              </a>
            </li>
            <li  class="aos-init aos-animate">
              <a href="#f" className="d-flex">
                <div class="address-icon-wrapper">
                  <svg
                    stroke="#f3ca2f"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="contact-address-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                +250 (0) 785-213-173
              </a>
            </li>
          </ul>
      </div>
    </aside>
  );
};

export default MenuSide;
