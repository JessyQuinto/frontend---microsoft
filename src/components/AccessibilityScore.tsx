import React from 'react';

interface AccessibilityScoreProps {
  score: number;
}

export function AccessibilityScore({ score }: AccessibilityScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Accessibility Score</h2>
      <div className="flex items-center justify-center">
        <div className={`text-4xl font-bold ${getScoreColor(score)}`}>
          {score}
        </div>
        <div className="text-2xl text-gray-500 ml-1">/100</div>
      </div>
    </div>
  );
}