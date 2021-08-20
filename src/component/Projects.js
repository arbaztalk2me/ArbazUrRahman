import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects(props) {
  AOS.init();
  return (
    <div data-aos="fade-right" id="projects" className="project-body my-5">
      <div>
        <h1 className="text-center">
          Projects <i class="fas fa-paper-plane ms-2"></i>
        </h1>
        <hr className=" border border-2 border-warning" />
      </div>
      {/* Mobile View */}
      <div className=" mt-3">
        <div className="row m-auto">
          <div className="col-sm-12   d-md-none mb-3  ">
            <div className="card shadow">
              <a
                className="m-auto"
                href="https://i.ibb.co/284YDC9/imgtotext.png"
                target="_blank"
              >
                <img
                  src="https://i.ibb.co/284YDC9/imgtotext.png"
                  class="card-img-top img-thumbnaill pt-3 rounded"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="h4 text-center mb-3">
                  Image To Text converter
                </div>
                <br />
                <div className="mb-3">
                  <span className="h5">Description:</span>
                  <span className="text-muted ms-2 fs-6">
                    imgTotext app using reactjs,Html,CSS and Bootstrap
                    <br />
                    NodePackage-Tesseract.js
                    <br /> Api-imgbb
                    <br />
                    upload photo and get text of your photos.
                  </span>
                  <br />
                </div>
                <span className="me-3">Link</span>

                <a
                  className="btn btn-outline-success btn-sm"
                  target="_blank"
                  href="https://arbaztalk2me.github.io/react-imgTotext/"
                >
                  Visit Link<i class="ms-2 fab fa-firefox"></i>
                </a>
                <a
                  className="btn btn-outline-dark ms-2 btn-sm"
                  target="_blank"
                  href="https://github.com/arbaztalk2me/react-imgTotext"
                >
                  Github Link <i class="fab fa-github ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12  d-md-none mb-3">
            <div className="card shadow">
              <a
                className="m-auto"
                href="https://i.ibb.co/svRk38m/todo.png"
                target="_blank"
              >
                <img
                  src="https://i.ibb.co/svRk38m/todo.png"
                  class="card-img-top img-thumbnaill pt-3 rounded"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="h4 text-center mb-3">Todo App</div>
                <br />
                <div className="mb-3">
                  <span className="h5">Description:</span>
                  <span className="text-muted ms-2 fs-6">
                    Todo App using ReactJs Using UseState Hooks.
                    <br />
                    Ui-Html,CSS,Bootstrap5
                    <br /> You Can:- You can add todo ,delete todo ,edit your
                    todo and you can remove all todo at once.
                  </span>
                  <br />
                </div>
                <span className="me-3">Link</span>
                <a
                  className="btn btn-outline-success btn-sm"
                  target="_blank"
                  href="https://arbaztalk2me.github.io/todo-react-2/"
                >
                  Visit Link<i class="ms-2 fab fa-firefox"></i>
                </a>
                <a
                  className="btn btn-outline-dark ms-2 btn-sm"
                  target="_blank"
                  href="https://github.com/arbaztalk2me/todo-react-2"
                >
                  Github Link<i class="fab fa-github ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12  d-md-none mb-3">
            <div className="card shadow">
              <a
                className="m-auto"
                href="https://i.ibb.co/dK88Pt7/folio.png"
                target="_blank"
              >
                <img
                  src="https://i.ibb.co/dK88Pt7/folio.png"
                  class="card-img-top img-thumbnaill pt-3 rounded"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="h4 text-center mb-3">Portfolio</div>
                <br />
                <div className="mb-3">
                  <span className="h5">Description:</span>
                  <span className="text-muted ms-2 fs-6">
                    UI-HTML,Css,Js,Bootstrap
                    <br />
                    Responsive portfolio Design
                  </span>
                  <br />
                </div>
                <span className="me-3">Link</span>
                <a
                  className="btn btn-outline-success btn-sm"
                  target="_blank"
                  href="https://arbaztalk2me.github.io/sanket-folio/"
                >
                  Visit Link<i class="ms-2 fab fa-firefox"></i>
                </a>
                <a
                  className="btn btn-outline-dark ms-2 btn-sm"
                  target="_blank"
                  href="https://github.com/arbaztalk2me/react-imgTotext"
                >
                  Github Link<i class="fab fa-github ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12  d-md-none mb-3">
            <div className="card shadow">
              <a
                className="m-auto"
                href="https://i.ibb.co/8sBwC0S/calcu.png"
                target="_blank"
              >
                <img
                  src="https://i.ibb.co/8sBwC0S/calcu.png"
                  class="card-img-top img-thumbnaill pt-3 rounded"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="h4 text-center mb-3">Calculator</div>
                <br />
                <div className="mb-3">
                  <span className="h5">Description:</span>
                  <span className="text-muted ms-2 fs-6">
                    Build A web Sequential Calculator using HTML, CSS,
                    Javascript and added one theme using js
                  </span>
                  <br />
                </div>
                <span className="me-3">Link</span>
                <a
                  className="btn btn-outline-success btn-sm"
                  target="_blank"
                  href="https://arbaztalk2me.github.io/claculator2/"
                >
                  Visit Link<i class="ms-2 fab fa-firefox"></i>
                </a>
                <a
                  className="btn btn-outline-dark ms-2 btn-sm"
                  target="_blank"
                  href="https://github.com/arbaztalk2me/claculator2"
                >
                  Github Link<i class="fab fa-github ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile End */}
      <div className="timeline d-none d-md-block">
        <div className="timeline-box">
          <div className="card shadow">
            <a
              className="m-auto"
              href="https://i.ibb.co/284YDC9/imgtotext.png"
              target="_blank"
            >
              <img
                src="https://i.ibb.co/284YDC9/imgtotext.png"
                class="card-img-top img-thumbnaill pt-3 rounded"
                alt="..."
              />
            </a>
            <div className="card-body">
              <div className="h4 text-center mb-3">Image To Text converter</div>
              <br />
              <div className="mb-3">
                <span className="h5">Description:</span>
                <span className="text-muted ms-2 fs-6">
                  imgTotext app using reactjs,Html,CSS and Bootstrap
                  <br />
                  NodePackage-Tesseract.js
                  <br /> Api-imgbb
                  <br />
                  upload photo and get text of your photos.
                </span>
                <br />
              </div>
              <span className="me-3">Link</span>

              <a
                className="btn btn-outline-success btn-sm"
                target="_blank"
                href="https://arbaztalk2me.github.io/react-imgTotext/"
              >
                Visit Link<i class="ms-2 fab fa-firefox"></i>
              </a>
              <a
                className="btn btn-outline-dark ms-2 btn-sm"
                target="_blank"
                href="https://github.com/arbaztalk2me/react-imgTotext"
              >
                Github Link <i class="fab fa-github ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="timeline-box">
          <div className="card shadow">
            <a
              className="m-auto"
              href="https://i.ibb.co/svRk38m/todo.png"
              target="_blank"
            >
              <img
                src="https://i.ibb.co/svRk38m/todo.png"
                class="card-img-top img-thumbnaill pt-3 rounded"
                alt="..."
              />
            </a>
            <div className="card-body">
              <div className="h4 text-center mb-3">Todo App</div>
              <br />
              <div className="mb-3">
                <span className="h5">Description:</span>
                <span className="text-muted ms-2 fs-6">
                  Todo App using ReactJs Using UseState Hooks.
                  <br />
                  Ui-Html,CSS,Bootstrap5
                  <br /> You Can:- You can add todo ,delete todo ,edit your todo
                  and you can remove all todo at once.
                </span>
                <br />
              </div>
              <span className="me-3">Link</span>
              <a
                className="btn btn-outline-success btn-sm"
                target="_blank"
                href="https://arbaztalk2me.github.io/todo-react-2/"
              >
                Visit Link<i class="ms-2 fab fa-firefox"></i>
              </a>
              <a
                className="btn btn-outline-dark ms-2 btn-sm"
                target="_blank"
                href="https://github.com/arbaztalk2me/todo-react-2"
              >
                Github Link<i class="fab fa-github ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="timeline-box">
          <div className="card shadow">
            <a
              className="m-auto"
              href="https://i.ibb.co/dK88Pt7/folio.png"
              target="_blank"
            >
              <img
                src="https://i.ibb.co/dK88Pt7/folio.png"
                class="card-img-top img-thumbnaill pt-3 rounded"
                alt="..."
              />
            </a>
            <div className="card-body">
              <div className="h4 text-center mb-3">Portfolio</div>
              <br />
              <div className="mb-3">
                <span className="h5">Description:</span>
                <span className="text-muted ms-2 fs-6">
                  UI-HTML,Css,Js,Bootstrap
                  <br />
                  Responsive portfolio Design
                </span>
                <br />
              </div>
              <span className="me-3">Link</span>
              <a
                className="btn btn-outline-success btn-sm"
                target="_blank"
                href="https://arbaztalk2me.github.io/sanket-folio/"
              >
                Visit Link<i class="ms-2 fab fa-firefox"></i>
              </a>
              <a
                className="btn btn-outline-dark ms-2 btn-sm"
                target="_blank"
                href="https://github.com/arbaztalk2me/react-imgTotext"
              >
                Github Link<i class="fab fa-github ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="timeline-box">
          <div className="card shadow">
            <a
              className="m-auto"
              href="https://i.ibb.co/8sBwC0S/calcu.png"
              target="_blank"
            >
              <img
                src="https://i.ibb.co/8sBwC0S/calcu.png"
                class="card-img-top img-thumbnaill pt-3 rounded"
                alt="..."
              />
            </a>
            <div className="card-body">
              <div className="h4 text-center mb-3">Calculator</div>
              <br />
              <div className="mb-3">
                <span className="h5">Description:</span>
                <span className="text-muted ms-2 fs-6">
                  Build A web Sequential Calculator using HTML, CSS, Javascript
                  and added one theme using js
                </span>
                <br />
              </div>
              <span className="me-3">Link</span>
              <a
                className="btn btn-outline-success btn-sm"
                target="_blank"
                href="https://arbaztalk2me.github.io/claculator2/"
              >
                Visit Link<i class="ms-2 fab fa-firefox"></i>
              </a>
              <a
                className="btn btn-outline-dark ms-2 btn-sm"
                target="_blank"
                href="https://github.com/arbaztalk2me/claculator2"
              >
                Github Link<i class="fab fa-github ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="timeline-divider">
          <div className="timeline-traveller">
            <i class="fas fa-car fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
