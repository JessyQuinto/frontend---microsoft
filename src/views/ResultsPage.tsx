import React from 'react';
import { ResultsDashboard } from '../components/results/ResultsDashboard';

export function ResultsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-light-text dark:text-dark-text">
            Analysis Results
          </h1>
          <p className="mt-2 text-light-text-secondary dark:text-dark-text-secondary">
            Detailed accessibility audit findings and recommendations
          </p>
        </div>
        <ResultsDashboard />
      </div>
    </div>
  );
}