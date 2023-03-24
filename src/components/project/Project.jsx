import React from "react";
import "./project.css";

export default function Project({
  title,
  description,
  technologies,
  url,
  image,
}) {
  return (
    <div className="project">
      <div className="project__content">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{technologies}</p>
        <div className="link__button">
          <a
            href={url}
            className="gradient__background"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repo
          </a>
        </div>
      </div>
      <div className="project__image">
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1rem",
            overflow: "hidden",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
          }}
        ></div>
      </div>
    </div>
  );
}
