import React from 'react';
import AuditPlanning from '../components/AuditPlanning';

const Planning: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Planificación de la Auditoría</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Una auditoría exitosa comienza con una planificación meticulosa. Sin una hoja de ruta clara, los esfuerzos pueden dispersarse y los riesgos críticos pasar desapercibidos.
        </p>
      </div>

      <div className="flex justify-center">
        <AuditPlanning />
      </div>

      <div className="mt-16 max-w-4xl mx-auto text-muted-foreground text-center text-sm italic">
        "El éxito de la auditoría depende en un 80% de una buena planificación y en un 20% de la ejecución técnica."
      </div>
    </div>
  );
};

export default Planning;