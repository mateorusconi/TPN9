import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  { id: 1, title: 'Planificación', desc: 'Definición de objetivos, alcance y recursos.' },
  { id: 2, title: 'Trabajo de Campo', desc: 'Ejecución de pruebas y recopilación de datos.' },
  { id: 3, title: 'Obtención de Evidencias', desc: 'Documentación de hallazgos (física, testimonial, analítica).' },
  { id: 4, title: 'Evaluación', desc: 'Análisis de evidencias contra criterios de auditoría.' },
  { id: 5, title: 'Informe Final', desc: 'Redacción de conclusiones y recomendaciones.' },
];

const AuditFlowDiagram: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div className="w-full py-8">
      <div className="relative border-2 border-dashed border-primary/30 rounded-xl p-8 pt-12 pb-32 overflow-x-auto">
        <div className="flex items-center min-w-[800px] justify-between px-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                className={`relative flex flex-col items-center justify-center p-4 w-40 h-40 rounded-full border-2 cursor-pointer transition-colors duration-300 z-10 bg-background ${
                  hoveredStep === step.id 
                    ? 'border-primary shadow-[0_0_15px_rgba(249,115,22,0.5)]' 
                    : 'border-muted-foreground/30'
                }`}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-3xl font-bold text-muted-foreground/20 absolute -top-2 right-4">
                  0{step.id}
                </span>
                <h4 className={`text-center font-bold text-sm ${hoveredStep === step.id ? 'text-primary' : 'text-foreground'}`}>
                  {step.title}
                </h4>
                
                {/* Tooltip style description */}
                {hoveredStep === step.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-4 w-56 p-4 bg-popover text-popover-foreground text-sm rounded-xl shadow-xl border border-border text-center z-20"
                    style={{ left: '50%', transform: 'translateX(-50%)' }}
                  >
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-popover border-t border-l border-border rotate-45"></div>
                    {step.desc}
                  </motion.div>
                )}
              </motion.div>

              {index < steps.length - 1 && (
                <div className="flex-1 flex items-center justify-center px-2">
                  <motion.div
                    animate={{ 
                      x: hoveredStep === step.id || hoveredStep === step.id + 1 ? [0, 5, 0] : 0,
                      color: hoveredStep === step.id || hoveredStep === step.id + 1 ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'
                    }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4">Pasa el cursor sobre las etapas para ver más detalles.</p>
    </div>
  );
};

export default AuditFlowDiagram;