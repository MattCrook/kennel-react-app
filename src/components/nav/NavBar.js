import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

// component for the nav bar at the top of page.
// The component <Link> is what gives us the clickable link. And has (prop) that says "go here". importing Link from react-router-DOM.

// second part is route to show what was actually clicked...in application views. WHat to do when the button is actually clicked. 
const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/animals">
              Animals
            </Link>
          </li>
          <li>Locations</li>
          <li>Employees</li>
          <li>Owners</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
