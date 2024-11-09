import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MainBackground from '../assets/Back/BackExpand.jpg';
import Background from '../assets/Background/SubBack.jpg';
import MyCv from '../assets/About/MyCV.pdf';

const About = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1); // Update key to reset animation on remount
  }, []);

  // Define variants for top-to-bottom motion
  const contentVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='p-4 md:pt-[100px] md:px-[200px] md:pb-[50px] w-full h-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${MainBackground})` }}>
      <div className='grid grid-cols-1 cursor-default rounded-3xl'>
        <div>
          <div
            className='p-8 md:py-10 font-sans text-center text-white rounded-3xl border-4 hover:border-4 hover:border-[#8d4aea]'
            style={{ backgroundImage: `url(${Background})` }}
          >
            {/* Apply motion to this div */}
            <motion.div
              key={animationKey} // Set a unique key to reset animation on remount
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the component is in view
              transition={{ duration: 1 }}
            >
              <h1 className='px-8 mb-4 font-sans text-5xl font-black text-white md:text-6xl lg:text-8xl'>
                Who is <span className='text-[#8d4aea] hover:text-[#a041ff]'>Ashan ?</span>
              </h1>
              <p className='my-8 text-sm leading-loose text-white md:text-2xl lg:text-2xl'>
                My academic journey has been both rigorous and rewarding. I recently completed my Higher National Diploma 
                in Computing (General) from IDM Nations Campus, complemented by a Diploma in Information Technology from 
                ESOFT Metro Campus. These programs have solidified my knowledge in key web development technologies, 
                including HTML, CSS, Tailwind CSS, React, and JavaScript.
              </p>
              <a href={MyCv} target="_blank" rel="noopener noreferrer">
                <button className='py-3 px-4 md:py-4 md:px-8 bg-[#8d4aea] hover:bg-[#a041ff] text-[#ffffff] rounded-lg text-[14px] font-bold md:text-[18px]'>
                  Download CV
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
