import React from "react";
import "./App.css";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/skills/Skills";
import { Intro } from "./sections/intro/Intro";
import { Projects } from "./sections/Projects";
import { Writing } from "./sections/Writing";
import { Footer } from "./sections/Footer";
import { Navbar } from "./sections/Navbar";

function App() {
  return (
    <>
      <div className="background-shape" />
      <div className="main">
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Experience />
        <Writing />
        <Footer />
      </div>
    </>
  );
}

export default App;
