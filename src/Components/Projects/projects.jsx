import React from "react";
import "./projects.css";
import img1 from "./../../images/blogproject.JPG";
import img2 from "./../../images/comingsoon.jpg";

function Projects() {
  return (
    <>
      <div id="projects" className="projectwrapper">
        <div class="container-fluid">
          <div className="projectsHeading">
            <div className="projectsTitle">
              <h1>Projects</h1>
            </div>
            <div className="projectsSubTitle">
              <h6>My work so far</h6>
            </div>
          </div>
          <div className="row mainRow">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 maincol">
              <div class="card projectCard">
                <img src={img1} class="card-img-top cardImag" alt="..." />
                <div class="card-body mainbody">
                  <h5 class="card-title maintitle">Public Blog</h5>
                  <p class="card-text mainpara">
                    This is public blog post portal where user can register
                    themselves and write blog as per thir choice.This is
                    practice project done during the course.
                  </p>
                  <a href="/" class="btn btn-4 cardButton">
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 maincol">
              <div class="card projectCard">
                <img src={img2} class="card-img-top cardImag" alt="..." />
                <div class="card-body mainbody">
                  <h5 class="card-title maintitle">Coming Soon</h5>
                  <p class="card-text mainpara">
                    <i>This project is still under process. this
                    project is about ecommerce site where user can register
                    themselves and checkout all the products and order it as per
                    their needs.</i>
                  </p>
                  <a href="/" class="btn btn-4 cardButton">
                    Coming Soon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
