import React from 'react';
import { motion } from 'framer-motion';
import { Building2, AlertTriangle, CheckSquare, TrendingUp } from 'lucide-react';

const exampleCase = {
  title: "Caso de Estudio: Banco Nacional Financiero",
  type: "Auditoría Integral de Seguridad y Cumplimiento",
  context: "La entidad bancaria detectó inconsistencias en los registros de transacciones nocturnas y lentitud en la base de datos core.",
  timeline: [
    { phase: "Semana 1", action: "Reunión de inicio y mapeo de procesos críticos." },
    { phase: "Semana 2", action: "Análisis de logs y entrevistas con DBAs." },
    { phase: "Semana 3", action: "Detección de accesos no autorizados mediante cuentas de servicio obsoletas." },
    { phase: "Semana 4", action: "Pruebas de penetración internas." },
  ],
  findings: [
    "Cuentas genéricas con permisos de administrador.",
    "Falta de cifrado en backups de la base de datos.",
    "Ausencia de política de rotación de contraseñas en servidores legacy."
  ],
  results: [
    "Implementación de bóveda de contraseñas (PAM).",
    "Cifrado AES-256 aplicado a backups.",
    "Reducción del riesgo de fuga de datos en un 85%."
  ]
};

const IntegratedAuditExample: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto bg-card border border-border rounded-xl overflow-hidden shadow-lg">
      <div className="bg-primary/10 p-6 border-b border-border flex items-center gap-4">
        <div className="p-3 bg-background rounded-full border border-border">
          <Building2 className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{exampleCase.title}</h2>
          <p className="text-muted-foreground">{exampleCase.type}</p>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            Hallazgos Críticos
          </h3>
          <ul className="space-y-2 mb-6">
            {exampleCase.findings.map((finding, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-start gap-2 p-2 bg-destructive/10 rounded-md border border-destructive/20 text-sm"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0" />
                {finding}
              </motion.li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            Resultados Cuantificables
          </h3>
          <ul className="space-y-2">
            {exampleCase.results.map((res, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.2) }}
                className="flex items-start gap-2 p-2 bg-green-500/10 rounded-md border border-green-500/20 text-sm"
              >
                <CheckSquare className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                {res}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="relative border-l-2 border-border pl-6 ml-3 md:ml-0">
          <h3 className="text-lg font-semibold mb-6">Línea de Tiempo</h3>
          {exampleCase.timeline.map((item, index) => (
            <div key={index} className="mb-8 relative group">
              <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors" />
              <h4 className="font-bold text-primary text-sm">{item.phase}</h4>
              <p className="text-muted-foreground mt-1 text-sm">{item.action}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegratedAuditExample;