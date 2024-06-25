import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter,  FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <div id="contact" className="p-5 flex flex-col items-center mb-32">
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
            <div className="sm:w-2/3 flex flex-col sm:flex-row justify-center items-center gap-12">
                <div>
                    <a className="bg-blue p-4 rounded-lg mb-4 flex flex-row items-center text-black font-semibold text-lg cursor-pointer"
                        href="mailto:Samanvith2005@gmail.com">
                        <FaEnvelope size={30} />
                        <span className="ml-4">Samanvith2005@gmail.com</span>
                    </a>
                </div>
                <div>
                    <div className="text-blue text-2xl font-semibold mb-8">
                        Let's connect!
                    </div>
                    <div className="flex flex-col gap-4 items-start">
                        <a href="https://www.linkedin.com/in/samanvithreddy/" target="_blank" className="flex items-center gap-2">
                            <FaLinkedin size={24} />
                            <span className="text-white font-semibold text-lg hover:text-blue">LinkedIn</span>
                        </a>
                        <a href="https://github.com/Samanvith20" target="_blank" className="flex items-center gap-2">
                            <FaGithub size={24} />
                            <span className="text-white font-semibold text-lg hover:text-blue">Github</span>
                        </a>
                        <a href="https://x.com/yervala9972" target="_blank" className="flex items-center gap-2">
                            <FaTwitter size={24} />
                            <span className="text-white font-semibold text-lg hover:text-blue">Twitter</span>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
