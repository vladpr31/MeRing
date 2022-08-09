import React from "react";
import SendIco from "../../Assets/send.svg";
import FooterLogo from "../../Assets/footerLogo.png";
import { Link } from "react-scroll";

import "./Footer.css";
const Footer = () => {
  const downloadButton = () => {
    return window.open(
      "https://drive.google.com/uc?export=download&id=1mVp-L8Gx3vyOY3phIgxNYKq4aXYI_vIY"
    );
  };
  return (
    <footer className="footer-section">
      <div className="footerContainer">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>Tel Aviv, Sushi, Israel</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+972 123456789</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mering@contactus.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="#">
                    <img
                      src={FooterLogo}
                      className="img-fluid"
                      alt="logo"
                    ></img>
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    This webpage was developed for self practice about an idea
                    I've had long ago.<br></br> Full product Presentation
                    available at --{" "}
                    <a id="githubRef" href="https://github.com/vladpr31/MeRing">
                      Github
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30"></div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p id="subsText">Stay Updated About New Features and News.</p>
                </div>
                <div className="subscribe-form">
                  <form>
                    <input type="text" placeholder="Email Address"></input>
                    <button id="sendIcon">
                      <img src={SendIco}></img>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="copyRightContainer">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2022, All Rights Reserved Vlad Propisnov.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <Link
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="services"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <a href="https://vladip.herokuapp.com">Portfolio</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
