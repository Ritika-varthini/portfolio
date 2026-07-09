import { portfolioData } from '../data/portfolioData';

export default function NavbarSection({ isDark, toggleTheme }) {
  const { personalInfo } = portfolioData;

  return (
    <header className="navbar">
      <a className="brand" href="#home">
        <span className="brand-mark">R</span>
        <span>{personalInfo.name}</span>
      </a>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="theme-toggle" onClick={() => toggleTheme((prev) => !prev)}>
        {isDark ? '☀️' : '🌙'}
      </button>
    </header>
  );
}
