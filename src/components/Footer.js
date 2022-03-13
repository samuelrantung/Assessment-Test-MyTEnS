import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="rows">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by SamuelRantung
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/samuel-rantung-602b87216/"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a className="github" href="https://github.com/samuelrantung/">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
