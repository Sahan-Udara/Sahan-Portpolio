import React from 'react'
import Background from '../assets/Background/SubBack.jpg';
import MainBackground from '../assets/Back/MainBackground.jpg';
import Ashan from '../assets/Hero/Ashan.png';


const Hero = () => {
  return (
    <div className='p-4 pb-8 md:pt-[100px] md:px-[100px] md:pb-[50px] w-full h-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${MainBackground})` }}>
        <div className='grid w-full h-full grid-cols-2 bg-center bg-no-repeat bg-cover rounded-3xl'style={{ backgroundImage: `url(${Background})` }}>

        <div className='w-full h-full m-4 md:ml-20 md:my-20'>
                <h1 className='text-2xl md:text-3xl font-bold  text-[#ffffff] '>Hello,</h1>
                <h1 className="text-5xl md:text-6xl lg:text-8xl text-[#8d4aea] font-black font-sans uppercase  md:text-left">Ashan Kavindu</h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#ffffff] font-black font-sans my-4 md:my-8 md:text-left">Front-End Developer</h2>
                <div className='flex flex-row gap-2 mr-8 '>
                    <button className='py-2 px-3 md:py-3 md:px-4 bg-[#8d4aea] text-[#ffffff] rounded-lg text-[10px] font-bold  md:text-[15px]'>Say Hello</button>
                    <button className='py-2 px-3 md:py-3 md:px-4 text-[#ffffff] rounded-lg border hover:border-[#8d4aea] text-[10px] md:text-[15px] font-bold '>My Work</button>
                </div>
            </div>
        <div className='flex justify-end w-full h-full '>
        <img src={Ashan} className=" bg-cover w-[500px] rounded-br-3xl bg-center object-cover" />
            </div>
      
        </div>
        
    </div>
  )
}

export default Hero
