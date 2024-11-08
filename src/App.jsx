import React from 'react'
import Hero from './Components/Hero'
import Skills from './Components/Skills';
import About from './Components/About';
import Services from './Components/Services';
import Education from './Components/Education';
import { Ipad } from './Components/ipad';
import Contact from './Components/Contact';

function App() {

  return (
      <div className='w-full h-full bg-center bg-no-repeat bg-cover '>
        <Hero/>
        <Skills/>
        {/* <About/> */}
        <Services/>
        <Education/>
        <Ipad/>
        <Contact/>

        

      </div>
  )
}

export default App
