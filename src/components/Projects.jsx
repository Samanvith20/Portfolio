import{ useRef } from 'react';




export default function Projects() {

  const projectsRef = useRef(null);

  const projects = [
    {
        title: "FOOD HUB",
        image: "https://github.com/Samanvith20/image-hosting/blob/main/foodhub.png?raw=true",
        demo: "https://food-hub-beta.vercel.app/",
        github: "https://github.com/Samanvith20/FOOD-HUB",
        description: "Designed and developed the Food Hub project, a food ordering web app that helps users order food online. I have integrated Swiggy's Live API for fetching restaurant data and implemented key features such as user authentication, cart functionality.",
        techStack: ["React Js", "Firebase", "Redux"],
    },
    {
        title: "Gemini",
        image: "https://github.com/Samanvith20/image-hosting/blob/main/gemini.png?raw=true",
        demo: "https://gemini-2-0-t5cpptx82-samanvith20s-projects.vercel.app/",
        github: "https://github.com/Samanvith20/Gemini-2.0",
        description: "Gemini is a project where I have used the Gemini API to fetch data and display it on the website. I have used React Js for the front end, and users can search anything and get the data.",
        techStack: ["React Js", "Gemini API"],
    },
    {
        title: "Foodi",
        image: "https://github.com/Samanvith20/image-hosting/blob/main/foodi.img.png?raw=true",
        demo: "https://foodi-frontend-j5slucq8x-samanvith20s-projects.vercel.app/",
        github: "https://github.com/Samanvith20/MERN---PROJECT",
        description: "Foodi is a food ordering app where users can order food online. I have included authentication, cart functionality, and payment gateway integration. I have used React Js for the front end and Firebase and Node.js for the backend.",
        techStack: ["React Js", "Firebase", "Node Js", "Stripe API"],
    },
    {
        title: "Netflix-GPT",
        image: "https://github.com/Samanvith20/image-hosting/blob/main/Netflix.png?raw=true",
        demo: "https://netflix-bcfx6kdnn-samanvith20.vercel.app",
        github: "https://github.com/Samanvith20/Netflix-Gpt",
        description: "Netflix-GPT is a project where I have used the OpenAI GPT-3 API to generate movie recommendations based on the user's input. I have used React Js for the front end and Firebase for the backend, and added multi-language support.",
        techStack: ["React Js", "OpenAI", "Firebase", "Redux"],
    },
    {
        title: "True Feedback",
        image: "https://raw.githubusercontent.com/Samanvith20/image-hosting/main/truefeedback.png",
        demo: "https://true-feedback-dqmu842mx-samanvith20s-projects.vercel.app/",
        github: "https://github.com/Samanvith20/True-Feedback/tree/main",
        description: "True Feedback is a project where users can generate their feedback, and I have used the Gemini API to generate some random feedback and display it on the website.",
        techStack: ["Nextjs", "Gemini API", "Axios", "Nodemailer"],
    },
];


    return (
        <div id="projects" className="p-5 flex flex-col items-center" ref={projectsRef}>
            <h2 className="text-3xl font-bold mt-24 mb-8">Projects</h2>

            {projects.map((project, index) => (
                <div>
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mb-8 max-sm:mb-16">
                        <div className="w-full md:w-1/2 relative  overflow-hidden">
                            <a href={project.demo} target="_blank">
                                <img src={project.image} alt={project.title}
                                    className="cursor-pointer rounded-lg w-full h-full object-cover transition-transform duration-300 transform-gpu hover:scale-110" />
                            </a>

                        </div>
                        <div className="w-full md:w-1/2 md:ml-8">
                            <h3 className="text-2xl font-bold text-blue max-sm:mt-4">{project.title}</h3>
                            <p className="mt-4">{project.description}</p>
                            <div className="flex flex-row my-6 gap-4">
                                <a href={project.demo} target="_blank"
                                    className="cursor-pointer bg-blue text-black px-6 py-1 rounded-md hover:bg-black hover:text-blue hover:border hover:border-blue">
                                    Demo
                                </a>
                                <a href={project.github} target="_blank"
                                    className="cursor-pointer hover:bg-white hover:text-black px-6 py-1 rounded-md bg-black text-white border border-white">
                                    Github
                                </a>

                            </div>

                            <div className=' mt-4 font-bold text-lg'>Skills : </div>
                            <div className="flex mt-2">
                                {project.techStack.map((tech, index) => (
                                    <div className=" text-blue border border-blue  rounded-md px-2 py-1 mr-2">{tech}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}