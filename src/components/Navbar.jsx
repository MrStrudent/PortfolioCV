function Navbar(){
  return(
    <header className="navbar">
      <a className="logo" href="#inicio" aria-label="Ir al inicio">
        AS<span>.</span>
      </a>
      <nav aria-label="Navegacion principal">
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mi</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contacto">Contacto</a>
        <a href="#formacion">Trayectoria</a>
      </nav>
    </header>
  );
}

export default Navbar;