import React from "react";
import "./contact.css";

function Contact() {
  
  return (
    <>
      <div id="contact" className="contactwrapper">
        <div class="container-fluid">
          <div className="contactHeading1">
            <div className="contactMainTitle">
              <h1>Contact Me</h1>
            </div>
            <div className="contactSubTitle">
              <h6>Get in touch</h6>
            </div>
          </div>
          <div className="row contactRow">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 contactcol">
              <div className="contactDetails">
                <div className="contactBox">
                  <div className="contactIcon">
                    <i class="fa-solid fa-phone phoneIcon"></i>
                  </div>
                  <div className="contactHeading">
                    <h6 className="contactTitle">Mobile Number</h6>
                    <p className="contactDiscription">+91-9702239078</p>
                  </div>
                </div>
                <div className="contactBox">
                  <div className="contactIcon">
                  <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div className="contactHeading">
                    <h6 className="contactTitle">Email Adrress</h6>
                    <p className="contactDiscription">dhwanikhintya999@gmail.com</p>
                  </div>
                </div>
                <div className="contactBox">
                  <div className="contactIcon">
                  <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="contactHeading">
                    <h6 className="contactTitle">Address</h6>
                    <p className="contactDiscription">Mumbai,Maharashtra,India.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 contactcol">
              <div className="contactFormBg">
              <div className="contactForm">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="John Deo"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="Number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="1234567890"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Project Type
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ecommerce / Portfolio / Blog"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Your Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter basic details about your project."
                  ></textarea>
                </div>
                <button type="button" class="btn btn-5 bubbly-button">Submit</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
