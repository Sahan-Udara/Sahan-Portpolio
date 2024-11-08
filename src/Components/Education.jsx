import React from 'react';
import MainBackground from '../assets/Back/MainBackground.jpg';

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

  return (
    <div className='grid w-full h-full gap-4 p-4 bg-center bg-no-repeat bg-cover md:px-24 md:pt-12 md:pb-24' style={{ backgroundImage: `url(${MainBackground})` }}>
      <h1 className='mb-4 font-sans text-5xl font-black text-white md:text-6xl lg:text-8xl'> My Career</h1>
      <p className='pb-10 font-sans text-xl text-white md:text-3xl lg:text-2xl'>
        Discover how our AI-Powered Design Assistant transforms your ideas into stunning designs effortlessly.
      </p>

      <div className="grid md:grid-cols-[2fr_1fr] gap-4">
        <div className='p-6 text-white bg-[#2d2c2e] hover:bg-[#8d4aea] rounded-3xl'>
          <p className="mb-6 text-sm">{cards[0].description}</p>
          <h3 className="text-xl font-bold">{cards[0].title}</h3>
        </div>
        <div className='p-6 text-white bg-[#2d2c2e] hover:bg-[#8d4aea] rounded-3xl'>
          <p className="mb-6 text-sm">{cards[1].description}</p>
          <h3 className="text-xl font-bold">{cards[1].title}</h3>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {cards.slice(2).map((card, index) => (
          <div className='p-6 text-white bg-[#2d2c2e] hover:bg-[#8d4aea] rounded-3xl' key={index}>
            <p className="mb-6 text-sm">{card.description}</p>
            <h3 className="text-xl font-bold text-[#ffffff]">{card.title}</h3>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-[2fr_1fr] gap-4">
        <div className='p-6 text-white bg-[#2d2c2e] hover:bg-[#8d4aea] rounded-3xl'>
          <p className="mb-6 text-sm">{thirdRowCard.description}</p>
          <h3 className="text-xl font-bold">{thirdRowCard.title}</h3>
        </div>
        <div className='p-6 text-white bg-[#2d2c2e] hover:bg-[#8d4aea] rounded-3xl'>
          <p className="mb-6 text-sm">W3School , TailwindCSS, React JS,three js, React native, blender</p>
          <h3 className="text-xl font-bold">Self Learning</h3>
        </div>
      </div>
    </div>
  );
};

export default Education;
