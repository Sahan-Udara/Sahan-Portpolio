import React from 'react'
import Hero from './Components/Hero'
import Skills from './Components/Skills';
import About from './Components/About';
import Services from './Components/Services';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Project } from './Components/Project';

function App() {

  return (
      <div className='w-full h-full bg-center bg-no-repeat bg-cover '>
        <Hero/>
        <Skills/>
        <About/>
        <Services/>
        <Education/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default App
