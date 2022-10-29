import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-black navbar-expand-lg">
      {/* todo: navbar logo */}
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            {/*  todo: page with projects when they are ready
            <a className="nav-link active" aria-current="page" href="#">
              Projects
            </a> */}
            <a className="nav-link" href="https://github.com/crickets-studios">
              Github
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
