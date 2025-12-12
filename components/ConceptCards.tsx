import React from 'react';
import { motion } from 'framer-motion';
import { Target, Search, BarChart3, Lock } from 'lucide-react';

const concepts = [
  {
    title: "¿Qué es?",
    description: "Proceso de revisión y evaluación de los controles, sistemas, procedimientos de informática; de los equipos de cómputo, su utilización, eficiencia y seguridad.",
    icon: Search,
  },
  {
    title: "Objetivos",
    description: "Buscar una mejor relación costo-beneficio de los sistemas, incrementar la satisfacción de los usuarios y asegurar la integridad de la información.",
    icon: Target,
  },
  {
    title: "Alcances",
    description: "Puede ser total (toda la infraestructura) o parcial (áreas específicas). Incluye hardware, software, gestión de datos y seguridad física.",
    icon: BarChart3,
  },
  {
    title: "Importancia",
    description: "Fundamental en organizaciones modernas para mitigar riesgos, asegurar cumplimiento normativo y optimizar la toma de decisiones estratégicas.",
    icon: Lock,
  },
];

const ConceptCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {concepts.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
          className="bg-card border border-border p-6 rounded-xl shadow-sm transition-all"
        >
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <item.icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ConceptCards;