import { motion } from 'framer-motion';
import { FaFileDownload, FaPrint, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function ResumeViewer() {
  const { personalInfo, about, skills, experience, projects, achievements } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  // Triggers a virtual document download containing a text representation of the CV
  const handleDownload = () => {
    const cvText = `
RITIKA VARTHINI R
Software Engineer | Full Stack Developer | AI & Machine Learning Enthusiast
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}
Location: ${personalInfo.location}

SUMMARY:
${personalInfo.bio}

EDUCATION:
${about.education.map(edu => `- ${edu.degree} | ${edu.institution} (${edu.period}) | ${edu.score}`).join('\n')}

EXPERIENCE:
${experience.map(exp => `- ${exp.role} at ${exp.company} (${exp.period})\n  ${exp.description.join('\n  ')}`).join('\n\n')}

PROJECTS:
${projects.map(proj => `- ${proj.title}: ${proj.description}\n  Tech: ${proj.technologies.join(', ')}`).join('\n\n')}

SKILLS:
${skills.map(s => `${s.category}: ${s.skills.map(sk => `${sk.name} (${sk.level}%)`).join(', ')}`).join('\n')}

ACHIEVEMENTS:
${achievements.map(ach => `- ${ach.title} [${ach.category}]: ${ach.description}`).join('\n')}
    `;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Ritika_Varthini_R_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section 
      id="resume" 
      className="py-24 px-4 sm:px-6 lg:px-8 snap-section bg-white dark:bg-darkBg relative overflow-hidden print:p-0"
    >
      <div className="absolute left-10 bottom-10 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/5 blur-3xl glow-blob print:hidden" />

      <div className="max-w-4xl mx-auto print:max-w-full">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 print:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold text-primary dark:text-accent tracking-wide uppercase flex items-center justify-center gap-2">
            <FaFileDownload className="inline" /> Curriculum Vitae
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Resume
          </p>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Buttons Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 mb-6 print:hidden">
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary-dark shadow-md shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <FaFileDownload className="h-4 w-4" /> Download Text CV
          </button>
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <FaPrint className="h-4 w-4" /> Print Resume Page
          </button>
        </div>

        {/* Resume Virtual A4 Paper document */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white text-slate-850 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-12 rounded-2xl print:border-none print:shadow-none print:p-0 mx-auto select-text relative font-sans leading-relaxed"
          style={{ contentVisibility: 'auto' }}
        >
          {/* Document Header */}
          <div className="text-center pb-6 border-b-2 border-slate-200 mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">{personalInfo.name}</h1>
            <p className="text-sm font-semibold text-primary tracking-wide mb-3 uppercase">{personalInfo.title}</p>
            
            {/* Header Contact info */}
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1"><FaEnvelope className="text-primary text-[10px]" /> {personalInfo.email}</span>
              <span className="flex items-center gap-1"><FaPhone className="text-primary text-[10px]" /> {personalInfo.phone}</span>
              <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-primary text-[10px]" /> {personalInfo.location}</span>
            </div>
            
            {/* Links */}
            <div className="flex justify-center items-center gap-4 mt-3 text-xs text-slate-500 font-mono">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">github.com/ritikavarthini</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">linkedin.com/in/ritikavarthini</a>
            </div>
          </div>

          <div className="space-y-6">
            {/* Summary */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-2">Summary</h3>
              <p className="text-xs text-slate-650 font-light leading-relaxed">{personalInfo.bio}</p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-2.5">Education</h3>
              <div className="space-y-3">
                {about.education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start text-xs">
                    <div>
                      <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                      <p className="text-slate-600 italic mt-0.5">{edu.institution}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-bold text-slate-800 font-mono">{edu.period}</span>
                      <p className="text-primary font-bold mt-0.5">{edu.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work History */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-2.5">Experience</h3>
              <div className="space-y-4">
                {experience.map((exp, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="flex justify-between items-start mb-1.5">
                      <div>
                        <h4 className="font-bold text-slate-900">{exp.role}</h4>
                        <p className="text-slate-600 font-semibold italic mt-0.5">{exp.company}</p>
                      </div>
                      <span className="font-bold text-slate-800 shrink-0 font-mono">{exp.period}</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1 text-slate-650 font-light leading-relaxed">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-2.5">Projects</h3>
              <div className="space-y-3.5">
                {projects.map((proj, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-900">{proj.title}</h4>
                      <span className="text-[10px] text-slate-500 font-semibold font-mono">Tech: {proj.technologies.slice(0,4).join(', ')}</span>
                    </div>
                    <p className="text-slate-650 font-light leading-relaxed">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills grid */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-2">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
                {skills.map((s, idx) => (
                  <div key={idx} className="flex gap-1.5">
                    <span className="font-bold text-slate-900 shrink-0 min-w-[90px]">{s.category}:</span>
                    <span className="text-slate-650 font-light">{s.skills.map(sk => sk.name).join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 mb-2">Achievements</h3>
              <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-650 font-light leading-relaxed">
                {achievements.map((ach, idx) => (
                  <li key={idx}>
                    <strong className="text-slate-800">{ach.title}</strong>: {ach.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
