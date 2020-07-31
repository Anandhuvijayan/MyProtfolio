import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="site-section" id="section-blog">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>
                    Blog on <strong>Medium</strong>
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="blog-entry">
                  <a href="#blog">
                    <img
                      src="images/post_1.jpg"
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="blog-entry-text">
                    <h3>
                      <a href="#facebook">
                        Creative Product Designer From Facebook
                      </a>
                    </h3>
                    <p className="mb-4">
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>

                    <div className="meta">
                      <a href="#calender">
                        <span className="icon-calendar"></span> Aug 7, 2018
                      </a>
                      <a href="#bubble">
                        <span className="icon-bubble"></span> 5 Comments
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="blog-entry">
                  <a href="#blog">
                    <img
                      src="images/post_2.jpg"
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="blog-entry-text">
                    <h3>
                      <a href="#blog">
                        Creative Product Designer From Facebook
                      </a>
                    </h3>
                    <p className="mb-4">
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>

                    <div className="meta">
                      <a href="#calander">
                        <span className="icon-calendar"></span> Aug 7, 2018
                      </a>
                      <a href="#bubble">
                        <span className="icon-bubble"></span> 5 Comments
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="blog-entry">
                  <a href="#blog">
                    <img
                      src="images/post_3.jpg"
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </a>
                  <div className="blog-entry-text">
                    <h3>
                      <a href="#blog">
                        Creative Product Designer From Facebook
                      </a>
                    </h3>
                    <p className="mb-4">
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>

                    <div className="meta">
                      <a href="#calander">
                        <span className="icon-calendar"></span> Aug 7, 2018
                      </a>
                      <a href="#bubble">
                        <span className="icon-bubble"></span> 5 Comments
                      </a>
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
