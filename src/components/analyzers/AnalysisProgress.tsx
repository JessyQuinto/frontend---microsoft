import React from 'react';
import { useAccessibilityStore } from '../../store/accessibilityStore';
import { LoadingSpinner } from '../common/LoadingSpinner';

export function AnalysisProgress() {
  const { isLoading, currentReport } = useAccessibilityStore();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-light-bg dark:bg-dark-bg-secondary p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <LoadingSpinner 
          message={`Analyzing ${currentReport?.documentType || 'content'}...`} 
        />
      </div>
    </div>
  );
}