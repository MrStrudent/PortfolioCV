function Navbar(){
  return(
    <header className="navbar">
      <a className="logo" href="#inicio">
        AS<span>.</span>
      </a>
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mi</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}

export default Navbar;