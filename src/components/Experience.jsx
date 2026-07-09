import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: (idx) => ({
      opacity: 0,
      x: idx % 2 === 0 ? -40 : 40,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  return (
    <section 
      id="experience" 
      className="py-24 px-4 sm:px-6 lg:px-8 snap-section bg-white dark:bg-darkBg relative overflow-hidden"
    >
      {/* Decorative Blob */}
      <div className="absolute right-10 top-10 w-96 h-96 rounded-full bg-secondary/5 dark:bg-secondary/5 blur-3xl glow-blob" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h2 className="text-base font-semibold text-primary dark:text-accent tracking-wide uppercase flex items-center justify-center gap-2">
            <FaBriefcase className="inline" /> Professional Journey
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Internships & Work Experience
          </p>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Path container */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:bg-slate-200 md:before:dark:bg-slate-850">
          
          {experience.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={idx}
                className="relative mb-12 md:mb-16 flex flex-col md:flex-row md:justify-between items-stretch"
              >
                {/* Visual Bullet center node - hidden on mobile, placed exactly in middle on desktop */}
                <span className="absolute -left-[9px] top-6 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-white dark:bg-darkBg border-4 border-primary dark:border-accent z-10" />

                {/* Timeline Date text - shown on opposite column in desktop layout */}
                <div className={`hidden md:flex md:w-[45%] items-center ${isEven ? 'justify-end pr-10' : 'justify-start pl-10 order-2'}`}>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
                    <FaCalendarAlt className="text-primary dark:text-accent text-sm" />
                    <span className="text-sm uppercase tracking-wider font-mono">{exp.period}</span>
                  </div>
                </div>

                {/* Card block */}
                <motion.div 
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={itemVariants}
                  className={`w-full pl-6 md:pl-0 md:w-[45%] ${isEven ? 'order-1 md:pr-10' : 'order-1 md:pl-10 md:ml-auto'}`}
                >
                  <div className="glass-card p-6 sm:p-8 rounded-2xl relative shadow-sm border border-slate-100 dark:border-slate-800/80 hover:shadow-md hover:border-primary/10 dark:hover:border-accent/10 transition-all duration-300">
                    
                    {/* Date label - shown on mobile card view directly */}
                    <div className="flex md:hidden items-center gap-2 text-slate-500 dark:text-slate-400 font-medium mb-3">
                      <FaCalendarAlt className="text-primary dark:text-accent text-sm" />
                      <span className="text-xs uppercase tracking-wider font-mono">{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      {exp.role}
                    </h3>
                    <h4 className="text-base font-semibold text-primary dark:text-accent mt-1 mb-4">
                      {exp.company}
                    </h4>

                    <ul className="space-y-2.5">
                      {exp.description.map((bullet, bIdx) => (
                        <li 
                          key={bIdx}
                          className="flex items-start text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-light"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 mt-2 mr-2.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
