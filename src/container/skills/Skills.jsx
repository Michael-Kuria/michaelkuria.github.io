import React from "react";
import { Skill } from "../../components";
import {
  faJava,
  faReact,
  faCss3,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import "./skills.css";

export default function Skills() {
  return (
    <>
      <section className="gradient__background" id="skills">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d9d9d9"
            fill-opacity="1"
            d="M0,288L120,261.3C240,235,480,181,720,181.3C960,181,1200,235,1320,261.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        <div className="skills section__padding" style={{ paddingTop: "0rem" }}>
          <div className="section__title">
            <h3>SKILLS & TOOLS</h3>
            <p>Skills and tools I use to bring products to life:</p>
          </div>
          <div className="skills__content">
            <Skill icon={faJava} name="Java" />
            <Skill icon={faReact} name="React" />
            <Skill icon={faCss3} name="CSS3" />
            <Skill icon={faHtml5} name="HTML5" />
            <Skill icon={faJs} name="JavaScript" />
            <Skill icon={faGit} name="Git" />
            <Skill icon={faGithub} name="Github" />
            <Skill icon={faFigma} name="Figma" />
            {/* <Skill icon={} name=""/>
             */}
          </div>
        </div>
      </section>
    </>
  );
}
