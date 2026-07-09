import { motion } from 'framer-motion';
import { FaAward, FaShieldAlt, FaCodeBranch, FaGraduationCap } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;

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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Assign specific icons based on achievement index or title
  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return <FaShieldAlt className="h-7 w-7 text-red-500" />;
      case 1:
        return <FaCodeBranch className="h-7 w-7 text-primary" />;
      case 2:
        return <FaGraduationCap className="h-7 w-7 text-secondary" />;
      default:
        return <FaAward className="h-7 w-7 text-accent" />;
    }
  };

  return (
    <section 
      id="achievements" 
      className="py-24 px-4 sm:px-6 lg:px-8 snap-section bg-slate-50 dark:bg-[#111827] relative overflow-hidden"
    >
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-secondary/5 dark:bg-secondary/5 blur-3xl glow-blob" />

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
            <FaAward className="inline text-yellow-500" /> Honors & Awards
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Key Achievements
          </p>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Achievements Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 sm:p-8 rounded-2xl flex items-start gap-5 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
            >
              {/* Highlight gradient bar at the top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Container */}
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0 group-hover:scale-110 transition-transform duration-300">
                {getIcon(idx)}
              </div>

              {/* Text Container */}
              <div className="space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent text-[10px] uppercase font-bold tracking-wider font-mono">
                  {ach.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                  {ach.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-light">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
