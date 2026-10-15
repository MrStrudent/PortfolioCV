import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Footer from './components/Footer';

const projects = [
  {
    number: '01',
    title: 'BioVirtual',
    description: 'Plataforma educativa que busca fomentar el aprendizaje mediante un uso responsable de la IA',
    technologies: ['React', 'Python', 'PostgreSQL'],
  },
  {
    number: '02',
    title: 'ParkSystem',
    description: 'Sistema de gestion de estacionamiento con modulos para clientes, vehiculos, estancias y pagos',
    technologies: ['Python', 'Flask', 'SQL'],
  },
  {
    number: '03',
    title: 'Pipeline de bioinformatica',
    description:
    'Proyecto de aprendizaje para automatizar etapas de analisis de datos genomicos.',
    technologies: ['Python', 'Snakemake', 'Linux'],
  },
  {
    number: '04',
    title: 'Robot EDGE computing',
    description:
    'Proyecto IoT robot utilizando fundamentos de edge computing',
    technologies: ['Esp32', 'Electronica', 'C++'],
  },
];

function App(){
  const [isDark, setIsDark] = useState(true);
  return (
    <div className={`portfolio ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <Navbar />
      <button className="theme-toggle"
       onClick={() => setIsDark(!isDark)}
       aria-label="Cambiar tema de color">
        {isDark ? 'Modo claro' : 'Modo oscuro'}
       </button>

      <main>
       <Hero 
       name="Andrei"
       role="Estudiante de Ingenieria Informatica"
       description="Me interesa el desarrollo de software, 
       las bases de datos y la bioinformatica
       este espacio reune mis proyectos, habilidades y
       mi camino como desarrollador"/>

          <section className="content-section" id="sobre-mi">
            <p className="eyebrow">01 / Sobre mi</p>
            <h2>Construyendo soluciones con tecnologia.</h2>
            <p>
              Estoy desarrollando mis habilidades de
              programacion mediante proyectos practicos,
              aprendiendo nuevas herramientas y explorando
              diferentes areas de la informatica.
            </p>
            </section>

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
                  />
                ))}
              </div>
            </section>

            <Skills />
            
            <section className="content-section" id="contacto">
              <p className="eyebrow">03 / Contacto</p>
              <h2>¿Trabajamos juntos?</h2>
              <p>
                Puedes encontrarme por Github, LinkedIn o 
                enviarme un correo electronico</p>
            </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;