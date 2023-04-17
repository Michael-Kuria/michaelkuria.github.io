import React from "react";
import { Project } from "../../components";
import littleLemon from "../../assets/little-lemon-home.png";
import budgetTracker from "../../assets/budget-tracker-application-overview-page.png";
import "./projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Little Lemon Restaurant",
      description:
        "Little Lemon is a website that provides users with the ability to view a restaurant's menu and book a table online. Users can easily browse the restaurant's menu, which includes information about each dish, such as ingredients and prices. They can also view pictures of the dishes to help them make their selection.",
      technologies: "React, CSS3, HTML5",
      url: "https://github.com/Michael-Kuria/little-lemon",
      image: littleLemon,
    },
    {
      title: "Budget Tracker Application",
      description:
        "A Tool for managing personal finances. By providing users with the ability to input and view their transactions on tables and graphs, so that they can better understand their spending habits and take steps to achieve their financial goals",
      technologies: "React, CSS3, HTML5, Spring boot",
      url: "https://github.com/Michael-Kuria/Budget-Tracker-Application",
      image: budgetTracker,
    },
  ];
  return (
    <section className="projects section__padding" id="projects">
      <div className="section__title">
        <h3>PROJECTS</h3>
      </div>
      <div className="projects__content">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
