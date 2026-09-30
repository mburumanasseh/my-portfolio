import './App.css'
import Navbar from './components/navigation/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>
    </div>
  )
}

export default App