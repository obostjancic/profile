import React from "react";
import "./App.css";
import { Experience } from "./experience/Experience";
import { Skills } from "./skills/Skills";
import { Intro } from "./intro/Intro";
import { Projects } from "./projects/Projects";
import { Writing } from "./writing/Writing";
import { Footer } from "./footer/Footer";

function App() {
  return (
    <>
      <div className="background-shape" />
      <div className="main">
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
