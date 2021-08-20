import React from "react";
import "../App.css";
function Header(props) {
  return (
    <div className="background">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-8 p-5">
            <h1 className="text-white">Hi, I'm Arbaz Ur Rahman 👋</h1>
            <h3 className="text-white">I Design Graphic visuals</h3>
            <h3 className="text-white">Ui for Websites</h3>
            <div className="header-btn">
              <a href="#connect" className="btn btn-outline-success  mt-2 ">
                Get In Touch<i class=" ms-2 fas fa-user-plus"></i>
              </a>
              <a
                href="https://srv-store3.gofile.io/download/08226604-3d77-41ae-8528-c4714ecffb3f/ArbazUrRahman_IT_TINT_2022passout_batch.docx"
                className="btn btn-outline-warning ms-2 mt-2 "
              >
                Download CV<i class="ms-2 fas fa-file"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 p-5">
            <div className="img-container">
              <img
                className="rounded-circle img-fluid img-border"
                src="https://i.ibb.co/6td7kxQ/profile.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
