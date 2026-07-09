import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section className="section section-alt" id="skills">
      <div className="section-title">
        <p className="eyebrow">Skills</p>
        <h2>Core technologies and tools</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.name} className="card skill-card">
            <div className="skill-top">
              <h3>{skill.name}</h3>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${skill.level}%` }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
