import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <section className="site-section bg-light" id="section-resume">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>
                    My <strong>Resume</strong>
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="mb-5">Education</h2>
                <div className="resume-item mb-2">
                  <span className="date">
                    <span className="icon-calendar"></span> July 2012 - 2016 May
                  </span>
                  <h3>Bachelor of Computer Science Engineering</h3>
                  <p>
                    I completed studies in computer Science including
                    mathematical and theoretical foundations of computing. I did
                    two coursework as part of this program that was helping to
                    develop my technical problem solving and development of
                    software and testing skills.
                  </p>
                  <span className="school">Calicut University</span>
                </div>

                <div className="resume-item mb-2">
                  <span className="date">
                    <span className="icon-calendar"></span> October 2018 - March
                    2020
                  </span>
                  <h3>MSc Project Management</h3>
                  <p>
                    I complteted my masters in Project Management that is help
                    to learn more about how to manage company project especially
                    software and hardware related projects.
                  </p>
                  <span className="school">Arden University</span>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="mb-5">Experience</h2>

                <div className="resume-item mb-2">
                  <span className="date">
                    <span className="icon-calendar"></span> November 2019 -
                    January 2020
                  </span>
                  <h3>Web Development Trainee</h3>
                  <p>
                    I completed the intern training program successfully. This
                    coursework was helped to develop my technical problem
                    solving and software development and testing skills.
                  </p>
                  <span className="school">Technovalley Software ltd</span>
                </div>

                <div className="resume-item mb-2">
                  <span className="date">
                    <span className="icon-calendar"></span> March 2016 - 2017
                  </span>
                  <h3>System Support Engineer</h3>
                  <p>
                    Experience to manage software and hardware problems and key
                    responsibility of this work was to find and solve the client
                    issues.
                  </p>
                  <span className="school">Accel Frontline Ltd</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
