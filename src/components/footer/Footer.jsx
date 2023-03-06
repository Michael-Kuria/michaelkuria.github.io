import React from "react";
import "./footer.css";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="section__padding footer">
      <p>&copy; {date.getFullYear} Michael Kuria</p>
    </footer>
  );
}
