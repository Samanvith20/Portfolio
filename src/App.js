import Contact from "./components/Contact"
import Education from "./components/Education"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import './App.css'

const App = () => {

  return (
    <main className="bg-black">
      <Navbar
      />
      <Hero />
      
      <Skills />
      <Projects />
      <Education/>
      <Contact />
    </main>
  )
}

export default App