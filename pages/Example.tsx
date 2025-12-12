import React from 'react';
import IntegratedAuditExample from '../components/IntegratedAuditExample';

const Example: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-secondary/20 min-h-screen">
       <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Caso Práctico</h1>
        <p className="text-xl text-muted-foreground">
          Análisis de un proceso de auditoría real aplicado a una entidad financiera.
        </p>
      </div>
      <IntegratedAuditExample />
    </div>
  );
};

export default Example;