import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <p className="about__eyebrow">About Me</p>

          <h2 className="about__title">
            Building software with purpose and curiosity.
          </h2>

          <p className="about__text">
            I'm a software engineer who is passionate about
            building practical and user-focused applications.
          </p>

          <p className="about__text">
            My experience spans software development, IT support, networking,
            computer hardware maintenance, and CCTV installation. I enjoy
            solving problems, learning new technologies, and turning ideas
            into working solutions.
          </p>

          <p className="about__text">
            I'm currently focused on growing as a full-stack software engineer
            while continuing to strengthen my skills through real-world
            projects and continuous learning.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About