import { contact } from '../data/contact';

function Contact(){
  return(
    <section className="content-section contact-section" id="contacto">
      <p className='eyebrow'>05 / Contacto</p>

      <h2>¿Trabajamos juntos?</h2>

      <p className="contact-intro">
        Estoy abierto a conocer personas, colaborar en proyectos
        y seguir aprendiendo sobre desarrollo de software.
      </p>

      <div className="contact-links">
        <a className="button primary"
        href={`mailto:${contact.email}`}>
          Enviarme un correo</a>

          <a className="button secondary"
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer">LinkedIn ↗</a>

          <a className="button secondary"
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer">GitHub ↗</a>
      </div>
    </section>
  );
}

export default Contact;