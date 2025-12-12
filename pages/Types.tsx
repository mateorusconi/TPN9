import React from 'react';
import AuditTypes from '../components/AuditTypes';

const Types: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Clases y Tipos de Auditoría</h1>
        <p className="text-xl text-muted-foreground">
            Existen diversas clasificaciones según quién realiza la auditoría y cuál es el objeto de estudio principal. A continuación, desglosamos las categorías más relevantes.
        </p>
      </div>
      
      <AuditTypes />

      <div className="mt-16 bg-muted/30 p-8 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Diferencias Clave: Interna vs Externa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
                <h3 className="font-semibold text-lg mb-2 text-primary flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                    Auditoría Interna
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">Realizada por personal de la propia organización.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="mr-2">•</span>Persigue objetivos internos y mejora continua.</li>
                    <li className="flex items-start"><span className="mr-2">•</span>Sugiere optimización de procesos.</li>
                    <li className="flex items-start"><span className="mr-2">•</span>Menor independencia formal.</li>
                </ul>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
                <h3 className="font-semibold text-lg mb-2 text-orange-400 dark:text-orange-300 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mr-2"></span>
                    Auditoría Externa
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">Realizada por una firma independiente contratada.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="mr-2">•</span>Emisión de un dictamen oficial (validez legal).</li>
                    <li className="flex items-start"><span className="mr-2">•</span>Validez ante terceros (bancos, estado).</li>
                    <li className="flex items-start"><span className="mr-2">•</span>Máxima independencia y objetividad.</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Types;