import React from 'react'
import Hero from './Components/Hero'
import Skills from './Components/Skills';
import About from './Components/About';
import Services from './Components/Services';
import Education from './Components/Education';

function App() {

  return (
      <div className='w-full h-full bg-center bg-no-repeat bg-cover '>
        <Hero/>
        <Skills/>
        {/* <About/> */}
        <Services/>
        <Education/>

      </div>
  )
}

export default App
