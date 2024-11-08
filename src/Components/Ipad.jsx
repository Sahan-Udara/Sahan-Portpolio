import React, { useState } from "react";
import { TabScroll } from "./ui/TabScroll";
import MainBackground from '../assets/Back/BackExpand.jpg';
import IpadIMG from '../assets/Project/Sample.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import images for each category
import WebDevImg1 from '../assets/Project/Web/Cinama.jpg';
import WebDevImg2 from '../assets/Project/Web/Gamer.jpg';
import WebDevImg3 from '../assets/Project/Web/Photographer.jpg';
import WebDevImg4 from '../assets/Project/Web/RealState.jpg';
import WebDevImg5 from '../assets/Project/Web/Photographer2.jpg';
import UiUxImg1 from '../assets/Project/UiUx/Fashion.jpg';
import UiUxImg2 from '../assets/Project/UiUx/FashionApp.jpg';
import UiUxImg3 from '../assets/Project/UiUx/MobileStore.jpg';
import UiUxImg4 from '../assets/Project/UiUx/Music.jpg';
import UiUxImg5 from '../assets/Project/UiUx/Photographer2.jpg';
import GraphicImg1 from '../assets/Project/Graphic/Touch1.jpg';
import GraphicImg2 from '../assets/Project/Graphic/Touch2.jpg';
import GraphicImg3 from '../assets/Project/Graphic/Touch3.jpg';
import GraphicImg4 from '../assets/Project/Graphic/Touch4.jpg';
import GraphicImg5 from '../assets/Project/Graphic/Touch5.jpg';

export function Ipad() {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  const [selectedProjectImage, setSelectedProjectImage] = useState(IpadIMG);
  const [startIndex, setStartIndex] = useState(0);

  const projectData = {
    "Web Development": [WebDevImg1, WebDevImg2, WebDevImg3, WebDevImg4, WebDevImg5, UiUxImg5],
    "UI/UX Design": [UiUxImg1, UiUxImg2, UiUxImg3, UiUxImg4, UiUxImg5],
    "Graphic Design": [GraphicImg1, GraphicImg2, GraphicImg3, GraphicImg4, GraphicImg5]
  };

  const handleProjectClick = (image) => {
    setSelectedProjectImage(image);
  };

  const handleScrollLeft = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleScrollRight = () => {
    const maxIndex = window.innerWidth < 768 ? projectData[selectedCategory].length - 2 : projectData[selectedCategory].length - 5;
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  return (
    <div className="flex flex-col overflow-hidden p-4 mt-[-120px] lg:pt-[150px] md:py-[100px] md:pb-[50px] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${MainBackground})` }}>
      <TabScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-bold text-[#8d4aea]">
              WORKING PROCESS <br />
              <span className="font-sans text-5xl font-black text-white md:text-6xl lg:text-8xl">
                Latest Project
              </span>
            </h1>
          </>
        }
      >
        <img src={selectedProjectImage} height={720} width={1400} className="object-cover h-full mx-auto bg-center bg-no-repeat bg-cover rounded-2xl" draggable={false} />
      </TabScroll>

      <div>
        {/* Navigation text section with z-index for mobile touch */}
        <h1 className="text-2xl font-bold mt-[-220px] md:pt-[100px] lg:pt-[250px] mb-10 text-[#ffffff] uppercase text-center cursor-pointer z-50 relative">
      <span
        className={`block sm:inline hover:text-[#8d4aea] text-xl md:text-2xl ${selectedCategory === "Web Development" ? "text-[#8d4aea]" : ""}`}
        onClick={() => setSelectedCategory("Web Development")}
        onTouchStart={() => setSelectedCategory("Web Development")}
      >
        Web Development
      </span>
      <div className="flex justify-center gap-8 mt-2 sm:mt-0 sm:inline">
        <span
          className={`hover:text-[#8d4aea] text-xl md:text-2xl lg:mx-10 ${selectedCategory === "UI/UX Design" ? "text-[#8d4aea]" : ""}`}
          onClick={() => setSelectedCategory("UI/UX Design")}
          onTouchStart={() => setSelectedCategory("UI/UX Design")}
        >
          UI/UX Design
        </span>
        <span
          className={`hover:text-[#8d4aea] text-xl md:text-2xl ${selectedCategory === "Graphic Design" ? "text-[#8d4aea]" : ""}`}
          onClick={() => setSelectedCategory("Graphic Design")}
          onTouchStart={() => setSelectedCategory("Graphic Design")}
        >
          Graphic Design
        </span>
      </div>
    </h1>

        {/* Project Images Section */}
        <div className="grid items-center justify-center grid-cols-2 gap-4 md:grid-cols-5 md:px-[100px]">
          {projectData[selectedCategory].slice(startIndex, startIndex + (window.innerWidth < 768 ? 2 : 5)).map((image, index) => (
            <div key={index}>
              <img src={image} className="object-cover border-4 border-[#6c6c6c] w-auto h-[200px] bg-cover cursor-pointer rounded-3xl" onClick={() => handleProjectClick(image)} />
            </div>
          ))}
        </div>

        <div className="flex flex-row items-end justify-end gap-4 mt-8 md:px-[100px]">
          {/* Scroller Buttons */}
          <button onClick={handleScrollLeft} className="w-10 h-10 rounded-full border bg-[#000000] border-[#8d4aea] text-[#8d4aea] flex justify-center items-center">
            <FaChevronLeft />
          </button>
          <button onClick={handleScrollRight} className="w-10 h-10 rounded-full border bg-[#000000] border-[#8d4aea] text-[#8d4aea] flex justify-center items-center">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
