import { skills } from '../data/skills';

function Skills(){
  return(
    <section className="content-section skills" id="habilidades">
      <p className="eyebrow">03 / Habilidades</p>
      <h2>Mis habiidades tecnicas</h2>
      <p className="skilss-intro">
        Estas son las tecnologias con las que trabajo y 
        las areas en las que quiero seguir aprendiendo.
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <article className="skill-card" key={skill.category}>
            <span className="skill-number">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{skill.category}</h3>
            <div className="skill-items">
              {skill.items.map((item) => (
                <span className="skill-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;