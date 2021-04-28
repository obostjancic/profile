import React from "react";
import "./App.css";
import { Intro } from "./Intro";

const Experience = () => <>experience list</>;
const Projects = () => <>some projects</>;
const Education = () => <>education list</>;

function App() {
  return (
    <>
      <Intro />
      <Experience />
      <Projects />
      <Education />
    </>
  );
}

export default App;
