import React from 'react';
import { Shield, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import type { WCAGLevel } from '../../services/accessibility/wcag/types';

interface ScoreCardProps {
  score: number;
  level: WCAGLevel;
}

function getScoreInfo(score: number) {
  if (score >= 90) {
    return {
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/10',
      borderColor: 'border-green-200 dark:border-green-800',
      icon: CheckCircle,
      description: 'Excellent WCAG compliance. The site meets most accessibility guidelines.'
    };
  }
  
  if (score >= 70) {
    return {
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/10',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      icon: Info,
      description: 'Moderate WCAG compliance. Some accessibility improvements needed.'
    };
  }
  
  return {
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-900/10',
    borderColor: 'border-red-200 dark:border-red-800',
    icon: AlertTriangle,
    description: 'Low WCAG compliance. Critical accessibility issues need attention.'
  };
}

export function ScoreCard({ score, level }: ScoreCardProps) {
  const { color, bgColor, borderColor, icon: Icon, description } = getScoreInfo(score);
  
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

      <div className={`p-4 rounded-lg border ${bgColor} ${borderColor}`}>
        <div className="flex items-start space-x-3">
          <Icon className={`w-5 h-5 mt-0.5 ${color}`} />
          <p className="text-light-text dark:text-dark-text">{description}</p>
        </div>
      </div>
    </div>
  );
}