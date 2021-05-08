import React from "react";
import "./App.css";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { Blog } from "./Blog";

const Education = () => <div>education list</div>;

function App() {
  return (
    <>
      <div className="background-shape" />
      <div className="main">
        <Intro />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Blog />
      </div>
    </>
  );
}

export default App;
