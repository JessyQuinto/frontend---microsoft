import React from 'react';
import { Accessibility } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <Accessibility className="w-12 h-12 text-blue-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Web Accessibility Analyzer
      </h1>
      <p className="text-gray-600">
        Ensure your website meets WCAG guidelines and accessibility standards
      </p>
      <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-50 text-sm text-blue-700 rounded-full">
        <span className="font-medium">WCAG 2.1 Level AA Compliant</span>
      </div>
    </div>
  );
}