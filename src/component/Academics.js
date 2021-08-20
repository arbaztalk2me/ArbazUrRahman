import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Academics(props) {
  AOS.init();
  return (
    <div data-aos="fade-right" id="academics" className="my-5">
      <h1 className="text-center mb-5">
        Academics <i class="fas fa-user-graduate ms-2"></i>
      </h1>
      {/* Mobile View */}
      <div>
        <div className="row m-auto">
          <div className="col-sm-12  d-md-none mb-3">
            <div className="card shadow">
              <div className="card-header h4">B.Tech</div>
              <img
                src="https://images.outlookindia.com/public/uploads/articles/2021/3/31/sdu_20210331_571_855.jpg"
                class="card-img-top img-thumbnaill pt-3 rounded"
                alt="..."
              />
              <div className="card-body">
                <span className="me-2">Institute Name:</span>
                <span>Techno International Newtown</span>
                <br />
                <span className="me-2">May 2018 to</span>
                <span>May 2022</span>
                <br />
                <hr className="" />
                <span className="text-muted mt-2">
                  B. Tech serves as a turning point of my life where i not only
                  explored my self but also learnt time management and how to
                  handle work pressure.
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-12  d-md-none mb-3">
            <div className="card shadow">
              <div className="card-header h4">Isc</div>
              <img
                src="https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/18543/2019/5/14/College%20View%20of%20Oriental%20College%20Patna_Campus-View.jpg"
                class="card-img-top img-thumbnaill pt-3 rounded"
                alt="..."
              />
              <div className="card-body">
                <span className="me-2">Institute Name:</span>
                <span>Oriental College</span>
                <br />
                <span className="me-2">May 2016 to</span>
                <span>May 2018</span>
                <br />
                <div className="mb-1"></div>
                <hr />
                <span className="text-muted mt-2">
                  In higher secondary i have acquired in depth knowledge about
                  various topics i was interested in. Thus, enhancing my
                  knowledge.
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-12  d-md-none mb-3">
            <div className="card shadow">
              <div className="card-header h4">Matriculation</div>
              <img
                src="https://www.stannespatnacity.in/wp-content/uploads/2016/08/school-building2.jpg"
                class="card-img-top img-thumbnaill pt-3 rounded"
                alt="..."
              />
              <div className="card-body">
                <span className="me-2">Institute Name:</span>
                <span>St.Anne's High School</span>
                <br />
                <span className="me-2">May 2015 to</span>
                <span>May 2016</span>
                <br />
                <div className="mb-1"></div>
                <hr />
                <span className="text-muted mt-2">
                  In secondary i have acquired basic cultural elements
                  especially humanistic and scientific. My school focused on
                  over all development of every student which has helped me to
                  develop my work habit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Mobile View */}
      <div className="timeline d-none d-md-block">
        <div className="timeline-box">
          <div className="card shadow">
            <div className="card-header h4">B.Tech</div>
            <img
              src="https://images.outlookindia.com/public/uploads/articles/2021/3/31/sdu_20210331_571_855.jpg"
              class="card-img-top img-thumbnaill pt-3 rounded"
              alt="..."
            />
            <div className="card-body">
              <span className="me-2">Institute Name:</span>
              <span>Techno International Newtown</span>
              <br />
              <span className="me-2">May 2018 to</span>
              <span>May 2022</span>
              <br />
              <br />
              <hr />
              <br />
              <span className="text-muted ">
                B. Tech serves as a turning point of my life where i not only
                explored my self but also learnt time management and how to
                handle work pressure.
              </span>
            </div>
          </div>
        </div>
        <div className="timeline-box">
          <div className="card shadow">
            <div className="card-header h4">Isc</div>
            <img
              src="https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/18543/2019/5/14/College%20View%20of%20Oriental%20College%20Patna_Campus-View.jpg"
              class="card-img-top img-thumbnaill pt-3 rounded"
              alt="..."
            />
            <div className="card-body">
              <span className="me-2">Institute Name:</span>
              <span>Oriental College</span>
              <br />
              <span className="me-2">May 2016 to</span>
              <span>May 2018</span>
              <br />
              <br />
              <hr />
              <br />
              <span className="text-muted mt-2">
                In higher secondary i have acquired in depth knowledge about
                various topics i was interested in. Thus, enhancing my
                knowledge.
              </span>
            </div>
          </div>
        </div>
        <div className="timeline-box">
          <div className="card shadow">
            <div className="card-header h4">Matriculation</div>
            <img
              src="https://www.stannespatnacity.in/wp-content/uploads/2016/08/school-building2.jpg"
              class="card-img-top img-thumbnaill pt-3 rounded"
              alt="..."
            />
            <div className="card-body">
              <span className="me-2">Institute Name:</span>
              <span>St.Anne's High School</span>
              <br />
              <span className="me-2">May 2015 to</span>
              <span>May 2016</span>
              <br />
              <br />
              <hr />
              <br />
              <span className="text-muted mt-2">
                In secondary i have acquired basic cultural elements especially
                humanistic and scientific. My school focused on over all
                development of every student which has helped me to develop my
                work habit.
              </span>
            </div>
          </div>
        </div>
        <div className="timeline-divider">
          <div className="timeline-traveller">
            <i class="fas fa-plane fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academics;
