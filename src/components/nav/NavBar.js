import { NavLink} from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./NavBar.css";

// component for the nav bar at the top of page.
// The component <Link> is what gives us the clickable link. And has (prop) that says "go here". importing Link from react-router-DOM.
// second part is route to show what was actually clicked...in application views. What to do when the button is actually clicked.

const NavBar = props => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/");
  };


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
              {" "}
              Home{" "}
            </Link>
          </li>
          {props.hasUser ? (
            <li>
              <NavLink className="nav-link" to="/animals">
                {" "}
                Animals{" "}
              </NavLink>
            </li>
          ) : null}
          <li>
            <Link className="nav-link" to="/locations">
              {" "}
              Locations{" "}
            </Link>
          </li>
          {props.hasUser ? (
            <li>
              <NavLink className="nav-link" to="/employees">
                {" "}
                Employees{" "}
              </NavLink>
            </li>
          ) : null}
          {props.hasUser ? (
            <li>
              <NavLink className="nav-link" to="/owners">
                {" "}
                Owners{" "}
              </NavLink>
            </li>
          ) : null}
          {props.hasUser ? (
            <li>
              <span className="nav-link" onClick={handleLogout}>
                {" "}
                Logout{" "}
              </span>
            </li>
          ) : null}
            {!props.hasUser
            ? <li>
                <Link className="nav-link" to={"/login"}>
                  {" "} Login {" "}
                  </Link>
              </li>
            : null}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
