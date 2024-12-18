import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MainBackground from '../assets/Back/BackExpand.jpg';
import Background from '../assets/Back/SubBack.jpg';
import MyCv from '../assets/About/MyCV.pdf';

const About = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, []);

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
            <motion.div
              key={animationKey} 
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
            >
              <h1 className='px-8 mb-4 font-sans text-5xl font-black text-white md:text-6xl lg:text-8xl'>
                Who is <span className='text-[#8d4aea] hover:text-[#a041ff]'>Sahan ?</span>
              </h1>
              <p className='my-8 text-sm leading-loose text-white md:text-2xl lg:text-2xl'>
                I am a passionate Software Engineer currently pursuing my undergraduat
                degree in Computing (Software Engineering) at SLIIT. I also hold a Diploma
                in Software Engineering from IJSE Campus, which has provided me with a 
                solid foundation in software development.
                I specialize in front-end development and UI/UX design, with hands-on experience using 
                technologies such as HTML, CSS, Tailwind CSS, JavaScript, React, and Next.js. 
                I am eager to apply my skills to create intuitive and visually appealing digital
               solutions while continuously learning and growing in the field.
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
