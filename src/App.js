import React from "react";
import { Navbar, Header, Footer } from "./components";
import { Skills, Projects } from "./container";

import "./app.css";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        {/* <ContactMe /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
