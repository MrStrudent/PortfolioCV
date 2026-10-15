function ProjectCard({title, description, technologies, number}){
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
    </article>
  );
}

export default ProjectCard;