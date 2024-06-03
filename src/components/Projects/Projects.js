import React from 'react';
import { projects } from '../../data/constants';
import ProjectCard from '../cards/ProjectCard';

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <div
      id="projects"
      className="bg-gradient-to-r from-transparent via-purple-200/60 to-transparent flex flex-col justify-center items-center relative z-10 clip-path-custom">
      <div className="relative flex flex-col items-center justify-between w-full max-w-screen-xl py-10 gap-3">
        <div className="text-4xl text-center font-semibold mt-5 text-theme-text_primary md:mt-3 md:text-3xl">Projects</div>
        <div className="text-lg text-center max-w-3xl text-theme-text_secondary md:mt-3 md:text-base">
          I have worked on a wide range of projects. Here are some of my web applications.
        </div>
        <div className="flex justify-center items-center gap-7 flex-wrap mt-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
