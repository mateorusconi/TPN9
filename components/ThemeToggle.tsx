import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-accent transition-colors relative"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 0 : 180, scale: isDarkMode ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="w-5 h-5 text-foreground" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0, scale: isDarkMode ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        <Sun className="w-5 h-5 text-foreground" />
      </motion.div>
    </button>
  );
};

export default ThemeToggle;