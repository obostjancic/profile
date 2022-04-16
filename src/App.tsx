import React from 'react';
import styled from 'styled-components';
import { Experience } from './sections/Experience';
import { Footer } from './sections/Footer';
import { Intro } from './sections/intro/Intro';
import { Navbar } from './sections/Navbar';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Articles } from './sections/Articles';

function App() {
  return (
    <>
      {/* <div id="background" className="background-shape" /> */}
      <main>
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Experience />
        <Articles />
        <Footer />
      </main>
    </>
  );
}

export default App;
