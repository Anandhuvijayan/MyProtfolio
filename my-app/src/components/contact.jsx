import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="site-section bg-light" id="section-contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>
                    Wanna <strong>Start Work</strong> With Me?
                  </h2>
                </div>
              </div>

              <div className="col-md-7 mb-5 mb-md-0">
                <form action="" className="site-form">
                  <h3 className="mb-5">Get In Touch</h3>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control px-3 py-4"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control px-3 py-4"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control px-3 py-4"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="form-group mb-5">
                    <textarea
                      className="form-control px-3 py-4"
                      cols="30"
                      rows="10"
                      placeholder="Write a Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-primary px-4 py-3"
                      value="Send Message"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-5 pl-md-5">
                <h3 className="mb-5">My Contact Details</h3>
                <ul className="site-contact-details">
                  <li>
                    <span className="text-uppercase">Email</span>
                    anandhuvijayan400@gmail.com
                  </li>
                  <li>
                    <span className="text-uppercase">Phone</span>
                    +49 15739 735925
                  </li>

                  <li>
                    <span className="text-uppercase">Address</span>
                    Solmsstrasse 37A <br />
                    Berlin, Germany <br />
                    10961
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container">
            <div className="row mb-3">
              <div className="col-md-12 text-center">
                <p>
                  <a
                    href="https://www.facebook.com/anandhu.vijayan.5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                  >
                    <span className="icon-facebook2"></span>
                  </a>
                  <a
                    href="https://linkedin.com/in/anandhu-vijayan-4bb350121/ed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                  >
                    <span className="icon-linkedin2"></span>
                  </a>
                  <a
                    href="https://github.com/Anandhuvijayan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                  >
                    <span className="icon-github"></span>
                  </a>
                  <a href="#insta" className="social-item">
                    <span className="icon-instagram2"></span>
                  </a>
                </p>
              </div>
            </div>
            <div className="row">
              <p className="col-12 text-center">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | This template is made with
                <i className="icon-heart" aria-hidden="true"></i> by
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
