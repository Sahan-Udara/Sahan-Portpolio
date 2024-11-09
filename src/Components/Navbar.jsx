import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from "../assets/Navbar/logo2.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none'
  };

  const handleScroll = (id) => {
    setNav(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex items-center justify-between max-w-auto font-bold p-4 md:px-[200px] text-white bg-[#1d1d1d] z-50'>
      <img className='h-[40px] my-5' src={Logo} alt="Logo" />
      <ul className='hidden font-sans text-xl font-normal tracking-wide lg:flex'>
        <li className='p-4 cursor-pointer' style={linkStyle} onClick={() => handleScroll('hero')}>Home</li>
        <li className='p-4 cursor-pointer' style={linkStyle} onClick={() => handleScroll('about')}>About Me</li>
        <li className='p-4 cursor-pointer' style={linkStyle} onClick={() => handleScroll('services')}>Services</li>
        <li className='p-4 cursor-pointer' style={linkStyle} onClick={() => handleScroll('education')}>Education</li>
        <li className='p-4 cursor-pointer' style={linkStyle} onClick={() => handleScroll('project')}>Project</li>
        <li className='p-4 cursor-pointer' style={linkStyle} onClick={() => handleScroll('contact')}>Contact</li>
      </ul>
      <div onClick={handleNav} className='block cursor-pointer lg:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-500 z-50 transform ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
        <img className='h-[40px] m-8' src={Logo} alt="Logo" />
        <ul className='p-4 tracking-wide'>
          <li className='p-4' style={linkStyle} onClick={() => handleScroll('hero')}>Home</li>
          <li className='p-4' style={linkStyle} onClick={() => handleScroll('about')}>About Me</li>
          <li className='p-4' style={linkStyle} onClick={() => handleScroll('services')}>Services</li>
          <li className='p-4' style={linkStyle} onClick={() => handleScroll('education')}>Education</li>
          <li className='p-4' style={linkStyle} onClick={() => handleScroll('project')}>Project</li>
          <li className='p-4' style={linkStyle} onClick={() => handleScroll('contact')}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
