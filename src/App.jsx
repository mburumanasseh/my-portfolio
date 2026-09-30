import './App.css'
import Navbar from './components/navigation/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import ContactCTA from './sections/ContactCTA'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ContactCTA />
      </main>
    </div>
  )
}

export default App