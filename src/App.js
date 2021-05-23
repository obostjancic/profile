import React from "react";
import styled from "styled-components";
import "./App.css";
import { Experience } from "./sections/Experience";
import { Footer } from "./sections/Footer";
import { Intro } from "./sections/intro/Intro";
import { Navbar } from "./sections/Navbar";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/skills/Skills";
import { Writing } from "./sections/Writing";

const Main = styled.main`
  text-align: center;
  z-index: 11;
  position: relative;
  min-width: 380px;
`;

function App() {
  return (
    <>
      <div className="background-shape" />
      <Main>
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Experience />
        <Writing />
        <Footer />
      </Main>
    </>
  );
}

export default App;
