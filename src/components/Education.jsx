import { useRef } from 'react';

const educationData = [
  {
    id: 0,
    img: "https://cmrtc.ac.in/wp-content/uploads/2020/06/cmr_blue.png",
    school: "CMR Technical Campus, Hyderabad",
    date: "Sept 2020 - Jun 2024",
    grade: "7.01 CGPA",
    desc: "I Have completed my Bachelor of Technology in Computer Science and Engineering at CMR Technical Campus, Hyderabad. I have learned various subjects like Data Structures, Algorithms, Operating Systems, and Web Development. I have also worked on various projects to gain practical knowledge.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://i.ytimg.com/vi/nvV_ivFV4Ns/maxresdefault.jpg",
    school: "NSR Impulse Junior College, Hyderabad",
    date: "Apr 2018 - Apr 2020",
    grade: "96.7%",
    desc: "I completed my class 12 high school education at NSR College, Hyderabad, where I secured good marks.",
    degree: "(XII), MPC",
  },
];

export default function Education() {
  const educationRef = useRef(null);

  return (
    <div id="education" className="p-5 flex flex-col items-center" ref={educationRef}>
      <h2 className="text-3xl font-bold mt-24 mb-8">Education</h2>

      {educationData.map((edu, index) => (
        <div key={edu.id} className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mb-8 max-sm:mb-16">
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg h-72 md:h-auto">
            <img src={edu.img} alt={edu.school} className="w-full h-full object-cover transition-transform duration-300 transform-gpu hover:scale-110 rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 md:ml-8">
            <h3 className="text-2xl font-bold text-blue max-sm:mt-4">{edu.school}</h3>
            <p className="mt-4 font-semibold">{edu.degree}</p>
            <p className="mt-2">{edu.date}</p>
            <p className="mt-2">{edu.grade}</p>
            <p className="mt-2">{edu.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
