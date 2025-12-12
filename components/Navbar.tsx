import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Conceptos', path: '/que-es-auditoria' },
    { name: 'Tipos', path: '/tipos' },
    { name: 'Planificación', path: '/planificacion' },
    { name: 'Políticas', path: '/politicas' },
    { name: 'Caso Real', path: '/ejemplo' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Integrantes', path: '/integrantes' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-4 group">
            <img 
                src="https://www.frrq.utn.edu.ar/wp-content/uploads/2023/03/LogoUTN-negro-HQ.png" 
                alt="UTN Logo" 
                className="h-12 w-auto dark:invert dark:brightness-0 transition-all group-hover:scale-105" 
            />
            <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">Auditoría de Sistemas</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1 font-medium">Trabajo Práctico Nº9</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;