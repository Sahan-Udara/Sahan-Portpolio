import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from "../assets/Navbar/logo2.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Inline styles for link
  const linkStyle = {
    color: '#ffffff', // Default text color
    textDecoration: 'none' // No underline
  };

  // Handle link clicks by redirecting using window.location
  const handleLinkClick = (path) => {
    setNav(false); // Hide the nav slider
    window.location.href = path; // Navigate to the clicked page
  };

  return (
    <div className='flex items-center justify-between max-w-auto  font-bold px-4 md:px-[200px] text-white bg-[#1d1d1d]  z-50'>
      <img className='h-[40px] my-5' src={Logo} alt="Logo" />
      <h1 className='w-full text-3xl font-bold '></h1>
      <ul className='hidden font-sans text-xl font-normal tracking-wide lg:flex'>
        <li className='p-4 hover:text-[#8d4aea] cursor-pointer' style={linkStyle} onClick={() => handleLinkClick('/')}>Home</li>
        <li className='p-4 cursor-pointer' style={linkStyle} onClick={() => handleLinkClick('/about')}>About&nbsp;Me</li>
        <li className='p-4 cursor-pointer' style={linkStyle} onClick={() => handleLinkClick('/services')}>Services</li>
        <li className='p-4 cursor-pointer' style={linkStyle} onClick={() => handleLinkClick('/portfolio')}>Career</li>
        <li className='p-4 cursor-pointer' style={linkStyle} onClick={() => handleLinkClick('/careers')}>Project</li>
        <li className='p-4 cursor-pointer' style={linkStyle} onClick={() => handleLinkClick('/contact')}>Contact</li>
      </ul>
      <div onClick={handleNav} className='block cursor-pointer lg:hidden '>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-500 z-50 transform ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
        <img className='h-[25px] m-8' src={Logo} alt="Logo" />
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'></h1>
        <ul className='p-4 tracking-wide uppercase font-londrina'>
          <li className='p-4' style={linkStyle} onClick={() => handleLinkClick('/')}>Home</li>
          <li className='p-4' style={linkStyle} onClick={() => handleLinkClick('/about')}>About&nbsp;Us</li>
          <li className='p-4' style={linkStyle} onClick={() => handleLinkClick('/services')}>Services</li>
          <li className='p-4' style={linkStyle} onClick={() => handleLinkClick('/portfolio')}>Career</li>
          <li className='p-4' style={linkStyle} onClick={() => handleLinkClick('/careers')}>Project</li>
          <li className='p-4' style={linkStyle} onClick={() => handleLinkClick('/contact')}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
