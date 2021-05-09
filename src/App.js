import React from "react";
import "./App.css";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { Writing } from "./Writing";

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
      </div>
    </>
  );
}

export default App;
