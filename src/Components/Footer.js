import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";

import Fade from "react-reveal";
import "./../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Fade bottom>
        <div className="footer__links">
          <div className="social__links">
            <a
              className="footer__link"
              target="_BLANK"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ceronsamuel/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="footer__icon" />
            </a>
            <a
              className="footer__link"
              target="_BLANK"
              rel="noopener noreferrer"
              href="https://github.com/Samuelprograms"
            >
              <FontAwesomeIcon icon={faGithub} className="footer__icon" />
            </a>
            <a
              className="footer__link"
              target="_BLANK"
              rel="noopener noreferrer"
              href="https://www.instagram.com/cerondios/?hl=es-la"
            >
              <FontAwesomeIcon icon={faInstagram} className="footer__icon" />
            </a>
            <a
              className="footer__link"
              target="_BLANK"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCxUgwTt1bmirwPmtQejS1Mg"
            >
              <FontAwesomeIcon icon={faYoutube} className="footer__icon" />
            </a>
          </div>

          <div className="copyright">
            <p style={{ color: "#666" }}>
              &copy; Copyright 2021 &bull; Design by
            </p>
            &nbsp;
            <a
              className="footer__name"
              href="https://github.com/Samuelprograms"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              Samuel Cerón
            </a>
          </div>
        </div>
      </Fade>

      <button
        className="btn__top"
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </footer>
  );
}

export default Footer;
