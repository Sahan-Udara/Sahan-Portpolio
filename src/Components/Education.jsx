import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MainBackground from '../assets/Back/BackExpand.jpg';

const Education = () => {
  const cards = [
    {
      title: "HND in Computing ( Software Enginnering ) 2024",
      description: "Completed an HND in Computing (Software Engineering) at IDM Nation Campus from 2022 to 2024, focusing on Programming, Networking, Professional Practice, Database Design and Development, Security, Managing a Successful Computing Project, Computer Research Project, Business Intelligence, Computer Systems and Architecture, Web Designing and Development, Data Structure and Algorithms, Advanced Programing, Data Mining, Application Development, Systems Analysis and Design.",
      bgColor: "bg-purple-900",
    },
    {
      title: "(DITEC) Diploma in IT 2020 ",
      description: "Completed a DITEC (Diploma in IT) at ESOFT Metro Campus in 2020, covering information technology, MS Office, computer hardware, networking, internet and email, web design, graphics and multimedia, software engineering, Python programming, database concepts, and C# programming",
      bgColor: "bg-purple-800",
    },
    {
      title: "G.C.E. Advanced Level (2020)",
      description: "G.C.E. Advanced Level in 2020 in the Arts stream at Vidayaloka College, Galle.",
      bgColor: "bg-gray-800",
    },
    {
      title: "G.C.E. Ordinary Level (2017)",
      description: "G.C.E. Ordinary Level in 2017 in Sinhala medium at Vidayaloka College, Galle.",
      bgColor: "bg-gray-800",
    },

  ];

  const thirdRowCard = {
    title: "IDM E-Kids (Explore Kids) L05 2014",
    description: "Completed the IDM E-Kids (Explore Kids) L05 at IDM Nation Campus in 2014, gaining foundational IT knowledge, including MS Packages and English skills.",
     };

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1); 
  }, []);

  const sectionVariantsLeftToRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const sectionVariantsRightToLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className='grid w-full h-full gap-4 bg-center bg-no-repeat bg-cover p-4 md:py-[100px] md:px-[200px] md:pb-[50px] cursor-default' style={{ backgroundImage: `url(${MainBackground})` }}>
      <motion.div
        key={animationKey}
        variants={sectionVariantsLeftToRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h1 className='mb-4 font-sans text-5xl font-black text-white md:text-6xl lg:text-8xl'>
          My <span className='text-[#ffffff] hover:text-[#a041ff]'> Education</span>
        </h1>
        <p className='pb-10 font-sans text-xl text-[#d8c3f7] md:text-3xl lg:text-2xl'>
        My journey from learning the basics to becoming a Software Engineer.
        </p>
      </motion.div>

      <motion.div
        className="grid xl:grid-cols-[2fr_1fr] gap-4"
        variants={sectionVariantsRightToLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className='p-6 text-white bg-[#2d2c2e] hover:bg-[#8d4aea] rounded-3xl'>
          <p className="mb-6 text-sm text-white md:text-xl lg:text-xl">{cards[0].description}</p>
          <h3 className="text-xl font-bold">{cards[0].title}</h3>
        </div>
        <div className='p-6 text-white bg-[#2d2c2e] hover:bg-[#8d4aea] rounded-3xl'>
          <p className="mb-6 text-sm text-white md:text-xl lg:text-xl">{cards[1].description}</p>
          <h3 className="text-xl font-bold">{cards[1].title}</h3>
        </div>
      </motion.div>

      <motion.div
        className="grid gap-4 md:grid-cols-2"
        variants={sectionVariantsLeftToRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        {cards.slice(2).map((card, index) => (
          <div className='p-6 text-white bg-[#2d2c2e] hover:bg-[#8d4aea] rounded-3xl' key={index}>
            <p className="mb-6 text-sm text-white md:text-xl lg:text-xl">{card.description}</p>
            <h3 className="text-xl font-bold text-[#ffffff]">{card.title}</h3>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="grid 2xl:grid-cols-[2fr_1fr] gap-4"
        variants={sectionVariantsRightToLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className='p-6 text-white bg-[#2d2c2e] hover:bg-[#8d4aea] rounded-3xl'>
          <p className="mb-6 text-sm text-white md:text-xl lg:text-xl">{thirdRowCard.description}</p>
          <h3 className="text-xl font-bold">{thirdRowCard.title}</h3>
        </div>
        <div className='p-6 text-white bg-[#2d2c2e] hover:bg-[#8d4aea] rounded-3xl'>
          <p className="mb-6 text-sm text-white md:text-xl lg:text-xl">W3School , TailwindCSS, React JS, Three.js, React Native, Blender</p>
          <h3 className="text-xl font-bold">Self Learning</h3>
        </div>
      </motion.div>


    </div>
  );
};

export default Education;
