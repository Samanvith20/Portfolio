import React from 'react';

const EducationCard = ({ education }) => {
  return (
    <div className="w-full sm:w-[650px] rounded-lg shadow-lg p-3 flex flex-col gap-3 relative transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 border border-purple-400 sm:p-2 sm:gap-2">
      <div className="flex flex-col sm:flex-row gap-3">
        <img
          src={education.img}
          alt="School"
          className="h-12 bg-black rounded-lg mt-1 sm:h-10"
        />
        <div className="flex flex-col w-full">
          <div className="text-lg font-semibold text-theme-text_primary/90 sm:text-sm">
            {education.school}
          </div>
          <div className="text-sm font-medium text-theme-text_secondary/90 sm:text-xs">
            {education.degree}
          </div>
          <div className="text-xs font-normal text-theme-text_secondary/80 sm:text-[10px]">
            {education.date}
          </div>
        </div>
      </div>
      <div className="text-sm font-medium text-theme-text_secondary/90 sm:text-xs">
        <b>Grade: </b>{education.grade}
      </div>
      <div className="w-full text-base font-normal text-theme-text_primary/90 mb-2.5 sm:text-sm">
        <div className="overflow-hidden line-clamp-4 max-w-full text-ellipsis">
          {education.desc}
        </div>
      </div>
      <div className="hidden h-16 w-auto bg-black rounded-lg hover:cursor-pointer hover:opacity-80"></div>
    </div>
  );
}

export default EducationCard;
