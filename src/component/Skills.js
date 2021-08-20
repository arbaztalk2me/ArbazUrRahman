import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills(props) {
  AOS.init();
  return (
    <div id="skills" className="container">
      <div className="row">
        <div className="col-6 m-auto">
          <div className="card shadow text-center card-skills">
            <div className="p-3 h3 title">
              Technical Skills <i class="fas fa-laptop-code"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow p-3 mb-3 ">
        <div className="card-body">
          <div className="row ">
            <div className="col-md-4 d-flex flex-column align-items-center my-4">
              <h4>
                C++
                <img
                  src="https://img.icons8.com/ios/50/000000/c-plus-plus-logo.png"
                  className="cstyle ms-2"
                />
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="eighty text-center text-white">80%</div>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center my-4">
              <h4>
                Javascript<i class="fab fa-js-square ms-2"></i>
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="seventy-five text-center text-white">75%</div>
              </div>
            </div>

            <div className="col-md-4 d-flex flex-column align-items-center mt-4">
              <h4>
                Java<i class="fab fa-java ms-2"></i>
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="sixty-five text-center text-white">65%</div>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center mt-4">
              <h4>
                Python <i class="fab fa-python ms-2"></i>
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="sixty-five text-center text-white">65%</div>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center mt-4">
              <h4>
                React Js <i class="fab fa-react ms-2"></i>
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="seventy text-center text-white">70%</div>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center mt-4">
              <h4>
                HTML5<i class="fab fa-html5 ms-2"></i>
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="ninety-five text-center text-white">95%</div>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center mt-4">
              <h4>
                CSS3<i class="fab fa-css3-alt ms-2"></i>
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="eighty-five text-center text-white">85%</div>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center mt-4">
              <h4>
                Bootstrap<i class="fab fa-bootstrap ms-2"></i>
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="ninety text-center text-white"> 90%</div>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center mt-4">
              <h4>
                MySQL<i class="fas fa-database ms-2"></i>
              </h4>
              <div data-aos="zoom-out" className="outerdiv">
                <div className="eighty text-center text-white"> 80%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
