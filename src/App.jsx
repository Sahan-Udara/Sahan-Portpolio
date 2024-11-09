import React from 'react';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import About from './Components/About';
import Services from './Components/Services';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Project } from './Components/Project';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="skills"><Skills /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="education"><Education /></div>
      <div id="project"><Project /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
