import React from 'react';
import DashboardAudit from '../components/DashboardAudit';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-border pb-4">
        <div>
            <h1 className="text-3xl font-bold">Dashboard de Auditoría</h1>
            <p className="text-muted-foreground">Vista general del estado de cumplimiento y hallazgos.</p>
        </div>
        <div className="mt-4 md:mt-0 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-bold shadow-md">
            ESTADO: EN CURSO
        </div>
      </div>
      <DashboardAudit />
    </div>
  );
};

export default Dashboard;