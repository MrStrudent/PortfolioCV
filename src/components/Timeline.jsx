
import { timeline } from '../data/timeline';

function Timeline() {
  return (
    <section className="content-section timeline-section" id="formacion">
      <p className="eyebrow">04 / Mi Trayectoria</p>

      <h2>Formación y experiencia</h2>

      <p className="timeline-intro">
        Mi recorrido académico y los proyectos en los que
        he aplicado mis conocimientos.
      </p>

      <div className="timeline-list">
        {timeline.map((event) => (
          <article className="timeline-item" key={event.id}>
            <div className="timeline-marker" />

            <div className="timeline-card">
              <div className="timeline-meta">
                <span className="timeline-type">{event.type}</span>
                <span className="timeline-period">{event.period}</span>
              </div>

              <h3>{event.title}</h3>

              <p className="timeline-place">{event.place}</p>

              <p className="timeline-description">
                {event.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
