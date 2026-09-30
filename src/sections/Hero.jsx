import profileImage from '../assets/images/profile.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__greeting">Hello, I'm</p>

          <h1 className="hero__title">
            Mburu Manasseh Mugo
          </h1>

          <h2 className="hero__role">
            Software Engineer
          </h2>

          <p className="hero__description">
            I build practical and user-focused software solutions
            while continuously learning and improving my craft.
          </p>

          <div className="hero__actions">
            <a
              href="#projects"
              className="hero__button hero__button--primary"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="hero__button hero__button--secondary"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__image-wrapper">
          <img
            src={profileImage}
            alt="Mburu Manasseh Mugo"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero