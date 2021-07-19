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
    }, 400);
  };
  render() {
    return (
      <header className="header d-flex w-100 align-items-center">
        <Link to="home" className="logo w-25">
          LOGO
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
        <MenuSide showMenu={this.state.showMenu} />
      </header>
    );
  }
}

export default Navigation;
