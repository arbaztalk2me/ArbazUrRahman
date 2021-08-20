import React from "react";

function Footer(props) {
  return (
    <div id="connect" className="Footer py-2 shadow mt-3 text-white">
      <div className="row">
        <div className="col text-white text-center">Follow me on</div>
      </div>
      <div className="row">
        <div className="col-md-4 m-auto text-center text-white">
          <a
            className="text-white"
            target="_blank"
            href="https://www.linkedin.com/in/arbaz-ur-rahman-73847a131/"
          >
            <i class="fab fa-2x fa-linkedin me-2"></i>
          </a>
          <a
            className="text-white"
            target="_blank"
            href=" https://github.com/arbaztalk2me/"
          >
            <i class="fab fa-2x fa-github me-2"></i>
          </a>
          <a
            className="text-white"
            target="_blank"
            href="https://www.instagram.com/arbaztalk2me"
          >
            <i class="fab fa-2x fa-instagram me-2"></i>
          </a>
          <a
            className="text-white"
            target="_blank"
            href="https://www.facebook.com/arbaz.afridi.1806/"
          >
            <i class="fab fa-2x fa-facebook-square me-2"></i>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col  text-center">&copy; Arbaz Ur Rahman</div>
      </div>
    </div>
  );
}

export default Footer;
