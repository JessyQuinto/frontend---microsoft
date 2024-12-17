import React from 'react';
import type { WCAGViolation } from '../../../types/accessibility';
import { ViolationRow } from './ViolationRow';

interface ViolationsTableProps {
  violations: WCAGViolation[];
}

export function ViolationsTable({ violations }: ViolationsTableProps) {
  if (violations.length === 0) {
    return (
      <div 
        className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg"
        role="status"
        aria-label="No accessibility violations found"
      >
        <p className="text-green-700 dark:text-green-300">
          No accessibility violations found!
        </p>
        <p className="text-green-600 dark:text-green-400 mt-2">
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
      <div 
        className="space-y-4"
        role="list"
        aria-label="List of accessibility violations"
      >
        {violations.map((violation, index) => (
          <ViolationRow 
            key={`${violation.guidelineId}-${index}`} 
            violation={violation} 
          />
        ))}
      </div>
    </div>
  );
}