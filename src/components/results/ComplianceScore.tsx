import React from 'react';
import { Shield } from 'lucide-react';
import { getScoreDescription } from '../../utils/accessibility/scoreUtils';
import type { WCAGLevel } from '../../types/accessibility';

interface ComplianceScoreProps {
  score: number;
  level: WCAGLevel;
}

export function ComplianceScore({ score, level }: ComplianceScoreProps) {
  const { color, icon: Icon, description } = getScoreDescription(score);
  
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
          WCAG Compliance Score
        </h2>
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-light-accent dark:text-dark-accent" />
          <span className="px-3 py-1 bg-light-bg-secondary dark:bg-dark-bg-tertiary text-light-accent dark:text-dark-accent rounded-full text-sm font-medium">
            WCAG {level}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className={`text-5xl font-bold ${color}`}>
          {score}
          <span className="text-2xl text-light-text-tertiary dark:text-dark-text-tertiary ml-1">
            /100
          </span>
        </div>
      </div>

      <div className={`p-4 rounded-lg ${color.replace('text', 'bg')}/10`}>
        <div className="flex items-start space-x-3">
          <Icon className={`w-5 h-5 mt-0.5 ${color}`} />
          <p className="text-light-text dark:text-dark-text">{description}</p>
        </div>
      </div>
    </div>
  );
}