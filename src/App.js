import React from "react";
import { Navbar, Header, Footer, ContactMe } from "./components";
import { Skills, Projects } from "./container";

import "./app.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
