import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Globe, Settings, ShieldAlert, FileSearch, Scale } from 'lucide-react';
import { AuditType } from '../types';

const types: AuditType[] = [
  {
    id: 'interna',
    title: 'Auditoría Interna',
    description: 'Realizada por personal de la propia empresa. Busca revisión continua.',
    icon: Briefcase,
    details: ['Dependencia laboral directa.', 'Revisión rutinaria de controles.', 'Foco en la mejora de procesos internos.']
  },
  {
    id: 'externa',
    title: 'Auditoría Externa',
    description: 'Realizada por organismos o profesionales independientes.',
    icon: Globe,
    details: ['Dictamen imparcial.', 'Validez legal y ante terceros.', 'Visión objetiva sin conflictos de interés.']
  },
  {
    id: 'operacional',
    title: 'Auditoría Operacional',
    description: 'Evalúa la eficiencia y eficacia de las operaciones.',
    icon: Settings,
    details: ['Optimización de recursos.', 'Evaluación de flujos de trabajo.', 'Reducción de cuellos de botella.']
  },
  {
    id: 'seguridad',
    title: 'Auditoría de Seguridad',
    description: 'Enfocada en vulnerabilidades y amenazas del sistema.',
    icon: ShieldAlert,
    details: ['Penetration Testing.', 'Revisión de accesos y privilegios.', 'Análisis de configuraciones de firewall.']
  },
  {
    id: 'forense',
    title: 'Auditoría Forense',
    description: 'Investigación post-incidente para recolectar evidencia legal.',
    icon: FileSearch,
    details: ['Cadena de custodia de evidencia.', 'Análisis de intrusiones.', 'Preparación para litigios.']
  },
  {
    id: 'cumplimiento',
    title: 'Auditoría de Cumplimiento',
    description: 'Verifica la adhesión a leyes, normas y estándares (ISO, GDPR).',
    icon: Scale,
    details: ['Revisión legal.', 'Estándares internacionales.', 'Políticas internas corporativas.']
  },
];

const AuditTypes: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {types.map((type) => (
        <div key={type.id} className="border border-border rounded-lg bg-card overflow-hidden">
          <button
            onClick={() => setActiveId(activeId === type.id ? null : type.id)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-secondary rounded-full">
                <type.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-lg">{type.title}</span>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                activeId === type.id ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          
          <AnimatePresence>
            {activeId === type.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 pt-0 text-muted-foreground border-t border-border mt-2 bg-muted/20">
                  <p className="mb-3">{type.description}</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {type.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default AuditTypes;