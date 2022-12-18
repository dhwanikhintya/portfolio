import React from "react";
import "./skills.css";

function Skills() {
  return (
    <>
      <div id="skills" className="skillsWrapper">
        <div class="container-fluid">
          <div className="skillsHeading">
            <div className="skillsTitle">
              <h1>Skills</h1>
            </div>
            <div className="skillsSubTitle">
              <h6>My Technical Level</h6>
            </div>
            </div>
            <div className="row buttonRow">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 buttonCol">
                <div class="btn-group ">
                  <button
                    type="button"
                    class="btn mainButton btn-3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="row skillsRow">
                      <div className="col-2 buttonIcon">
                        <i class="fas fa-code"></i>
                      </div>
                      <div className="col-8">
                        <div className="mainHeading">
                          <h5>Frontend</h5>
                          <p>More than 5 years</p>
                        </div>
                      </div>
                      <div className="col-2 buttonIcon">
                        <i class="fas fa-caret-down"></i>
                      </div>
                    </div>
                  </button>
                  <ul class="dropdown-menu dropdownArea">
                    <li>
                      <div className="dropdown-item">
                        <p class="dropItems">HTML</p>
                        <div class="progress progressTitle">
                          <div
                            class="progress-bar progressBar"
                            role="progressbar"
                            aria-label="Example 1px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <p class="dropItems">CSS</p>
                        <div class="progress progressTitle">
                          <div
                            class="progress-bar progressBar"
                            role="progressbar"
                            aria-label="Example 1px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <p class="dropItems">JAVASCRIPT</p>
                        <div class="progress progressTitle">
                          <div
                            class="progress-bar progressBar"
                            role="progressbar"
                            aria-label="Example 1px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <p class="dropItems">REACT</p>
                        <div class="progress progressTitle">
                          <div
                            class="progress-bar progressBar"
                            role="progressbar"
                            aria-label="Example 1px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 buttonCol">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn mainButton btn-3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="row skillsRow">
                      <div className="col-2 buttonIcon">
                      <i class="fa-solid fa-pen"></i>
                      </div>
                      <div className="col-8">
                        <div className="mainHeading">
                          <h5>Designer</h5>
                          <p>More than 5 years</p>
                        </div>
                      </div>
                      <div className="col-2 buttonIcon">
                        <i class="fas fa-caret-down"></i>
                      </div>
                    </div>
                  </button>
                  <ul class="dropdown-menu dropdownArea">
                    <li>
                      <div className="dropdown-item">
                        <p class="dropItems">FIGMA</p>
                        <div class="progress progressTitle">
                          <div
                            class="progress-bar progressBar"
                            role="progressbar"
                            aria-label="Example 1px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <p class="dropItems">PHOTOSHOP</p>
                        <div class="progress progressTitle">
                          <div
                            class="progress-bar progressBar"
                            role="progressbar"
                            aria-label="Example 1px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <p class="dropItems">CORELDRAW</p>
                        <div class="progress progressTitle">
                          <div
                            class="progress-bar progressBar"
                            role="progressbar"
                            aria-label="Example 1px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <p class="dropItems">CANVA</p>
                        <div class="progress progressTitle">
                          <div
                            class="progress-bar progressBar"
                            role="progressbar"
                            aria-label="Example 1px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row buttonRow1">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 buttonCol">
                <div class="btn-group ">
                  <button
                    type="button"
                    class="btn mainButton btn-3 backButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="row skillsRow">
                      <div className="col-2 buttonIcon">
                      <i class="fa-solid fa-server"></i>
                      </div>
                      <div className="col-8">
                        <div className="mainHeading">
                          <h5>Backend</h5>
                          <p>More than 1 years</p>
                        </div>
                      </div>
                      <div className="col-2 buttonIcon">
                        <i class="fas fa-caret-down"></i>
                      </div>
                    </div>
                  </button>
                  <ul class="dropdown-menu dropdownArea">
                    <li>
                      <div className="dropdown-item">
                        <p class="dropItems">NODE JS</p>
                        <div class="progress progressTitle">
                          <div
                            class="progress-bar progressBar"
                            role="progressbar"
                            aria-label="Example 1px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <p class="dropItems">MONGODB</p>
                        <div class="progress progressTitle">
                          <div
                            class="progress-bar progressBar"
                            role="progressbar"
                            aria-label="Example 1px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <p class="dropItems">MONGOOSE</p>
                        <div class="progress progressTitle">
                          <div
                            class="progress-bar progressBar"
                            role="progressbar"
                            aria-label="Example 1px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <p class="dropItems">EXPRESS</p>
                        <div class="progress progressTitle">
                          <div
                            class="progress-bar progressBar"
                            role="progressbar"
                            aria-label="Example 1px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

        </div>
      </div>
    </>
  );
}

export default Skills;
