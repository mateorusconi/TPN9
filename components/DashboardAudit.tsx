import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';

const PIE_DATA = [
  { name: 'Críticos', value: 5, color: '#ef4444' }, // Red
  { name: 'Altos', value: 12, color: '#f97316' },   // Orange
  { name: 'Medios', value: 25, color: '#eab308' },  // Yellow
  { name: 'Bajos', value: 45, color: '#22c55e' },   // Green
];

const BAR_DATA = [
  { name: 'Seguridad', hallazgos: 12 },
  { name: 'Infra', hallazgos: 8 },
  { name: 'Desarrollo', hallazgos: 15 },
  { name: 'RRHH', hallazgos: 3 },
  { name: 'Finanzas', hallazgos: 5 },
];

const INITIAL_LINE_DATA = [
  { name: 'Mes 1', cumplimiento: 65 },
  { name: 'Mes 2', cumplimiento: 68 },
  { name: 'Mes 3', cumplimiento: 75 },
  { name: 'Mes 4', cumplimiento: 72 },
  { name: 'Mes 5', cumplimiento: 85 },
];

const DashboardAudit: React.FC = () => {
  const [lineData, setLineData] = useState(INITIAL_LINE_DATA);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setLineData(prev => {
        const lastMonth = parseInt(prev[prev.length - 1].name.split(' ')[1]);
        const newValue = Math.min(100, Math.max(50, prev[prev.length - 1].cumplimiento + (Math.random() * 10 - 4)));
        const newEntry = { name: `Mes ${lastMonth + 1}`, cumplimiento: Math.round(newValue) };
        const newData = [...prev.slice(1), newEntry];
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="p-10 text-center">Cargando Dashboard...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Findings Distribution */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border p-4 rounded-xl shadow-sm"
      >
        <h3 className="text-lg font-semibold mb-4 text-center">Gravedad de Hallazgos</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={PIE_DATA}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {PIE_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
                itemStyle={{ color: 'hsl(var(--foreground))' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-4 text-xs mt-2">
            {PIE_DATA.map(d => (
                <div key={d.name} className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }}></div>
                    <span>{d.name}</span>
                </div>
            ))}
        </div>
      </motion.div>

      {/* Audit Areas */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border p-4 rounded-xl shadow-sm"
      >
        <h3 className="text-lg font-semibold mb-4 text-center">Hallazgos por Área</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={BAR_DATA}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" fontSize={12} stroke="hsl(var(--muted-foreground))" />
              <YAxis fontSize={12} stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                 cursor={{ fill: 'hsl(var(--accent))' }}
                 contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
              />
              <Bar dataKey="hallazgos" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Compliance Evolution */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="md:col-span-2 bg-card border border-border p-4 rounded-xl shadow-sm"
      >
        <div className="flex justify-between items-center mb-4 px-4">
            <h3 className="text-lg font-semibold">Cumplimiento Normativo (Tiempo Real)</h3>
            <span className="text-xs text-primary animate-pulse flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Live Update
            </span>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" fontSize={12} stroke="hsl(var(--muted-foreground))" />
              <YAxis domain={[0, 100]} fontSize={12} stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
              />
              <Line type="monotone" dataKey="cumplimiento" stroke="hsl(var(--ring))" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardAudit;