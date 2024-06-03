import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-70 flex items-start justify-center overflow-y-scroll transition-all duration-500">
        <div className="max-w-3xl w-full rounded-2xl my-12 mx-3 bg-theme-card text-theme-text_primary p-5 flex flex-col relative">
          <CloseRounded
            className="absolute top-2.5 right-5 cursor-pointer"
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <img src={project?.image} alt="Project" className="w-full object-cover rounded-xl mt-8 shadow-md" />
          <div className="text-2xl font-semibold text-theme-text_primary mt-2.5 mx-1.5">
            {project?.title}
          </div>
          <div className="text-lg font-normal text-theme-text_secondary mx-1.5 mt-1">
            {project?.date}
          </div>
          <div className="flex flex-wrap mt-2 mx-1.5">
            {project?.tags.map((tag, index) => (
              <div
                key={index}
                className="text-sm font-normal text-theme-primary bg-theme-primary/20 mx-1 my-1 px-2 py-1 rounded-md">
                {tag}
              </div>
            ))}
          </div>
          <div className="text-lg font-normal text-theme-text_primary mt-2 mx-1.5">
            {project?.description}
          </div>
          {project?.member && (
            <>
              <div className="text-xl font-semibold text-theme-text_primary mt-3 mx-1.5">
                Members
              </div>
              <div className="flex flex-col gap-1.5 mt-2 mx-1.5">
                {project?.member.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-12 h-12 object-cover rounded-full shadow-md"
                    />
                    <div className="text-lg font-medium text-theme-text_primary">
                      {member.name}
                    </div>
                    <a href={member.github} target="new" className="text-inherit no-underline">
                      <GitHub />
                    </a>
                    <a href={member.linkedin} target="new" className="text-inherit no-underline">
                      <LinkedIn />
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="flex justify-end mt-3 gap-3">
            <a
              href={project?.github}
              target="new"
              className="w-full text-center text-lg font-semibold text-theme-text_primary py-3 px-4 rounded-lg bg-theme-bgLight text-theme-text_secondary cursor-pointer no-underline transition-all duration-500 hover:bg-theme-bg/99">
              View Code
            </a>
            <a
              href={project?.webapp}
              target="new"
              className="w-full text-center text-lg font-semibold text-theme-text_primary py-3 px-4 rounded-lg bg-theme-primary cursor-pointer no-underline transition-all duration-500 hover:bg-theme-primary/90">
              View Live App
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
