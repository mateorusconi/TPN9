import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, GraduationCap, Layout } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center justify-center bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0" stroke="currentColor" strokeWidth="0.1" />
          <path d="M0 0 L100 100" stroke="currentColor" strokeWidth="0.1" />
          <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="0.1" fill="none" />
          <circle cx="80" cy="80" r="15" stroke="currentColor" strokeWidth="0.1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20"
          >
            <GraduationCap className="w-4 h-4 mr-2" />
            UTN - Facultad Regional Tucumán
          </motion.div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            Aprendiendo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Auditoría de Sistemas</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Una guía interactiva y visual para comprender los procesos de evaluación, control y seguridad en entornos informáticos. Proyecto académico TP Nº9.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/que-es-auditoria">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25 w-full sm:w-auto"
              >
                Empezar a Aprender
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
            <Link to="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 border border-input text-base font-medium rounded-xl text-foreground bg-background hover:bg-accent hover:text-accent-foreground w-full sm:w-auto"
              >
                Ver Ejemplo Visual
                <Layout className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full h-[500px] bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-3xl border border-primary/10 backdrop-blur-sm flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.05] bg-[length:30px_30px]" />

            {/* Abstract visual representation of learning/audit */}
            <div className="relative w-full max-w-sm">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="bg-card p-6 rounded-2xl shadow-xl border border-border z-20 relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-2 w-20 bg-muted rounded" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-muted/50 rounded" />
                  <div className="h-2 w-5/6 bg-muted/50 rounded" />
                  <div className="h-2 w-4/6 bg-muted/50 rounded" />
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="h-6 w-6 rounded bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center">
                    <Server className="w-3 h-3 text-orange-500" />
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-12 -bottom-12 bg-white dark:bg-zinc-900 p-5 rounded-2xl shadow-xl border border-border z-10 w-48"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-xs font-bold text-muted-foreground">TP Aprobado</div>
                </div>
                <div className="h-2 w-full bg-green-500 rounded-full opacity-20 overflow-hidden">
                  <div className="h-full w-3/4 bg-green-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;