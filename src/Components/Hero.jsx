import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Background from '../assets/Background/SubBack.jpg';
import MainBackground from '../assets/Back/BackExpand.jpg';
import Ashan from '../assets/Hero/Ashan.png';

const Hero = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1); // Update the key to trigger remount
  }, []); // Runs on mount and on page reload

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      key={key}
      className='p-4 pb-8 md:pt-[100px] md:px-[200px] md:pb-[50px] w-full h-full bg-center bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${MainBackground})` }}
    >
      <div
        className='relative grid w-full h-full grid-cols-2 bg-center bg-no-repeat bg-cover rounded-3xl border-4 border-[#8d4aea]'
        style={{ backgroundImage: `url(${Background})` }}
      >
        <motion.div 
          className='w-full h-full m-4 cursor-default md:ml-20 md:my-20'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-2xl md:text-4xl font-bold text-[#ffffff]'>Hello,</h1>
          <h1 className="text-5xl md:text-5xl lg:text-9xl max-[1400px]:text-5xl text-[#8d4aea] hover:text-[#a041ff] font-black font-sans uppercase md:text-left pr-4">Ashan Kavindu</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#ffffff] font-black font-sans my-4 md:my-8 md:text-left">Front-End Developer</h2>
          <div className='flex flex-row gap-2 mr-8 '>
            <button onClick={() => scrollToSection('contact')} className='py-2 px-3 md:py-3 md:px-6 bg-[#8d4aea] hover:bg-[#a041ff] text-[#ffffff] rounded-lg text-[10px] font-bold md:text-[18px]'>
              Say Hello
            </button>
            <button onClick={() => scrollToSection('project')} className='py-2 px-3 md:py-3 md:px-6 text-[#ffffff] rounded-lg border hover:text-[#a041ff] hover:border-[#a041ff] text-[10px] md:text-[18px] font-bold'>
              My Work
            </button>
          </div>
        </motion.div>

        <motion.div 
          className='relative flex w-full h-full'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={Ashan} className="absolute bottom-0 right-0 w-auto md:w-[600px] pt-4 object-contain rounded-br-[20px]"/>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
