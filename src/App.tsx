import React from 'react';
import Articles from './sections/Articles';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Intro from './sections/intro/Intro';
import Navbar from './sections/Navbar';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  return (
    <main>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Experience />
      {/* <Articles /> */}
      <Footer />
    </main>
  );
}

export default App;
