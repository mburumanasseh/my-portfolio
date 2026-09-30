import projects from '../data/projects'
import './Projects.css'

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__header">
          <p className="projects__eyebrow">Projects</p>

          <h2 className="projects__title">
            Some of my work
          </h2>

          <p className="projects__description">
            A selection of projects I've built while developing my
            software engineering skills.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__content">
                <h3 className="project-card__title">
                  {project.title}
                </h3>

                <p className="project-card__description">
                  {project.description}
                </p>

                <div className="project-card__technologies">
                  {project.technologies.map((technology) => (
                    <span
                      className="project-card__technology"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects