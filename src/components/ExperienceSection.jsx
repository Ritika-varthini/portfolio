import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section className="section section-alt" id="experience">
      <div className="section-title">
        <p className="eyebrow">Experience</p>
        <h2>Internship highlights</h2>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <article key={item.title} className="card experience-card">
            <p className="pill">{item.period}</p>
            <h3>{item.title}</h3>
            <h4>{item.company}</h4>
            <p>{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
