import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Background from '../assets/Back/SubBack.jpg';
import MainBackground from '../assets/Back/BackExpand.jpg';
import Graphic from '../assets/Services/Graphic.png';
import UIUX from '../assets/Services/UIUX.png';
import Web from '../assets/Services/Web.png';

const Services = () => {
  const serviceDescription = 'Providing expert graphic design, mobile app development, UI/UX design, and web development solutions.';

  const servicesData = [
    { title: 'Graphic Designing', image: Graphic },
    { title: 'UI / UX Designing', image: UIUX },
    { title: 'Web Development', image: Web },
  ];

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1); 
  }, []);

  const sectionOneVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const sectionTwoVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      className='w-full h-full bg-center bg-no-repeat bg-cover p-4 md:pt-[100px] md:px-[200px] md:pb-[50px] cursor-default'
      style={{ backgroundImage: `url(${MainBackground})` }}
    >
      <motion.div
        key={animationKey} 
        variants={sectionOneVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 1 }}
      >
        <h1 className='mb-6 font-sans text-5xl font-black text-white md:text-6xl lg:text-8xl'>
          My 
          <span className='text-[#ffffff] hover:text-[#a041ff]'> Services</span>
        </h1>
        <p className='pb-10 font-sans text-xl text-[#d8c3f7]  md:text-3xl lg:text-2xl'>
          {serviceDescription}
        </p>
      </motion.div>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 2xl:grid-cols-3 rounded-3xl'>
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className='p-8 text-white bg-center bg-no-repeat bg-cover rounded-3xl border-4 border-[#ffffff] hover:border-4 hover:border-[#8d4aea]'
            style={{ backgroundImage: `url(${Background})` }}
            variants={sectionTwoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 1, delay: index * 0.2 }} 
          >
            <img src={service.image} alt={`${service.title} icon`} className="w-16 h-16 mb-4" />
            <h2 className='mb-4 text-2xl font-black md:text-4xl'>
              {service.title}
            </h2>
            <p className='font-sans text-xl lg:text-lg'>
              {serviceDescription}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
