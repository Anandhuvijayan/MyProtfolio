import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="site-section" id="section-about">
          <div className="container">
            <div className="row mb-5 align-items-center">
              <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                <img
                  src="images/Inshot2.jpg"
                  alt="placeholder"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-5 pl-lg-5">
                <div className="section-heading">
                  <h2>
                    About <strong>Me</strong>
                  </h2>
                </div>

                <p className="mb-5">
                  I am a passionate Full-Stack Software developer and I
                  interested to study updated technologies and tackle complex
                  problems. I completed my Bachelors in Computer Science
                  Engineering. My technical and management skills which will use
                  to support the growth of the organization as well as myself.
                </p>

                <p>
                  <a
                    href="#section-contact"
                    className="btn btn-primary px-4 py-2 btn-sm smoothscroll"
                  >
                    Hire Me
                  </a>
                  <a
                    href="#resume"
                    className="btn btn-secondary px-4 py-2 btn-sm"
                    href="https://drive.google.com/file/d/1SQn2bsEwmiO9ywT7I8FK7sZUTwYnD_iW/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </p>
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-md-3 mb-3">
                <div className="section-heading">
                  <h2>
                    My <strong>Skills</strong>
                  </h2>
                </div>
              </div>
              <div className="col-md-9">
                <div className="skill">
                  <h3>HTML5</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>90%</span>
                    </div>
                  </div>
                </div>

                <div className="skill">
                  <h3>CSS3</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "88%" }}
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>88%</span>
                    </div>
                  </div>
                </div>

                <div className="skill">
                  <h3>Bootstrap</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>85%</span>
                    </div>
                  </div>
                </div>

                <div className="skill">
                  <h3>JavaScript</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>85%</span>
                    </div>
                  </div>
                </div>

                <div className="skill">
                  <h3>React.js</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>80%</span>
                    </div>
                  </div>
                </div>

                <div className="skill">
                  <h3>Python</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
