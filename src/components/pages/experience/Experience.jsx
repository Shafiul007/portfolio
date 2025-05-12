import React from 'react';
import { FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {  SiMongodb, SiReactrouter } from "react-icons/si";
const Experience = () => {
    return (
        <div id='experience' className='my-3 space-y-3 flex flex-col justify-center items-center'>
          <h1 className="text-2xl lg:text-3xl text-center text-green-700 font-bold">Experienced in</h1>  
          <div className='flex justify-center  flex-wrap gap-3'>
            <div className='bg-zinc-300 rounded-xl p-2 flex gap-2 w-40 h-30 flex-col justify-center items-center'>
              <FaHtml5 color='#E34F26' className='w-10 h-10'/>
              <h1 className='font-bold text-lime-700'>HTML5</h1>
            </div>
            <div className='bg-zinc-300 rounded-xl p-2 flex gap-2 w-40 h-30 flex-col justify-center items-center'>
            <FaCss3Alt color='#1572b6' className='w-10 h-10'/>
              <h1 className='font-bold text-lime-700'>CSS-3</h1>
            </div>
            <div className='bg-zinc-300 rounded-xl p-2 flex gap-2 w-40 h-30 flex-col justify-center items-center'>
            <RiTailwindCssFill color='#1572b6' className='w-10 h-10'/>
              <h1 className='font-bold text-lime-700'>Tailwind CSS</h1>
            </div>
            <div className='bg-zinc-300 rounded-xl p-2 flex gap-2 w-40 h-30 flex-col justify-center items-center'>
            <FaGithub  className='w-10 h-10 '/>
              <h1 className='font-bold text-lime-700'>Github</h1>
            </div>
            <div className='bg-zinc-300 rounded-xl p-2 flex gap-2 w-40 h-30 flex-col justify-center items-center'>
            <FaJs  className='w-10 h-10 text-yellow-600'/>
              <h1 className='font-bold text-lime-700'>Javascript</h1>
            </div>
            <div className='bg-zinc-300 rounded-xl p-2 flex gap-2 w-40 h-30 flex-col justify-center items-center'>
            <FaReact className='w-10 h-10 text-blue-500'/>
              <h1 className='font-bold text-lime-700'>React</h1>
            </div>
            <div className='bg-zinc-300 rounded-xl p-2 flex gap-2 w-40 h-30 flex-col justify-center items-center'>
            <SiReactrouter className='w-10 h-10'/>
              <h1 className='font-bold text-lime-700'>React-Router</h1>
            </div>
            <div className='bg-zinc-300 rounded-xl p-2 flex gap-2 w-40 h-30 flex-col justify-center items-center'>
            <IoLogoFirebase  className='w-10 h-10 text-red-600 bg-amber-400 rounded-lg'/>
              <h1 className='font-bold text-lime-700'>Firebase</h1>
            </div>
            <div className='bg-zinc-300 rounded-xl p-2 flex gap-2 w-40 h-30 flex-col justify-center items-center'>
            <SiMongodb color='#47A248' className='w-10 h-10'/>
              <h1 className='font-bold text-lime-700'>MongoDB</h1>
            </div>
            <div className='bg-zinc-300 rounded-xl p-2 flex gap-2 w-40 h-30 flex-col justify-center items-center'>
            <FaFigma color='#F24F1E' className='w-10 h-10'/>
              <h1 className='font-bold text-lime-700'>Figma</h1>
            </div>
            <div className='bg-zinc-300 rounded-xl p-2 flex gap-2 w-40 h-30 flex-col justify-center items-center'>
            <FaNode color='#215732' className='w-10 h-10'/>
              <h1 className='font-bold text-lime-700'>Node JS</h1>
            </div>
          
          </div>
         
        </div>
    );
};

export default Experience;