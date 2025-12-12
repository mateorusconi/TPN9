import React from 'react';
import AuditPolicies from '../components/AuditPolicies';

const Policies: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Políticas y Controles</h1>
        <p className="text-xl text-muted-foreground">
          Las políticas definen las reglas del juego. Seleccione los elementos en el checklist a continuación para evaluar el nivel de madurez de un entorno de control hipotético.
        </p>
      </div>

      <AuditPolicies />
    </div>
  );
};

export default Policies;