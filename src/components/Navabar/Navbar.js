import React, { useState } from 'react';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { CloseRounded } from '@mui/icons-material';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <a href="/" className="flex items-center text-white cursor-pointer">
          <DiCssdeck size="3rem" />
          <span className="ml-2">Portfolio</span>
        </a>
      </div>
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <FaBars size="1.5rem" />
      </div>
      <div className="hidden md:flex space-x-4">
        <a href="#about" className="hover:text-gray-300">About</a>
        <a href="#skills" className="hover:text-gray-300">Skills</a>
        <a href="#experience" className="hover:text-gray-300">Experience</a>
        <a href="#projects" className="hover:text-gray-300">Projects</a>
        <a href="#education" className="hover:text-gray-300">Education</a>
      </div>
      <div className="hidden md:flex">
        <a href={Bio.github} target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Github Profile
        </a>
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 flex flex-col items-center justify-center md:hidden">
          <div className="absolute top-4 right-4" onClick={() => setIsOpen(!isOpen)}>
            <CloseRounded className="text-white" />
          </div>
          <a href="#about" className="text-white py-2" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="text-white py-2" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#experience" className="text-white py-2" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#projects" className="text-white py-2" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#education" className="text-white py-2" onClick={() => setIsOpen(false)}>Education</a>
          <a href={Bio.github} target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700">
            Github Profile
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
