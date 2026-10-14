import './Skills.css'

function Skills() {
  const skills = [
    'Python',
'JavaScript',
'React',
'Next.js',
'NestJS',
'Flask',
'FastAPI',
'SQL',
'MySQL',
'PostgreSQL',
'HTML',
'CSS',
'Git',
'GitHub',
'Docker',
'GitHub Actions'
  ]

  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__header">
          <p className="skills__eyebrow">Skills</p>

          <h2 className="skills__title">
            Technologies I work with
          </h2>

          <p className="skills__description">
            A growing set of technologies I use to build, test, and
            maintain software applications.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((skill) => (
            <div className="skills__card" key={skill}>
              <span className="skills__name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills