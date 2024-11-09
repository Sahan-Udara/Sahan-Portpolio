import React from 'react';
import Behance from '../assets/SocialMedia/Behance.png';
import Dribble from '../assets/SocialMedia/Dribble.png';
import FB from '../assets/SocialMedia/FB.png';
import Linkedin from '../assets/SocialMedia/linkedin.png';
import X from '../assets/SocialMedia/X.png';
import Github from '../assets/SocialMedia/Github.png';
import Insta from '../assets/SocialMedia/Instagram.png';

const SocialMedia = () => {
  return (
    <div className='flex flex-row gap-2 md:gap-2'>
      <div className='relative group'>
        <a href="https://github.com/Ashankavi" target="_blank" rel="noopener noreferrer">
          <img className='w-[50px] h-[50px] duration-200 group-hover:scale-110' src={Github} alt="Github" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#8d4aea] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://www.linkedin.com/in/ashan-kavindu/" target="_blank" rel="noopener noreferrer">
          <img className='w-[50px] h-[50px]duration-200 group-hover:scale-110' src={Linkedin} alt="LinkedIn" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#8d4aea] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://www.behance.net/ashankavindu2" target="_blank" rel="noopener noreferrer">
          <img className='w-[50px] h-[50px] duration-200 group-hover:scale-110' src={Behance} alt="Behance" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#8d4aea] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://dribbble.com/shanuk05" target="_blank" rel="noopener noreferrer">
          <img className='w-[50px] h-[50px] duration-200 group-hover:scale-110' src={Dribble} alt="Dribble" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#8d4aea] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://x.com/ashan__k" target="_blank" rel="noopener noreferrer">
          <img className='w-[50px] h-[50px] duration-200 group-hover:scale-110' src={X} alt="X" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#8d4aea] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://www.instagram.com/ashxn___/" target="_blank" rel="noopener noreferrer">
          <img className='w-[50px] h-[50px] duration-200 group-hover:scale-110' src={Insta} alt="X" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#8d4aea] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://web.facebook.com/profile.php?id=100012056560141" target="_blank" rel="noopener noreferrer">
          <img className='w-[50px] h-[50px] duration-200 group-hover:scale-110' src={FB} alt="Facebook" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#8d4aea] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
