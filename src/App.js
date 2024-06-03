import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from "./components/HeroSection/HeroSection.js";
import About from "./components/About/About.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact.js";
import Education from "./components/Education/Education.js";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails.js";
import Footer from "./components/Footer/Footer.js";
import Navbar from "./components/Navabar/Navbar.js";



function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);

  return (
    <div className={`${darkMode ? darkTheme : lightTheme} min-h-screen overflow-x-hidden`}>
      <Router>
        <Navbar />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
           
            <Route path="/education" element={<Education />} />
          </Routes>
          <div className="w-full bg-gradient-to-r from-pink-100 to-transparent via-pink-50 bg-clip-padding">
            <Skills />
           
          </div>
           
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <div className="w-full bg-gradient-to-r from-transparent to-blue-100 via-blue-50 bg-clip-padding clip-path-polygon">
            <Education />
            <Contact />
          </div>
          <Footer />
          {openModal.state && <ProjectDetails  openModal={openModal} setOpenModal={setOpenModal}/>}
        </main>
      </Router>
    </div>
  );
}

export default App;
