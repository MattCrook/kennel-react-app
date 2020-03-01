import React from "react";
import { NavLink} from "react-router-dom";
import "./NavBar.css";

// component for the nav bar at the top of page.
// The component <Link> is what gives us the clickable link. And has (prop) that says "go here". importing Link from react-router-DOM.

// second part is route to show what was actually clicked...in application views. What to do when the button is actually clicked.
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
            <NavLink className="nav-link" activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" activeClassName="active" to="/animals">
              Animals
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" activeClassName="active" to="/locations">
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" activeClassName="active" to="/employees">
              Employees
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" activeClassName="active" to="/owners">
              Owners
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
