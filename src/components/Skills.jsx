import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...skills.map(s => s.category)];

  // Gather current skills to display
  const getFilteredSkills = () => {
    if (activeTab === 'All') {
      // Flatten all skills but keep track of category
      return skills.flatMap(cat => 
        cat.skills.map(s => ({ ...s, category: cat.category }))
      );
    }
    const catData = skills.find(s => s.category === activeTab);
    return catData ? catData.skills.map(s => ({ ...s, category: activeTab })) : [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section 
      id="skills" 
      className="py-24 px-4 sm:px-6 lg:px-8 snap-section bg-slate-50 dark:bg-[#111827] relative overflow-hidden"
    >
      <div className="absolute left-0 bottom-1/4 w-80 h-80 rounded-full bg-primary/5 dark:bg-primary/5 blur-3xl glow-blob" />

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
            <FaLaptopCode className="inline" /> Technical Skills
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            My Toolbox & Tech Stack
          </p>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Tab Selection Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 relative border ${
                activeTab === cat
                  ? 'text-white border-primary bg-primary dark:border-accent dark:bg-accent dark:text-slate-900 shadow-md'
                  : 'text-slate-600 border-slate-200 bg-white hover:border-slate-300 dark:text-slate-455 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={`${skill.category}-${skill.name}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm relative overflow-hidden"
              >
                {/* Visual Glow Layer on card hover */}
                <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-primary/5 dark:bg-accent/5 blur-xl group-hover:scale-150 transition-all duration-500 pointer-events-none" />

                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-bold text-slate-800 dark:text-white tracking-wide">
                    {skill.name}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    {skill.category}
                  </span>
                </div>

                {/* Progress bar info */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  
                  {/* Progress bar rail */}
                  <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <motion.div 
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
