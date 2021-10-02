import React from "react";
import { Fade } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./../css/Portfolio.css";

function Portfolio({ data }) {
  if (!data) return null;

  const projects = data.map(function (project, index) {
    const projectImage = process.env.PUBLIC_URL+"/images/" + project.image;
    return (
      <div key={index} className="portfolio__project">
        <div className="portfolio__project__card">
          <a
            href={project.url}
            target="_BLANK"
            rel="noreferrer"
            className="portfolio__image__link"
          >
            <img
              alt={project.title}
              src={projectImage}
              className="portfolio__image"
            />
          </a>
          <div style={{ textAlign: "center" }}>
            <a
              className="project-title"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              {project.title}
            </a>
          </div>
          <p style={{ fontFamily: "Fira Sans", margin: "10px" }}>
            {project.description}
          </p>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__data">
        <a
          className="portfolio__title"
          href="https://github.com/Samuelprograms"
        >
          Check Out Some of My Projects <FontAwesomeIcon icon={faGithub} />
        </a>
        <Fade bottom cascade>
          <div className="portfolio__projects">{projects}</div>
        </Fade>
      </div>
    </section>
  );
}

export default Portfolio;
