import React, { Component } from "react";
import { Link } from "react-router-dom";
import MediaLink from "./medalink";
import MenuSide from "./menu-side";

class Navigation extends Component {
  state = {
    showMenu: false,
    AnimMenu: false,
  };

  handelShowMMenu = () => {
    let showMenu = this.state.showMenu;
    let AnimMenu = this.state.AnimMenu;
    console.log(AnimMenu);
    AnimMenu = !AnimMenu;
    this.setState({ AnimMenu });
    setTimeout(() => {
      showMenu = !showMenu;
      this.setState({ showMenu });
      AnimMenu = !AnimMenu;
    }, 300);
  };
  render() {
    return (
      <header className="header d-flex w-100 justify-content-between align-items-center" data-aos="fade-down"> 
        <Link to="home" className="logo w-25">
          <h2 className="title d-flex">
            <span className="text-yellow">{"<"}/</span>Caleb<span className="text-yellow">{">"}.</span>
            </h2>
        </Link>
        <MediaLink color="white" />
        <Link
          to=""
          onClick={this.handelShowMMenu}
          className={
            this.state.showMenu
              ? "show-menu"
              : this.state.AnimMenu
              ? " hamburger anim-menu"
              : "hamburger"
          }
        >
          <div></div>
          <div></div>
          <div></div>
        </Link>
        <MenuSide onShowMenu={this.handelShowMMenu} showMenu={this.state.showMenu} />
      </header>
    );
  }
}

export default Navigation;
