import React from "react";
import "./App.css";
import { Experience } from "./Experience";
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
        <Projects />
        <Education />
      </div>
    </>
  );
}

export default App;
