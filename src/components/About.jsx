import { motion } from 'framer-motion';
import { FaUser, FaUserGraduate, FaLightbulb, FaGraduationCap } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <section 
      id="about" 
      className="py-24 px-4 sm:px-6 lg:px-8 snap-section bg-white dark:bg-darkBg relative overflow-hidden"
    >
      {/* Background visual blobs */}
      <div className="absolute right-0 top-1/3 w-80 h-80 rounded-full bg-accent/5 dark:bg-accent/5 blur-3xl glow-blob" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h2 className="text-base font-semibold text-primary dark:text-accent tracking-wide uppercase flex items-center justify-center gap-2">
            <FaUser className="inline" /> About Me
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            My Journey & Aspirations
          </p>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Biography & Goals */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              className="glass-card p-6 sm:p-8 rounded-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                Who I Am
              </h3>
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed font-light">
                {about.biography}
              </p>
            </motion.div>

            <motion.div 
              className="glass-card p-6 sm:p-8 rounded-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full"></span>
                Career Objective
              </h3>
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed font-light italic">
                "{about.careerObjective}"
              </p>
            </motion.div>

            {/* Interest Tags */}
            <motion.div 
              className="glass-card p-6 sm:p-8 rounded-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <FaLightbulb className="text-amber-500" />
                Interests & Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {about.interests.map((interest, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-350 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:border-primary/30 dark:hover:border-accent/30 transition-all duration-300 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              className="glass-card p-6 sm:p-8 rounded-2xl h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <FaUserGraduate className="text-primary dark:text-accent" />
                Education Timeline
              </h3>

              <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 space-y-8 py-2">
                {about.education.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    className="relative pl-8"
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={cardVariants}
                  >
                    {/* Bullet marker */}
                    <span className="absolute -left-[11px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-white dark:bg-darkBg border-2 border-primary dark:border-accent shadow-sm">
                      <FaGraduationCap className="h-2.5 w-2.5 text-primary dark:text-accent" />
                    </span>

                    {/* Timeline Card */}
                    <div className="p-5 rounded-xl bg-slate-50/70 hover:bg-slate-100/50 dark:bg-slate-800/40 dark:hover:bg-slate-800/60 border border-slate-100 dark:border-slate-700/30 transition-all duration-300">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light mb-2">
                        {edu.period}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm font-semibold text-primary dark:text-accent mt-2">
                        {edu.score}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
