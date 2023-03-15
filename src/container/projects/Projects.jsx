import React from "react";
import { Project } from "../../components";
import littleLemon from "../../assets/Little Lemon-home.png";
import "./projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Little Lemon Restaurant",
      description:
        "A restaurant website displaying restaurant information and the food available in the menu. It also has a form for table reservation ",
      technologies: "React, CSS3, HTML5",
      url: "#",
      image: littleLemon,
    },
  ];
  return (
    <section className="projects section__padding" id="projects">
      <div className="projects__title">
        <h1>PROJECTS</h1>
      </div>
      <div className="projects__content">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
