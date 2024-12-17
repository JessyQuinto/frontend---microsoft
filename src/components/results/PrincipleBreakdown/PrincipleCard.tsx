import React from 'react';
import type { WCAGPrinciple } from '../../../types/wcag';

interface PrincipleCardProps {
  principle: WCAGPrinciple;
}

export function PrincipleCard({ principle }: PrincipleCardProps) {
  return (
    <div 
      className="border-b border-light-border dark:border-dark-border pb-4 last:border-0"
      role="region"
      aria-label={`${principle.principle} principle breakdown`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-light-text dark:text-dark-text">
          {principle.principle}
        </h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          principle.violations > 0 
            ? 'bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-300' 
            : 'bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-300'
        }`}>
          {principle.violations} {principle.violations === 1 ? 'issue' : 'issues'}
        </span>
      </div>
      <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
        {principle.description}
      </p>
    </div>
  );
}