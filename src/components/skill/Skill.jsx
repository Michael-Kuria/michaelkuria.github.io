import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./skill.css";

export default function Skill({ icon, name }) {
  return (
    <div className="skill">
      <FontAwesomeIcon icon={icon} size="2x" />
      <p>{name}</p>
    </div>
  );
}
