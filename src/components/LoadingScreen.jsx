import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // 2 seconds loading screen
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Framer Motion variants
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, -0.05, 0.9]
      }
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div 
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="text-center"
      >
        {/* Modern decorative visual */}
        <motion.div 
          className="relative mx-auto mb-6 h-16 w-16"
          variants={itemVariants}
        >
          <div className="absolute inset-0 rounded-full border-4 border-slate-700"></div>
          <motion.div 
            className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          ></motion.div>
        </motion.div>

        {/* Name typography */}
        <motion.h1 
          className="text-3xl md:text-5xl font-bold tracking-wider mb-2 font-sans"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-primary-light via-secondary-light to-accent-light bg-clip-text text-transparent">
            Ritika Varthini R
          </span>
        </motion.h1>

        {/* Subtitle typing simulator */}
        <motion.p 
          className="text-slate-400 text-sm md:text-base tracking-widest font-mono uppercase"
          variants={itemVariants}
        >
          &lt; Portfolio Loading /&gt;
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
