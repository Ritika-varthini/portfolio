import { portfolioData } from '../data/portfolioData';

export default function HeroSection() {
  const { personalInfo } = portfolioData;

  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Hello, I’m</p>
        <h1>{personalInfo.name}</h1>
        <h2>{personalInfo.role}</h2>
        <p className="hero-intro">{personalInfo.intro}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={personalInfo.resumeUrl} download>
            Download Resume
          </a>
          <a className="btn btn-secondary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-card">
        <div className="pulse-dot" />
        <h3>Recruiter Focus</h3>
        <ul>
          <li>AI/ML and full-stack development</li>
          <li>Enterprise software and ERP systems</li>
          <li>Scalable web applications and database design</li>
        </ul>
      </div>
    </section>
  );
}
