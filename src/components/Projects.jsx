import ProjectCard from './ProjectCard';
import { projects } from '../data/project';

function Projects(){
  return(
    <section className="content-section" id="proyectos">
              <p className="eyebrow">02 / Proyectos</p>
              <h2>Explora mis proyectos</h2>
              <p className="projects-intro">
                Aqui puedes ver algunos de mis proyectos
                academicos y personales, las tecnologias utilizadas
                y los problemas que resuelve cada uno.
              </p>
              <div className="projects-grid">
                {projects.map((project) =>(
                  <ProjectCard
                  key={project.number}
                  number={project.number}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  status={project.status}
                  />
                ))}
              </div>
            </section>
  );
}

export default Projects;