import React from 'react';
import { useAccessibilityStore } from '../../store/accessibilityStore';
import { ComplianceScore } from './ComplianceScore';
import { PrincipleBreakdown } from './PrincipleBreakdown';
import { ViolationsTable } from './ViolationsTable';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ErrorMessage } from '../common/ErrorMessage';

export function ResultsDashboard() {
  const { currentReport, isLoading, error } = useAccessibilityStore();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!currentReport) {
    return (
      <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
        <p className="text-blue-700 dark:text-blue-300 text-lg">
          Enter a URL or upload a document to begin the accessibility analysis
        </p>
      </div>
    );
  }

  // Default to 'A' level if summary or levelBreakdown is not available
  const wcagLevel = currentReport.summary?.levelBreakdown?.AA > 0 ? 'AA' : 'A';

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComplianceScore 
          score={currentReport.score} 
          level={wcagLevel}
        />
        {currentReport.summary?.principleBreakdown && (
          <PrincipleBreakdown breakdown={currentReport.summary.principleBreakdown} />
        )}
      </div>
      <ViolationsTable violations={currentReport.violations} />
    </div>
  );
}