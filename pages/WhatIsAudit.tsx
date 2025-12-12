import React from 'react';
import ConceptCards from '../components/ConceptCards';

const WhatIsAudit: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-6">Auditoría de Sistemas</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          La auditoría de sistemas es el examen y evaluación de los procesos del área de Procesamiento Automático de Datos (PAD) y de la utilización de los recursos que en ellos intervienen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            Su propósito fundamental es llegar a establecer el grado de eficiencia, efectividad y economía de los sistemas computarizados en una empresa y presentar conclusiones y recomendaciones encaminadas a corregir las deficiencias existentes y mejorarlas.
          </p>
          <p>
            No se trata únicamente de buscar errores o fraudes (aunque estos pueden ser detectados), sino de una <strong>herramienta de mejora continua</strong> que alinea la tecnología con los objetivos estratégicos del negocio.
          </p>
        </div>
        <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Puntos Clave</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-primary h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Verificación de controles internos.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Cumplimiento de normas y procedimientos.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Seguridad física y lógica de los datos.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Eficiencia en la adquisición de hardware y software.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Conceptos Fundamentales</h2>
        <ConceptCards />
      </div>
    </div>
  );
};

export default WhatIsAudit;