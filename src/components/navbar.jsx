import React from "react";
import Earth from "../assets/earth.png";

function NavBar() {
  return (
    <nav className="navbar">
      <img src={Earth} className="navbar--img" />
      <h1 className="navbar--title">my travel journal.</h1>
    </nav>
  );
}

export default NavBar;
