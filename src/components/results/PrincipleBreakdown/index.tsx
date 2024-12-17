import React from 'react';
import type { WCAGPrinciple } from '../../../types/wcag';
import { PrincipleCard } from './PrincipleCard';

interface PrincipleBreakdownProps {
  breakdown: WCAGPrinciple[];
}

export function PrincipleBreakdown({ breakdown }: PrincipleBreakdownProps) {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">
        WCAG Principles
      </h2>
      <div className="space-y-6">
        {breakdown.map((principle) => (
          <PrincipleCard 
            key={principle.principle} 
            principle={principle} 
          />
        ))}
      </div>
    </div>
  );
}