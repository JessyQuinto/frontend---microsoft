import { CheckCircle, AlertTriangle, Info } from 'lucide-react';
import type { WCAGLevel } from '../../services/accessibility/wcag/types';

interface ScoreDescription {
  color: string;
  icon: typeof CheckCircle;
  description: string;
}

export function getScoreDescription(score: number): ScoreDescription {
  if (score >= 90) {
    return {
      color: 'text-green-600',
      icon: CheckCircle,
      description: 'Excelente accesibilidad. El sitio cumple con la mayoría de las pautas WCAG y es accesible para casi todos los usuarios.'
    };
  }
  
  if (score >= 70) {
    return {
      color: 'text-yellow-600',
      icon: Info,
      description: 'Buena accesibilidad con algunas áreas de mejora. Se recomienda revisar las violaciones identificadas para mejorar la experiencia de usuario.'
    };
  }
  
  return {
    color: 'text-red-600',
    icon: AlertTriangle,
    description: 'Se requiere atención inmediata. Existen problemas críticos de accesibilidad que pueden impedir que algunos usuarios accedan al contenido.'
  };
}

export function getLevelDescription(level: WCAGLevel): string {
  switch (level) {
    case 'A':
      return 'Nivel básico de accesibilidad. Cumple con los requisitos mínimos necesarios.';
    case 'AA':
      return 'Nivel intermedio de accesibilidad. Cumple con los estándares más comunes y es el objetivo recomendado.';
    case 'AAA':
      return 'Nivel máximo de accesibilidad. Proporciona el más alto nivel de soporte para usuarios con discapacidades.';
  }
}