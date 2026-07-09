import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(savedTheme ? savedTheme === 'dark' : prefersDark);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={`app-shell ${isDark ? 'dark' : ''}`}>
      <button className="theme-toggle" onClick={() => setIsDark((prev) => !prev)} aria-label="Toggle theme">
        {isDark ? '☀️' : '🌙'}
      </button>
      <AnimatePresence mode="wait">
        <motion.main
          key={isDark ? 'dark' : 'light'}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
