import { useEffect, useState } from 'react';
import './App.css';
import NavbarSection from './components/NavbarSection';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={`app ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <NavbarSection isDark={isDark} toggleTheme={setIsDark} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
