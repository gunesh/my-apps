import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="containers">
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="footer-pad">
                  <h4>Quick Links</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/" className="">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" className="">
                        Our Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="">
                        Contact US
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-sm-3">
                <div className="footer-pad">
                  <h4>Connect with US</h4>
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa fa-phone"></i> &nbsp; +91 9021751269
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i> &nbsp;
                      connect@greencontie.com
                    </li>
                    <li>
                      <a
                        className="whatsapp"
                        rel="noreferrer"
                        href="https://wa.me/919021751269?text=Hi Mogli"
                        target="_blank"
                      >
                        <i className="fa fa-whatsapp"></i> &nbsp; 9021751269
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className="footer-pad">
                  <h4>Products</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/clay" className="">
                        Terracotta Clay Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/seed" className="">
                        Seed
                      </Link>
                    </li>
                    <li>
                      <Link to="/handicraft" className="">
                        Handicraft Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/bamboo" className="">
                        Bamboo Products
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <h4>Follow Us</h4>
                <ul className="social-network social-circle">
                  <li>
                    <a
                      href="https://www.facebook.com/greencontie"
                      target="_blank"
                      rel="noreferrer"
                      className="icoFacebook"
                      title="Facebook"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/greencontie/"
                      target="_blank"
                      rel="noreferrer"
                      className="icoLinkedin"
                      title="Linkedin"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/greencontie"
                      target="_blank"
                      rel="noreferrer"
                      className="icoTwitter"
                      title="Twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center copyright">
                  &copy; Copyright {year} - Greencontie. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
