import React from 'react';
import Background from '../assets/Background/SubBack.jpg';
import MainBackground from '../assets/Back/BackExpand.jpg';
import Graphic from '../assets/Services/Graphic.png';
import UIUX from '../assets/Services/UIUX.png';
import Web from '../assets/Services/Web.png';

const Services = () => {
  const serviceDescription = 'Discover how our AI-Powered Design Assistant transforms your ideas into stunning designs effortlessly.';
  
  const servicesData = [
    { title: 'Graphic Designing', image: Graphic },
    { title: 'UI/UX Designing', image: UIUX },
    { title: 'Web Development', image: Web },
  ];

  return (
    <div
      className='w-full h-full p-4 pb-8 bg-center bg-no-repeat bg-cover md:px-24 md:pt-12 md:pb-24'
      style={{ backgroundImage: `url(${MainBackground})` }}
    >
      <h1 className='mb-4 font-sans text-5xl font-black text-white md:text-6xl lg:text-8xl'>
        Our Services
      </h1>
      <p className='pb-10 font-sans text-xl text-white md:text-3xl lg:text-2xl'>
      Discover how our AI-Powered Design Assistant transforms your ideas into stunning designs effortlessly.
      </p>

      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 rounded-3xl'>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className='p-8 text-white bg-center bg-no-repeat bg-cover rounded-3xl'
            style={{ backgroundImage: `url(${Background})` }}
          >
            <img src={service.image} alt={`${service.title} icon`} className="w-16 h-16 mb-4" />
            <h2 className='mb-4 text-3xl font-black md:text-4xl lg:text-5xl'>
              {service.title}
            </h2>
            <p className='font-sans text-xl lg:text-lg'>
              {serviceDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
