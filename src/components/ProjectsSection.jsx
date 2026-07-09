import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section className="section" id="projects">
      <div className="section-title">
        <p className="eyebrow">Projects</p>
        <h2>Selected work and product ideas</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card card">
            <div className="project-visual">
              <span>{project.title}</span>
            </div>
            <div className="project-body">
              <div className="project-head">
                <h3>{project.title}</h3>
                {project.status ? <span className="pill">{project.status}</span> : null}
              </div>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <a className="btn btn-secondary" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
                <a className="btn btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
