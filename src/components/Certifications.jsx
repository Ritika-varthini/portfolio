import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="certifications" 
      className="py-24 px-4 sm:px-6 lg:px-8 snap-section bg-white dark:bg-darkBg relative overflow-hidden"
    >
      <div className="absolute left-0 top-10 w-80 h-80 rounded-full bg-primary/5 dark:bg-primary/5 blur-3xl glow-blob" />

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
            <FaCertificate className="inline text-amber-500" /> Credentials
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Certifications & Licenses
          </p>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-primary/15 dark:hover:border-accent/15 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Badge visual */}
              <div className="mb-4 text-amber-500 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
                <FaCertificate className="h-8 w-8" />
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight mb-2 tracking-tight group-hover:text-primary dark:group-hover:text-accent transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {cert.issuer}
                </p>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                  <span>Issued: {cert.date}</span>
                  <span className="max-w-[100px] truncate" title={`ID: ${cert.id}`}>ID: {cert.id}</span>
                </div>
              </div>

              <a 
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-xs font-semibold border border-slate-200 hover:border-primary/30 text-slate-600 dark:border-slate-800 dark:hover:border-accent/30 dark:text-slate-400 hover:text-primary dark:hover:text-accent bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300"
              >
                Verify Credential <FaExternalLinkAlt className="h-2.5 w-2.5" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
