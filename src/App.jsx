import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
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

            <Projects />

            <Skills />

            <Timeline />

            <Contact />

      </main>
      <Footer />
    </div>
  );
}

export default App;