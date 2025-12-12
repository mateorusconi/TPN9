import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border mt-10">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm font-semibold text-primary">
            Trabajo Práctico Nº9
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Auditoría de Sistemas - UTN Facultad Regional Tucumán
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} Proyecto Educativo.
          </p>
        </div>
        <div className="flex space-x-6">
          <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">Fines Académicos</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;