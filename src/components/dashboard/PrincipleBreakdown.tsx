import React from 'react';
import type { AccessibilitySummary } from '../../types/accessibility';

interface PrincipleBreakdownProps {
  breakdown: AccessibilitySummary['principleBreakdown'];
}

export function PrincipleBreakdown({ breakdown }: PrincipleBreakdownProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        WCAG Principles
      </h2>
      <div className="space-y-6">
        {breakdown.map(({ principle, violations, description }) => (
          <div 
            key={principle} 
            className="border-b border-gray-100 pb-4 last:border-0"
            role="region"
            aria-label={`${principle} principle breakdown`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-800">{principle}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                violations > 0 ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
              }`}>
                {violations} {violations === 1 ? 'issue' : 'issues'}
              </span>
            </div>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}