import React from 'react';

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <div
      className="w-[330px] h-[490px] bg-theme-card cursor-pointer rounded-lg shadow-lg overflow-hidden p-6 flex flex-col gap-4 transition-transform duration-500 hover:translate-y-[-10px] hover:shadow-2xl hover:brightness-110"
      onClick={() => setOpenModal({ state: true, project: project })}>
      <img
        src={project.image}
        alt="Project"
        className="w-full h-[180px] bg-white rounded-lg shadow-md"
      />
      <div className="w-full flex items-center flex-wrap gap-2 mt-1">
        {project.tags?.map((tag, index) => (
          <span
            key={index}
            className="text-sm font-normal text-theme-primary bg-theme-primary/15 px-2 py-1 rounded-lg">
            {tag}
          </span>
        ))}
      </div>
      <div className="w-full flex flex-col gap-0 px-1">
        <div className="text-lg font-semibold text-theme-text_secondary overflow-hidden max-w-full line-clamp-2">
          {project.title}
        </div>
        <div className="text-xs font-normal text-theme-text_secondary/80 ml-1">
          {project.date}
        </div>
        <div className="font-normal text-theme-text_secondary/99 mt-2 overflow-hidden max-w-full line-clamp-3">
          {project.description}
        </div>
      </div>
      <div className="flex items-center pl-2">
        {project.member?.map((member, index) => (
          <img
            key={index}
            src={member.img}
            alt="Member"
            className="w-9 h-9 rounded-full ml-[-10px] bg-white shadow-sm border-3 border-theme-card"
          />
        ))}
      </div>
      {/* <button className="hidden w-full px-4 py-2 bg-white text-theme-text_black text-sm font-bold rounded-lg cursor-pointer transition-all duration-500">
        View Project
      </button> */}
    </div>
  );
};

export default ProjectCard;
