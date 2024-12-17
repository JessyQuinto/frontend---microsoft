import type { WCAGViolation } from '../../services/accessibility/wcag/types';
import { AlertTriangle, AlertCircle, AlertOctagon } from 'lucide-react';

export const impactIcons = {
  critical: AlertOctagon,
  serious: AlertTriangle,
  moderate: AlertCircle,
  minor: AlertCircle
} as const;

export const impactStyles = {
  critical: 'border-red-500 bg-red-50',
  serious: 'border-orange-500 bg-orange-50',
  moderate: 'border-yellow-500 bg-yellow-50',
  minor: 'border-blue-500 bg-blue-50'
} as const;

export function getImpactInfo(impact: WCAGViolation['impact']) {
  return {
    icon: impactIcons[impact],
    style: impactStyles[impact]
  };
}