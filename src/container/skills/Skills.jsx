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
import postgresql from "../../assets/postgresql.gif";
import "./skills.css";

export default function Skills() {
  return (
    <section
      className="skills section__padding gradient__background"
      id="skills"
    >
      <div className="skills__title">
        <h3>SKILLS & TOOLS</h3>
        <p>Skills, tools and technologies I use to bring products to life:</p>
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
    </section>
  );
}
