import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personalInfo } = portfolioData;

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  const handleScrollTo = (id) => {
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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 snap-section bg-gradient-to-b from-slate-50 to-white dark:from-darkBg dark:to-[#1e293b]"
    >
      {/* Premium background glowing radial decorations */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary/10 dark:bg-primary/20 blur-3xl glow-blob" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-secondary/10 dark:bg-secondary/15 blur-3xl glow-blob" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl glow-blob" />

      {/* Abstract Animated Dot Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          {/* Greeting Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-slate-200 dark:border-slate-700/50 mb-6 text-sm font-medium text-primary dark:text-accent shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse-slow"></span>
            <span>Available for Opportunities</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-lg md:text-xl font-mono tracking-widest text-slate-500 dark:text-slate-400 mb-2 uppercase"
          >
            Hello, my name is
          </motion.h2>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-4"
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Subheading Titles */}
          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200 max-w-3xl mb-6 leading-relaxed"
          >
            {personalInfo.title}
          </motion.p>

          {/* Brief Intro */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-8 leading-relaxed font-light"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10"
          >
            <button
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-white bg-primary hover:bg-primary-dark shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              Contact Me
            </button>
            <button
              onClick={() => handleScrollTo('resume')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-slate-700 dark:text-white bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              View Resume
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-transparent dark:border-slate-700/30 shadow-sm hover:shadow-md transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-transparent dark:border-slate-700/30 shadow-sm hover:shadow-md transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-transparent dark:border-slate-700/30 shadow-sm hover:shadow-md transition-all duration-300"
              aria-label="Email Contact"
            >
              <FaEnvelope className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating indicator to scroll down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10" onClick={() => handleScrollTo('about')}>
        <FaArrowDown className="text-slate-400 dark:text-slate-500 h-5 w-5 hover:text-primary dark:hover:text-accent transition-colors" />
      </div>
    </section>
  );
}
