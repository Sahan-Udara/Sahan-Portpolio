import React from 'react';
import CSharp from '../assets/Skills/C_ 1.png';
import CSS from '../assets/Skills/CSS 1.png';
import HTML1 from '../assets/Skills/HTML 1.png';
import Java from '../assets/Skills/Java 1.png';
import JS from '../assets/Skills/JS 1.png';
import PS from '../assets/Skills/PS 1.png';
import ReactIcon from '../assets/Skills/React 1.png';
import Tailwind from '../assets/Skills/Tailwind 1.png';
import MainBackground from '../assets/Back/BackExpand.jpg';


const Skills = () => {
  const isMobile = window.innerWidth <= 768;
  
  const marqueeAnimation = {
    animation: isMobile ? 'marquee 5s linear infinite' : 'marquee 10s linear infinite', // Faster speed on mobile
  };

  const containerStyle = {
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
  };

  const marqueeStyle = {
    display: 'flex',
    whiteSpace: 'nowrap',
    ...marqueeAnimation,
  };

  const imageStyle = {
    width: 'auto',
    height: isMobile ? '40px' : '60px', 
    marginRight: '20px',
  };

  const fadeStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '50px',
    zIndex: 1,
  };

  return (
    <div className='flex flex-col md:flex-row p-4  md:px-[200px] w-full h-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${MainBackground})` }}>
      <div className="flex flex-wrap justify-end flex-grow gap-4">
        <div style={containerStyle}>
          <div style={{ ...fadeStyle, left: 0, background: 'linear-gradient(to right, #151515, transparent)' }} />
          <div style={{ ...fadeStyle, right: 0, background: 'linear-gradient(to left, #151515, transparent)' }} />
          <div style={marqueeStyle}>
            {[CSharp, CSS, HTML1, Java, JS, PS, ReactIcon, Tailwind].map((img, index) => (
              <img key={index} src={img} style={imageStyle} className="skill-image" alt={`Skill ${index}`} />
            ))}
            {[CSharp, CSS, HTML1, Java, JS, PS, ReactIcon, Tailwind].map((img, index) => (
              <img key={`repeat-${index}`} src={img} style={imageStyle} className="skill-image" alt={`Skill ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const keyframes = `
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

export default Skills;
