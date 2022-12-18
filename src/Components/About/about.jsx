import React from "react";
import "./about.css";

function About() {
  return (
    <>
      <div id="about" className="aboutwrapper">
        <div class="container-fluid">
          <div className="aboutHeading">
            <div className="aboutTitle">
              <h1>About Me</h1>
              <div className="aboutSubTitle">
              <h6>My Introduction</h6>
            </div>
            </div>
          </div>
          <div className="row aboutRow">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 aboutImage">
              <div class="ratio imageSection">
                <iframe src="https://embed.lottiefiles.com/animation/116051"></iframe>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 aboutText">
              <div className="aboutpara">
                <p>
                  Web developer, with extensive knowledge and years of
                  experience, working in web technologies and UI/UX design,
                  delivering quality work.
                </p>
              </div>
              <div className="row workRow">
                <div className="col-6 workLink">
                  <h2 className="aboutNum">2+</h2>
                  <p>Companies Worked</p>
                </div>
                <div className="col-6 workLink">
                  <h2 className="aboutNum">4+</h2>
                  <p>Years of experience</p>
                </div>
              </div>
              <a href="/" class="btn btn-lg btn-2 ">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
