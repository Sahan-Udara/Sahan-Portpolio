import React, { useState } from "react";
import { TabScroll } from "./ui/TabScroll";
import { motion } from "framer-motion";
import MainBackground from '../assets/Back/BackExpand.jpg';
import IpadIMG from '../assets/Project/Sample.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import WebDevImg1 from '../assets/Project/Web/web1.png';
import WebDevImg2 from '../assets/Project/Web/web2.jpg';
import WebDevImg3 from '../assets/Project/Web/web3.png';
import WebDevImg4 from '../assets/Project/Web/web4.png';
import WebDevImg5 from '../assets/Project/Web/web5.png';
import UiUxImg1 from '../assets/Project/UiUx/ui1.png';
import UiUxImg2 from '../assets/Project/UiUx/ui2.png';
import UiUxImg3 from '../assets/Project/UiUx/ui3.jpg';
import UiUxImg4 from '../assets/Project/UiUx/ui4.png';
import UiUxImg5 from '../assets/Project/UiUx/ui5.png';
import GraphicImg1 from '../assets/Project/Graphic/graphic1.jpg';
import GraphicImg2 from '../assets/Project/Graphic/graphic2.jpg';
import GraphicImg3 from '../assets/Project/Graphic/graphic3.jpg';
import GraphicImg4 from '../assets/Project/Graphic/graphic4.jpg';
import GraphicImg5 from '../assets/Project/Graphic/graphic5.jpg';

export function Project() {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  const [selectedProject, setSelectedProject] = useState({
    image: IpadIMG,
    url: "https://dribbble.com/"
  });
  const [startIndex, setStartIndex] = useState(0);

  const projectData = {
    "Web Development": [
      { image: WebDevImg1, url: "https://dribbble.com/" },
      { image: WebDevImg2, url: "https://dribbble.com/" },
      { image: WebDevImg3, url: "https://dribbble.com/" },
      { image: WebDevImg4, url: "https://dribbble.com/" },
      { image: WebDevImg5, url: "https://dribbble.com/" }
    ],
    "UI/UX Design": [
      { image: UiUxImg1, url: "https://dribbble.com/" },
      { image: UiUxImg2, url: "https://dribbble.com/" },
      { image: UiUxImg3, url: "https://dribbble.com/" },
      { image: UiUxImg4, url: "https://dribbble.com/" },
      { image: UiUxImg5, url: "https://dribbble.com/" }
    ],
    "Graphic Design": [
      { image: GraphicImg1, url: "https://dribbble.com/" },
      { image: GraphicImg2, url: "https://dribbble.com/" },
      { image: GraphicImg3, url: "https://dribbble.com/" },
      { image: GraphicImg4, url: "https://dribbble.com/" },
      { image: GraphicImg5, url: "https://dribbble.com/" }
    ]
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleScrollLeft = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleScrollRight = () => {
    const maxIndex = window.innerWidth < 768 ? projectData[selectedCategory].length - 2 : projectData[selectedCategory].length - 5;
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  return (
    <div className="flex flex-col overflow-hidden p-4 mt-[-100px] lg:pt-[250px] md:py-[200px] md:pb-[50px] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${MainBackground})` }}>
      <div className="md:px-[200px]">
        <TabScroll
          titleComponent={
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-[#8d4aea] cursor-default">
                WORKING PROCESS <br />
                <span className="font-sans text-5xl font-black text-white cursor-default md:text-6xl lg:text-8xl">
                  Latest Project
                </span>
              </h1>
            </motion.div>
          }
        >
          <motion.a
            href={selectedProject.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <img src={selectedProject.image} height={720} width={1400} className="object-cover h-full mx-auto bg-center bg-no-repeat bg-cover rounded-2xl" draggable={false} />
          </motion.a>
        </TabScroll>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl font-bold mt-[-220px] md:pt-[250px] lg:pt-[290px] mb-10 text-[#ffffff] uppercase text-center cursor-pointer z-50 relative">
          <span
            className={`block sm:inline hover:text-[#8d4aea] text-xl md:text-3xl ${selectedCategory === "Web Development" ? "text-[#8d4aea]" : ""}`}
            onClick={() => setSelectedCategory("Web Development")}
            onTouchStart={() => setSelectedCategory("Web Development")}
          >
            Web Development
          </span>
          <div className="flex justify-center gap-8 mt-2 sm:mt-0 sm:inline">
            <span
              className={`hover:text-[#8d4aea] text-xl md:text-3xl lg:mx-10 ${selectedCategory === "UI/UX Design" ? "text-[#8d4aea]" : ""}`}
              onClick={() => setSelectedCategory("UI/UX Design")}
              onTouchStart={() => setSelectedCategory("UI/UX Design")}
            >
              UI/UX Design
            </span>
            <span
              className={`hover:text-[#8d4aea] text-xl md:text-3xl ${selectedCategory === "Graphic Design" ? "text-[#8d4aea]" : ""}`}
              onClick={() => setSelectedCategory("Graphic Design")}
              onTouchStart={() => setSelectedCategory("Graphic Design")}
            >
              Graphic Design
            </span>
          </div>
        </h1>
        <motion.div
          key={selectedCategory}
          className="grid items-center justify-center grid-cols-2 gap-4 md:grid-cols-5 md:px-[200px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
        >
          {projectData[selectedCategory]
            .slice(startIndex, startIndex + (window.innerWidth < 768 ? 2 : 5))
            .map((project, index) => (
              <div key={index}>
                <img
                  src={project.image}
                  className="object-cover border-4 border-[#6c6c6c] w-auto h-[200px] bg-cover cursor-pointer rounded-3xl"
                  onClick={() => handleProjectClick(project)}
                />
              </div>
            ))}
        </motion.div>
        <motion.div
          className="flex flex-row items-end justify-end gap-4 mt-8 md:px-[200px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <button onClick={handleScrollLeft} className="w-10 h-10 rounded-full border bg-[#000000] border-[#8d4aea] text-[#8d4aea] flex justify-center items-center">
            <FaChevronLeft />
          </button>
          <button onClick={handleScrollRight} className="w-10 h-10 rounded-full border bg-[#000000] border-[#8d4aea] text-[#8d4aea] flex justify-center items-center">
            <FaChevronRight />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
