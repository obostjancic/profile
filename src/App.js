import React from "react";
import "./App.css";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Intro } from "./Intro";

const Projects = () => <div>some projects</div>;
const Education = () => <div>education list</div>;

function App() {
  return (
    <>
      <div className="background-shape"></div>
      <div className="main">
        <Intro />
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </div>
    </>
  );
}

export default App;
