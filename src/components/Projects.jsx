import { motion } from 'framer-motion';
import { FaLaptopCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-24 px-4 sm:px-6 lg:px-8 snap-section bg-slate-50 dark:bg-[#111827] relative overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute right-0 bottom-10 w-80 h-80 rounded-full bg-accent/5 dark:bg-accent/5 blur-3xl glow-blob" />
      <div className="absolute left-10 top-1/4 w-72 h-72 rounded-full bg-primary/5 dark:bg-primary/5 blur-3xl glow-blob" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold text-primary dark:text-accent tracking-wide uppercase flex items-center justify-center gap-2">
            <FaLaptopCode className="inline" /> My Creations
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </p>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="glass-card flex flex-col h-full rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Premium Gradient Graphic Header instead of boring placeholder image */}
              <div className={`relative h-52 w-full bg-gradient-to-br ${project.imageGrad} flex items-center justify-center overflow-hidden group`}>
                {/* Floating circles on graphic */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/10 blur-md pointer-events-none" />
                <div className="absolute bottom-6 right-8 w-24 h-24 rounded-full bg-white/5 blur-lg pointer-events-none" />
                
                {/* Project title inside the banner */}
                <span className="text-white text-3xl font-extrabold tracking-wider font-sans drop-shadow-md select-none group-hover:scale-105 transition-transform duration-500">
                  {project.title}
                </span>

                {/* Cybernetic grid overlay to make it look modern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider font-mono text-[10px]">
                  Tech Stack Integration
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-350 border border-slate-200/50 dark:border-slate-700/50 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed font-light mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Card Action footer links */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800/80 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-450"
                  >
                    <FaGithub className="h-4 w-4" /> Code
                  </a>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-primary hover:bg-primary-dark shadow-sm shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <FaExternalLinkAlt className="h-3 w-3" /> Live Demo
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
