import React from "react";
import "./hero.css";

function Hero() {
  return (
    <>
      <div id="home" className="herowrapper">
        <div class="container-fluid">
          <div className="row heroContainer">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 textSection">
              <h1>Hi, I'm Dhwanik</h1>
              <h6>MERN Stack Developer</h6>
              <p>
                High level experience in web design and development knowledge,
                producing quality work.
              </p>
              <a href="/" class="btn btn-lg btn-1">
                Contect Me
                <i class="fa-solid fa-arrow-right btnIcon"></i>
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 imageCol">
              <div class="ratio imageSection">
                <iframe src="https://embed.lottiefiles.com/animation/122225"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
