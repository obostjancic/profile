import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Experience } from './sections/Experience';
import { Footer } from './sections/Footer';
import { Intro } from './sections/intro/Intro';
import { Navbar } from './sections/Navbar';
import { Projects } from './sections/Projects';
import { Skills } from './sections/skills/Skills';
// import { Articles } from './sections/Articles';

const Main = styled.main`
  text-align: center;
  z-index: 11;
  position: relative;
  min-width: 320px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <div id="background" className="background-shape" />
      <Main>
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Experience />
        {/* <Articles /> */}
        <Footer />
      </Main>
    </>
  );
}

export default App;
