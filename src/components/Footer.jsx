import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo } = portfolioData;

  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 print:hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Footer Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleScrollTo(e, 'home')}
          className="text-xl font-bold bg-gradient-to-r from-primary-light via-secondary-light to-accent-light bg-clip-text text-transparent"
        >
          &lt; Ritika /&gt;
        </a>

        {/* Footer Quick Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-sm">
          <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-white transition-colors duration-250">About</a>
          <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="hover:text-white transition-colors duration-250">Skills</a>
          <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="hover:text-white transition-colors duration-250">Experience</a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover:text-white transition-colors duration-250">Projects</a>
          <a href="#certifications" onClick={(e) => handleScrollTo(e, 'certifications')} className="hover:text-white transition-colors duration-250">Certifications</a>
          <a href="#achievements" onClick={(e) => handleScrollTo(e, 'achievements')} className="hover:text-white transition-colors duration-250">Achievements</a>
          <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-white transition-colors duration-250">Contact</a>
        </nav>

        {/* Footer Socials */}
        <div className="flex items-center gap-4">
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
            aria-label="GitHub Link"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a 
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
            aria-label="LinkedIn Link"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
            aria-label="Email Link"
          >
            <FaEnvelope className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Under copyright bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p>&copy; {currentYear} Ritika Varthini R. All rights reserved.</p>
        <p className="font-mono">Designed & Built with React, Tailwind & Framer Motion</p>
      </div>
    </footer>
  );
}
