import React from "react";
import { Slide } from "react-reveal";
import "./../css/Resume.css";

function Resume({ data }) {
  if (!data) return null;
  const getRandomColor = () => {
    let numbers = "456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 3; i++) {
      color += numbers[Math.floor(Math.random() * 12)];
    }
    return color;
  };
  const education = data.education.map(function (education, index) {
    return (
      <div key={index} className="info">
        <Slide left cascade>
          <h2 className="info__name">{education.school}</h2>
          <span className="info__degree">
            {education.degree} <span>&bull;</span>
            <em className="info__degree__date">{education.graduated}</em>
          </span>
          <p className="info__description">{education.description}</p>
        </Slide>
      </div>
    );
  });
  const grades = data.grades.map(function (grades, index) {
    return (
      <div key={index} className="info">
        <Slide left cascade>
          <h2 className="info__name">{grades.degree}</h2>
          <span className="info__degree">
            {grades.school} <span>&bull;</span>
            <em className="info__degree__date">{grades.graduated}</em>
          </span>
        </Slide>
      </div>
    );
  });

  const skills = data.skills.map((skills, index) => {
    const backgroundColor = getRandomColor();
    const width = skills.level;
    return (
      <div key={index} className="bars">
        <Slide left cascade>
          <div className="bar">
            <div
              style={{
                width: `${width}`,
                height: "60px",
                textAlign: "end",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 20px",
                color: "black",
                fontWeight: "600",
                borderRadius: "35px",
                background: `linear-gradient(to right,${backgroundColor} 50%, #fff)`,
              }}
            >
              <span style={{ fontSize: "16px", color: "#000" }}>
                {skills.name}
              </span>
              {width}
            </div>
          </div>
        </Slide>
      </div>
    );
  });
  const otherSkills = data.otheSkills.map((skills, index) => {
    const backgroundColor = getRandomColor();
    const width = skills.level;
    return (
      <div key={index} className="bars">
        <Slide left cascade>
          <div className="bar">
            <div
              style={{
                width: `${width}`,
                height: "60px",
                textAlign: "end",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 20px",
                color: "black",
                fontWeight: "600",
                borderRadius: "35px",
                background: `linear-gradient(to right,${backgroundColor} 50%, #fff)`,
              }}
            >
              <span style={{ fontSize: "16px", color: "#000" }}>
                {skills.name}
              </span>
              {width}
            </div>
          </div>
        </Slide>
      </div>
    );
  });
  const languages = data.languages.map((language, index) => {
    return (
      <div key={index} className="bars_language">
        <Slide left cascade>
          <h2 className="skill__name">
            {language.name} - {language.level}
          </h2>
          <div className="bar_language">
            {language.skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  width: Object.values(skill),
                  height: "60px",
                  textAlign: "end",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 20px",
                  color: "black",
                  marginBottom: "3px",
                  fontWeight: "600",
                  borderRadius: "30px",
                  background: `linear-gradient(to right, ${getRandomColor()} 50%, #fff)`,
                }}
              >
                <span>{Object.keys(skill)}</span>
                <span>{Object.values(skill)}</span>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    );
  });

  return (
    <section id="resume" className="resume">
      <Slide left cascade>
        <div className="education">
          <h2 className="title">EDUCATION</h2>
          <div className="education__items">{education}</div>
        </div>
        <hr />
        <div className="grades">
          <h2 className="title">GRADES</h2>
          <div className="grades__items">{grades}</div>
        </div>
        <hr />
        <div className="skill">
          <h2 className="title">SKILLS</h2>
          <div className="skills">{skills}</div>
        </div>
        <hr />
        <div className="skill">
          <h2 className="title">OTHER SKILLS</h2>
          <div className="skills">{otherSkills}</div>
        </div>
        <hr />
        <div className="skill">
          <h2 className="title">LANGUAGES</h2>
          <div className="skills">{languages}</div>
        </div>
      </Slide>
    </section>
  );
}

export default Resume;
