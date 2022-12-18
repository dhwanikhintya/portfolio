import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
    <div className="navbarWrapper">
      <nav class="navbar navbar-expand-lg topNav">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="/">
            Dhwanik Hintya
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbarToggler"><i class="fa-solid fa-bars"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" aria-current="page" href="#home">
                Home
              </a>
              <a class="nav-link" href="#about">
                About
              </a>
              <a class="nav-link" href="#skills">
                Skills
              </a>
              <a class="nav-link" href="#services">
                Services
              </a>
              <a class="nav-link" href="#projects">
                Projects
              </a>
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
}

export default Navbar;
