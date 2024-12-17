import React from 'react';
import { AlertTriangle, AlertCircle, AlertOctagon, ExternalLink } from 'lucide-react';
import type { WCAGViolation } from '../../types/accessibility';

interface ViolationsListProps {
  violations: WCAGViolation[];
}

const impactStyles = {
  critical: {
    border: 'border-red-500 dark:border-red-800',
    bg: 'bg-red-50 dark:bg-red-900/10',
    text: 'text-red-800 dark:text-red-200',
    icon: AlertOctagon
  },
  serious: {
    border: 'border-orange-500 dark:border-orange-800',
    bg: 'bg-orange-50 dark:bg-orange-900/10',
    text: 'text-orange-800 dark:text-orange-200',
    icon: AlertTriangle
  },
  moderate: {
    border: 'border-yellow-500 dark:border-yellow-800',
    bg: 'bg-yellow-50 dark:bg-yellow-900/10',
    text: 'text-yellow-800 dark:text-yellow-200',
    icon: AlertCircle
  },
  minor: {
    border: 'border-blue-500 dark:border-blue-800',
    bg: 'bg-blue-50 dark:bg-blue-900/10',
    text: 'text-blue-800 dark:text-blue-200',
    icon: AlertCircle
  }
} as const;

function ViolationCard({ violation }: { violation: WCAGViolation }) {
  const style = impactStyles[violation.impact];
  const Icon = style.icon;

  return (
    <div className={`border-l-4 rounded-lg p-4 ${style.border} ${style.bg}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <Icon className={`w-5 h-5 ${style.text}`} />
          <h3 className={`font-medium ${style.text}`}>
            {violation.guidelineId}: {violation.impact}
          </h3>
        </div>
        {violation.helpUrl && (
          <a
            href={violation.helpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-accent hover:text-light-accent-hover dark:text-dark-accent dark:hover:text-dark-accent-hover flex items-center space-x-1"
          >
            <span className="text-sm">Learn more</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
      <p className="mt-2 text-light-text-secondary dark:text-dark-text-secondary">
        {violation.description}
      </p>
      <div className="mt-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
        <strong>Recommendation:</strong> {violation.recommendation}
      </div>
      {violation.element && (
        <div className="mt-2 text-sm font-mono p-2 rounded bg-light-bg-secondary dark:bg-dark-bg-tertiary border border-light-border dark:border-dark-border">
          <strong>Element:</strong> {violation.element}
        </div>
      )}
    </div>
  );
}

export function ViolationsList({ violations }: ViolationsListProps) {
  if (violations.length === 0) {
    return (
      <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
        <p className="text-green-700 dark:text-green-300 font-medium">
          No accessibility violations found!
        </p>
        <p className="mt-2 text-green-600 dark:text-green-400">
          The site meets the analyzed WCAG guidelines. Continue monitoring and conducting periodic audits.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
        Accessibility Issues ({violations.length})
      </h2>
      <div className="space-y-4">
        {violations.map((violation, index) => (
          <ViolationCard 
            key={`${violation.guidelineId}-${index}`} 
            violation={violation} 
          />
        ))}
      </div>
    </div>
  );
}