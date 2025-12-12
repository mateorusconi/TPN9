import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { motion } from 'framer-motion';
import { PolicyItem } from '../types';

const initialPolicies: PolicyItem[] = [
  { id: '1', label: 'Independencia del auditor', impact: 20 },
  { id: '2', label: 'Trazabilidad documental', impact: 15 },
  { id: '3', label: 'Confidencialidad de la información', impact: 20 },
  { id: '4', label: 'Evidencia verificable y suficiente', impact: 20 },
  { id: '5', label: 'Cumplimiento normativo (ISO/COBIT)', impact: 15 },
  { id: '6', label: 'Minimización de impacto operativo', impact: 10 },
];

const AuditPolicies: React.FC = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const toggleCheck = (id: string) => {
    setChecked(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const totalPossible = initialPolicies.reduce((acc, curr) => acc + curr.impact, 0);
    const currentScore = initialPolicies
      .filter(p => checked.includes(p.id))
      .reduce((acc, curr) => acc + curr.impact, 0);
    
    setScore(Math.round((currentScore / totalPossible) * 100));
  }, [checked]);

  const getMaturityLevel = (s: number) => {
    if (s < 40) return { label: 'Incial / Ad hoc', color: 'text-destructive' };
    if (s < 70) return { label: 'Definido', color: 'text-yellow-500' };
    if (s < 90) return { label: 'Gestionado', color: 'text-blue-500' };
    return { label: 'Optimizado', color: 'text-green-500' };
  };

  const level = getMaturityLevel(score);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-4">
        <h3 className="text-lg font-semibold mb-4">Checklist de Políticas Esenciales</h3>
        {initialPolicies.map((policy) => (
          <motion.div
            key={policy.id}
            whileTap={{ scale: 0.98 }}
            onClick={() => toggleCheck(policy.id)}
            className={`cursor-pointer p-4 rounded-lg border flex items-center justify-between transition-all ${
              checked.includes(policy.id) 
                ? 'bg-primary/5 border-primary shadow-sm' 
                : 'bg-card border-border hover:border-primary/50'
            }`}
          >
            <span className={checked.includes(policy.id) ? 'font-medium text-foreground' : 'text-muted-foreground'}>
              {policy.label}
            </span>
            {checked.includes(policy.id) ? (
              <CheckCircle2 className="text-primary w-6 h-6" />
            ) : (
              <Circle className="text-muted-foreground w-6 h-6" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-6 h-fit sticky top-24">
        <h3 className="text-xl font-bold mb-6">Nivel de Madurez</h3>
        
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary/20">
                Puntaje
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-primary">
                {score}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${score}%` }}
              transition={{ duration: 0.5 }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">Clasificación Actual</p>
          <motion.div
            key={level.label}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`text-2xl font-bold ${level.color}`}
          >
            {level.label}
          </motion.div>
        </div>

        <div className="mt-8 p-4 bg-muted/50 rounded-lg text-sm">
            <p className="font-semibold mb-2">Recomendación:</p>
            {score < 100 ? (
                <p className="text-muted-foreground">Active todas las políticas para garantizar un entorno de auditoría robusto y confiable.</p>
            ) : (
                <p className="text-green-600 dark:text-green-400">¡Excelente! Su marco normativo cumple con los más altos estándares de calidad.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default AuditPolicies;