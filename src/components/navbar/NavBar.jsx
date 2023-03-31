import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./navbar.css";
import { Link } from "react-router-dom";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:mchege78@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Michael-Kuria",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/michael-chege-8aa5b4182/",
  },
];

const Links = ({ handleLinkClick }) => {
  return (
    <ul>
      <li>
        <Link
          to="#about"
          onClick={() => handleLinkClick("about")}
          reloadDocument
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="#skills"
          onClick={() => handleLinkClick("skills")}
          reloadDocument
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="#projects"
          onClick={() => handleLinkClick("projects")}
          reloadDocument
        >
          Projects
        </Link>
      </li>
      {/* <li>
        <a href="/#contact-me" onClick={handleLinkClick}>
          Contact Me
        </a>
      </li> */}
    </ul>
  );
};

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLinkClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav className="navbar gradient__background">
      <div className="navbar__socials">
        {socials.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={item.icon}
                size="3x"
                className="navbar__socials-icon"
              />
            </a>
          );
        })}
      </div>
      <div className="navbar__links">
        <Links />
      </div>

      <div className="navbar__menu-button">
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          onClick={() => setToggleMenu((prev) => !prev)}
        />
      </div>

      {toggleMenu && (
        <div className="navbar__menu">
          <div className="navbar__menu-icon">
            <FontAwesomeIcon
              icon={faXmark}
              size="2x"
              onClick={() => setToggleMenu((prev) => !prev)}
            />
          </div>
          <Links handleLinkClick={handleLinkClick} />
        </div>
      )}
    </nav>
  );
}
