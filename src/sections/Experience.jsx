import experience from '../data/experience'
import './Experience.css'

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <div className="experience__header">
          <p className="experience__eyebrow">Experience</p>

          <h2 className="experience__title">
            My professional journey
          </h2>

          <p className="experience__description">
            My experience across software development and hands-on IT
            support.
          </p>
        </div>

        <div className="experience__list">
          {experience.map((item) => (
            <article className="experience-card" key={item.id}>
              <div className="experience-card__period">
                {item.period}
              </div>

              <div className="experience-card__content">
                <h3 className="experience-card__role">
                  {item.role}
                </h3>

                <p className="experience-card__company">
                  {item.company}
                </p>

                <p className="experience-card__description">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience