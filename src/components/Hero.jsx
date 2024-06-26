import React from 'react';

import { Bio } from '../data/constants';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div id="about" className="relative flex justify-center bg-white py-20 px-8 md:px-16 lg:px-32 z-10">
      
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg z-20">
        <div className="w-full order-1 md:order-2 flex flex-col items-center mb-8 md:mb-0">
          <div className="text-center md:text-left text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2">
            Hi, I am <br /> {Bio.name}
          </div>
          <div className="text-center md:text-left text-2xl md:text-3xl font-semibold text-gray-800 flex gap-3 items-center mb-4">
            I am a
            <span className="text-indigo-600">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="text-center md:text-left text-lg md:text-xl text-gray-700 mb-10">
            {Bio.description}
          </div>
          <a
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="appearance-none text-center w-full max-w-xs bg-gradient-to-br from-purple-600 to-pink-600 text-white py-4 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105"
          >
            Check Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
