import React from "react";
import { Fade } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./../css/Header.css";
function Header() {
  return (
    <div id="home">
      <div className="header__text">
        <Fade bottom cascade>
          <h1 className="header__title">Samuel Cerón</h1>
          <h3 className="header__description">
            Self Taught web developer & Mechatronic engineer
          </h3>
        </Fade>
      </div>
      <div className="header__buttons">
        <a
          href="./resume.pdf"
          download="Samuel's Resume"
          className="header__button"
        >
          <FontAwesomeIcon className="btn-icon" icon={faFileAlt} />
          Download CV
        </a>
        <a
          href="https://github.com/Samuelprograms"
          className="header__button"
          target="_BLANK"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="btn-icon" />
          Github
        </a>
      </div>
    </div>
  );
}

export default Header;
