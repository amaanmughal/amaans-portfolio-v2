import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import menuIcon from "../assets/icons8-menu-50.png";

export const Nav = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="container-xxl">
        <h2>Amaans Portfolio</h2>
        <div id="nav-options-toggle" className="nav-options">
          <a href="#landing-page">About</a>
          <a href="#skills-section">Skills</a>
          <a href="#projects-page">Projects</a>
          <a href="#contact-page">Contact Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
