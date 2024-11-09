import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MainBackground from '../assets/Back/BackExpand.jpg';

const Education = () => {
  const cards = [
    {
      title: "HND in Computing ( Software Enginnering )",
      description: "Dive into the world of AI where design possibilities are limitless. Let the cutting-edge technology transform your concepts into breathtaking visuals.",
      bgColor: "bg-purple-900",
    },
    {
      title: "(DITEC) Diploma in IT ",
      description: "Step beyond the ordinary with designs that defy conventions. Our AI conjures up imaginative visuals that push the boundaries of creativity.",
      bgColor: "bg-purple-800",
    },
    {
      title: "IDM E-Kids (Explore Kids) L05",
      description: "Experience the perfect blend of form and function. Our AI ensures that every design not only looks stunning but also serves its purpose flawlessly.",
      bgColor: "bg-gray-800",
    },
    {
      title: "G.C.E. Advanced Level (2020)",
      description: "Embrace the elegance of meticulously crafted designs. Our AI polishes every detail to bring a timeless quality to your creative projects.",
      bgColor: "bg-gray-800",
    },
  ];

  const thirdRowCard = {
    title: "G.C.E. Ordinary Level (2017)",
    description: "Embrace the elegance of meticulously crafted designs. Our AI polishes every detail to bring a timeless quality to your creative projects.",
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
          My <span className='text-[#ffffff] hover:text-[#a041ff]'> Career</span>
        </h1>
        <p className='pb-10 font-sans text-xl text-[#d8c3f7] md:text-3xl lg:text-2xl'>
          Discover how our AI-Powered Design Assistant transforms your ideas into stunning designs effortlessly.
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

      <motion.div
        className="grid 2xl:grid-cols-[2fr_1fr] gap-4"
        variants={sectionVariantsLeftToRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className='p-6 text-white bg-[#2d2c2e] hover:bg-[#8d4aea] rounded-3xl'>
          <p className="mb-6 text-sm text-white md:text-xl lg:text-xl">Some other description goes here</p>
          <h3 className="text-xl font-bold">Another Education Entry</h3>
        </div>
        <div className='p-6 text-white bg-[#2d2c2e] hover:bg-[#8d4aea] rounded-3xl'>
          <p className="mb-6 text-sm text-white md:text-xl lg:text-xl">A brief explanation about this section.</p>
          <h3 className="text-xl font-bold">Self Learning</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
