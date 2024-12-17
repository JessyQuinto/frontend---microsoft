import React from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';
import type { AccessibilityReport } from '../types/accessibility';

interface ResultCardProps {
  report: AccessibilityReport;
}

function getScoreColor(score: number) {
  if (score >= 90) return 'text-green-700 bg-green-50';
  if (score >= 70) return 'text-yellow-700 bg-yellow-50';
  return 'text-red-700 bg-red-50';
}

function getScoreIcon(score: number) {
  if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-600" />;
  if (score >= 70) return <Info className="w-5 h-5 text-yellow-600" />;
  return <AlertTriangle className="w-5 h-5 text-red-600" />;
}

export function ResultCard({ report }: ResultCardProps) {
  const scoreColorClass = getScoreColor(report.score);
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Accessibility Score</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {getScoreIcon(report.score)}
            <span className="text-lg font-medium text-gray-700">Overall Score</span>
          </div>
          <div className={`px-4 py-2 rounded-full font-semibold ${scoreColorClass}`}>
            {report.score}/100
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">WCAG Compliance Level</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Level AA
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Critical Issues</span>
            <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium">
              {report.violations.filter(v => v.impact === 'critical').length}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Serious Issues</span>
            <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
              {report.violations.filter(v => v.impact === 'serious').length}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Moderate Issues</span>
            <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium">
              {report.violations.filter(v => v.impact === 'moderate').length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}