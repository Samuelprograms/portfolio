import React from "react";
import { Fade } from "react-reveal";

import "../css/About.css";

function About({ data, carrousel }) {
  return (
    <div id="about" className="about">
      <Fade bottom cascade>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
        >
          <div className="contenedor">
            <div className="contenedor__left">{data}</div>
            <div className="contenedor__right">
              <div className="contenedor__right--fade"></div>
            </div>
          </div>
          <div className="carrousel">
            {carrousel.map((item) => (
              <img
                key={item.title}
                src={process.env.PUBLIC_URL+"/images/" + item.url}
                alt={item.title}
              />
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default About;
