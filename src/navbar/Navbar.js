import React from "react";
import "./Navbar.css";

export const Navbar = () => (
  <div id="navbar" className="navbar flex row">
    <a href="#skills" className="nav-item transition">
      Skills
    </a>
    <a href="#projects" className="nav-item transition">
      Projects
    </a>
    <a href="#experience" className="nav-item transition">
      Experience
    </a>
    <a href="#writing" className="nav-item transition">
      Writing
    </a>
  </div>
);
