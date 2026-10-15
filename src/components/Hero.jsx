function Hero({name, role, description}){
  return(
    <section className="hero" id="inicio">
          <p className="eyebrow">Portafolio Personal</p>
          <h1>Hola, soy <span>{name}</span>
          </h1>
          <h2>{role}</h2>
          <p className="description">
            {description}
          </p>

          <div className="hero-buttons">
            <a className="button primary" href="#proyectos">
              Ver Proyectos 
            </a>
            <a className="button secondary" href="#contacto">
              Contactame
            </a>
          </div>

          <p className="status">
            <span className="status-dot"></span>
            Aprendiendo, construyendo y mejorando.
          </p>
          </section>
  );
}

export default Hero;