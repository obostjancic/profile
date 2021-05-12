import React from "react";
import "./App.css";
import { Experience } from "./experience/Experience";
import { Skills } from "./skills/Skills";
import { Intro } from "./intro/Intro";
import { Projects } from "./projects/Projects";
import { Writing } from "./writing/Writing";
import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";

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
