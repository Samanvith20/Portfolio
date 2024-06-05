import React from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { education } from '../../data/constants';
import EducationCard from '../cards/EducationCard';

const Education= () => {
  return (
    <div id="education" className="flex flex-col items-center justify-center relative z-10 p-0 pb-15 sm:p-0">
      <div className="relative flex flex-col items-center justify-between w-full max-w-[1350px] pt-10 gap-3 sm:flex-col">
        <div className="text-4xl text-center font-semibold mt-5 text-theme-text_primary sm:mt-3 sm:text-3xl">
          Education
        </div>
        <div className="text-lg text-center max-w-[600px] text-theme-text_secondary sm:mt-3 sm:text-base">
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </div>
        <div className="w-full max-w-[1000px] mt-2.5 flex flex-col items-center justify-center gap-3 sm:items-end">
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem key={index}>
                <TimelineContent className="py-3 px-2">
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== education.length - 1 && (
                    <TimelineConnector className="bg-purple-500" />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  )
}

export default Education;
