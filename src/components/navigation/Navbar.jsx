import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__container">
        <a href="/" className="navbar__logo">
          Manasseh
        </a>

        <ul className="navbar__links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar