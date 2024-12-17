import React from 'react';
import { UrlAnalyzer } from '../components/analyzers/UrlAnalyzer';
import { DocumentUploader } from '../components/analyzers/DocumentUploader';
import { ResultsDashboard } from '../components/results/ResultsDashboard';

export function HomePage() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="animate-fade-in">
            <UrlAnalyzer />
          </div>
          <div className="animate-fade-in [animation-delay:200ms]">
            <DocumentUploader />
          </div>
        </div>
        <div className="animate-fade-in [animation-delay:400ms]">
          <ResultsDashboard />
        </div>
      </div>
    </div>
  );
}