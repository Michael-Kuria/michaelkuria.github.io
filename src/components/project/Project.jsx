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
          <a href={url} className="gradient__background">
            Github Repo
          </a>
        </div>
      </div>
      <div className="project__image wobble-hor-bottom">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
