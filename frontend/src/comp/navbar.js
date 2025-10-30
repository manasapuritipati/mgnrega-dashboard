import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>MGNREGA</h2>
        </div>

           <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
