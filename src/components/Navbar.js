import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <h1>Train Ticket Reservation</h1>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact us</a>
      </nav>
    </div>
  );
};

export default Navbar;
