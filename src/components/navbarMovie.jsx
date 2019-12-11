import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavbarMovie = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="movies">
              movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="customers">
              customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="retails">
              retails
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="login">
              login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="Register">
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMovie;
