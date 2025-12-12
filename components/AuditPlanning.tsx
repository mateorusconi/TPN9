import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlanningStep } from '../types';

const steps: PlanningStep[] = [
  {
    id: 'alcance',
    title: 'Definición de Alcance',
    content: 'Determinar qué áreas, sistemas y procesos serán auditados. Es crucial para no desviar recursos y establecer límites claros.',
    tasks: ['Entrevistas preliminares', 'Mapa de sistemas', 'Objetivos específicos']
  },
  {
    id: 'riesgos',
    title: 'Identificación de Riesgos',
    content: 'Análisis de posibles amenazas que afecten la integridad, confidencialidad y disponibilidad.',
    tasks: ['Matriz de riesgos', 'Evaluación de impacto', 'Probabilidad de ocurrencia']
  },
  {
    id: 'cronograma',
    title: 'Cronograma',
    content: 'Establecimiento de tiempos para cada fase de la auditoría para garantizar la entrega oportuna del informe.',
    tasks: ['Diagrama de Gantt', 'Hitos de control', 'Fechas de entrega']
  },
  {
    id: 'recursos',
    title: 'Recursos',
    content: 'Asignación del equipo auditor, herramientas de software y presupuesto necesario.',
    tasks: ['Selección de perfiles', 'Herramientas de monitoreo', 'Accesos requeridos']
  },
  {
    id: 'pruebas',
    title: 'Plan de Pruebas',
    content: 'Diseño de los tests técnicos y funcionales que se ejecutarán para validar los controles.',
    tasks: ['Scripts de prueba', 'Muestreo de datos', 'Escenarios de simulación']
  },
];

const AuditPlanning: React.FC = () => {
  const [activeTab, setActiveTab] = useState(steps[0].id);

  const activeStep = steps.find(s => s.id === activeTab);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-wrap border-b border-border mb-6">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveTab(step.id)}
            className={`px-4 py-3 text-sm font-medium transition-colors relative ${
              activeTab === step.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {step.title}
            {activeTab === step.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              />
            )}
          </button>
        ))}
      </div>

      <div className="min-h-[250px] bg-card border border-border rounded-lg p-6 shadow-sm">
        <AnimatePresence mode="wait">
          {activeStep && (
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">{activeStep.title}</h3>
              <p className="text-lg text-muted-foreground mb-6">{activeStep.content}</p>
              
              <div className="bg-secondary/50 rounded-md p-4">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Tareas Clave</h4>
                <div className="flex flex-wrap gap-2">
                  {activeStep.tasks.map((task, idx) => (
                    <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {task}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuditPlanning;