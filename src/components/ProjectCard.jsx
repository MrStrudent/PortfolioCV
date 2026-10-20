function ProjectCard({title, description, technologies, number, status}){
  const activo = status === true || status === 'True';
  return(
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">{number}</span>
        <span className="project-icon">{"</>"}</span>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technology-list">
        {technologies.map((technology) => (
          <span className="technology" key={technology}>
            {technology}</span>
        ))}
      </div>
      <div className="project-status">
        <span className={`status-dot ${activo ? "online" : "offline"}`} />
        <span className="status-text">
          {activo ? "Projecto en curso" : "Projecto finalizado"}
        </span>
      </div>
    </article>
  );
}

export default ProjectCard;