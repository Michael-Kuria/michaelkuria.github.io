import React from "react";
import michael from "../../assets/Michael.JPG";
import "./header.css";

export default function Header() {
  return (
    <header className="header" id="header">
      <div className="header__content">
        <p className="header__content--name">
          Hi👋, I'm <span className="gradient__background">Michael Kuria</span>
        </p>
        <p className="header__content--fullstack">
          I'm a Full Stack Developer.
        </p>
      </div>

      <div className="header__image">
        <img src={michael} alt="Michael Kuria" />
      </div>

      {/* <div className="header__btn">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient__background"
          >
            Download Resume
          </a>
        </div> */}
    </header>
  );
}
