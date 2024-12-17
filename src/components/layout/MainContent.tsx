import React from 'react';
import { UrlAnalyzer } from '../analyzers/UrlAnalyzer';
import { DocumentUploader } from '../analyzers/DocumentUploader';
import { AccessibilityDashboard } from '../dashboard/AccessibilityDashboard';

export function MainContent() {
  return (
    <main className="flex-grow bg-light-bg-secondary dark:bg-dark-bg-secondary transition-all duration-200">
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
          <AccessibilityDashboard />
        </div>
      </div>
    </main>
  );
}