import React from "react";
import { NavLink } from "react-router-dom";

const NavJ = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid container">
          <a className="navbar-brand d-flex  align-items-center" href="#">
            {/* <img src="/src/assets/jbq_logo.png" alt="" style="width:100px" /> */}
            {/* <p className="fs-4">COC Lawanson</p> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/api/question"
                  className="nav-link text-light"
                  href="#"
                >
                  Questions
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Screens
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <NavLink className="dropdown-item text-light" href="#">
                      Results
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/questions"
                      className="dropdown-item text-light"
                      href="#"
                    >
                      Question
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard"
                      className="dropdown-item text-light"
                      href="#"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/judges"
                      className="dropdown-item text-light"
                      href="#"
                    >
                      Judges
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      to="http://localhost:3000/Questions"
                      className="dropdown-item text-light"
                      href="#"
                    >
                      API
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="participants" className="nav-link text-light">
                  Participants
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavJ;
