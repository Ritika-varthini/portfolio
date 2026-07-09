import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  const { about } = portfolioData;

  return (
    <section className="section" id="about">
      <div className="section-title">
        <p className="eyebrow">About</p>
        <h2>Education, goals, and strengths</h2>
      </div>
      <div className="about-grid">
        <article className="card">
          <h3>Education</h3>
          {about.education.map((item, index) => (
            <div key={index} className="info-block">
              <p className="pill">{item.period}</p>
              <h4>{item.degree}</h4>
              <p>{item.institution}</p>
              <p>{item.score}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </article>
        <article className="card">
          <h3>Career Objective</h3>
          <p>{about.objective}</p>
          <h3>Strengths</h3>
          <ul className="tag-list">
            {about.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Areas of Interest</h3>
          <ul className="tag-list">
            {about.interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
