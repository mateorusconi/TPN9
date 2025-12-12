import React from 'react';
import Hero from '../components/Hero';
import ConceptCards from '../components/ConceptCards';
import AuditFlowDiagram from '../components/AuditFlowDiagram';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      <Hero />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Conceptos Clave</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entendiendo la auditoría no como una policía informática, sino como una herramienta estratégica para la mejora y la seguridad.
          </p>
        </div>
        <ConceptCards />
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ciclo de Vida de la Auditoría</h2>
            <p className="text-muted-foreground">Visualización interactiva de las etapas del proceso.</p>
          </div>
          <AuditFlowDiagram />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-primary/5 border border-primary/20 rounded-2xl p-10"
        >
          <h2 className="text-2xl font-bold mb-4">Visualización de Datos</h2>
          <p className="mb-6 text-muted-foreground">Explora cómo se vería un reporte de auditoría en un dashboard interactivo.</p>
          <a href="#/dashboard" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-md">
            Ir al Dashboard
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;