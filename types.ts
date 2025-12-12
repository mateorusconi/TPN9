import { LucideIcon } from 'lucide-react';

export interface AuditType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface PlanningStep {
  id: string;
  title: string;
  content: string;
  tasks: string[];
}

export interface PolicyItem {
  id: string;
  label: string;
  impact: number; // 1-20
}

export interface DashboardData {
  name: string;
  value: number;
}