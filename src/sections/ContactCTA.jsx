import './ContactCTA.css'

function ContactCTA() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__content">
          <p className="contact__eyebrow">Get In Touch</p>

          <h2 className="contact__title">
            Let's build something together.
          </h2>

          <p className="contact__description">
            I'm open to software engineering opportunities, internships,
            freelance projects, and collaborations where I can contribute
            my skills and continue growing.
          </p>

          <div className="contact__actions">
            <a
              className="contact__button contact__button--primary"
              href="mailto:manassehmugo714@gmail.com"
            >
              Email Me
            </a>

            <a
              className="contact__button contact__button--secondary"
              href="https://www.linkedin.com/in/manasseh-mugo-a0b367264/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              className="contact__button contact__button--secondary"
              href="https://github.com/mburumanasseh"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA