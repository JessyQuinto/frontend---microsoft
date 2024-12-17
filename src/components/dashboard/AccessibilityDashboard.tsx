import React from 'react';
import { useAccessibilityStore } from '../../store/accessibilityStore';
import { ScoreCard } from './ScoreCard';
import { PrincipleBreakdown } from './PrincipleBreakdown';
import { ViolationsList } from './ViolationsList';
import { LoadingSpinner } from '../common/LoadingSpinner';

export function AccessibilityDashboard() {
  const { currentReport, isLoading, error } = useAccessibilityStore();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  if (!currentReport) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-blue-700 text-lg">
          Enter a URL or upload a document to begin the accessibility analysis
        </p>
      </div>
    );
  }

  // Determine WCAG level based on violations
  const wcagLevel = currentReport.summary?.levelBreakdown?.AA > 0 ? 'AA' : 'A';

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ScoreCard 
          score={currentReport.score} 
          level={wcagLevel}
        />
        {currentReport.summary?.principleBreakdown && (
          <PrincipleBreakdown breakdown={currentReport.summary.principleBreakdown} />
        )}
      </div>

      <ViolationsList violations={currentReport.violations} />
    </div>
  );
}