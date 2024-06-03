import React from 'react';
import { skills } from '../../data/constants';

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col justify-center items-center relative z-10">
      <div className="flex flex-col items-center justify-between w-full max-w-4xl gap-3 relative">
        <div className="text-4xl text-center font-semibold mt-5 text-theme-text_primary md:mt-3 md:text-3xl">Skills</div>
        <div className="text-lg text-center max-w-3xl text-theme-text_secondary md:text-base">
          Here are some of my skills on which I have been working on for the past 2 years.
        </div>
        <div className="w-full flex flex-wrap justify-center mt-7 gap-7">
          {skills.map((skill) => (
            <div className="w-full max-w-2xl bg-theme-card border border-solid border-indigo-600 shadow-md rounded-2xl p-5 md:max-w-xl md:p-3 sm:max-w-xs sm:p-3">
              <h2 className="text-2xl font-semibold text-theme-text_secondary mb-5 text-center">{skill.title}</h2>
              <div className="flex justify-center flex-wrap gap-3 mb-5">
                {skill.skills.map((item) => (
                  <div className="text-base font-normal text-theme-text_primary_80 border border-solid border-theme-text_primary_80 rounded-lg py-3 px-4 flex items-center justify-center gap-2 md:text-sm md:py-2 md:px-3 sm:text-sm sm:py-1.5 sm:px-3">
                    <img src={item.image} alt="" className="w-6 h-6" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
