import React from 'react';
import { Shield } from 'lucide-react';
import { getScoreDescription } from '../../utils/accessibility/scoreUtils';
import type { WCAGLevel } from '../../services/accessibility/wcag/types';

interface ScoreCardProps {
  score: number;
  level: WCAGLevel;
}

export function ScoreCard({ score, level }: ScoreCardProps) {
  const { color, icon: Icon, description } = getScoreDescription(score);
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Puntuación de Accesibilidad</h2>
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-blue-600" />
          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            Nivel WCAG {level}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className={`text-5xl font-bold ${color}`}>
          {score}
          <span className="text-2xl text-gray-400 ml-1">/100</span>
        </div>
      </div>

      <div className={`p-4 rounded-lg ${color.replace('text', 'bg')}/10`}>
        <div className="flex items-start space-x-3">
          <Icon className={`w-5 h-5 mt-0.5 ${color}`} />
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}