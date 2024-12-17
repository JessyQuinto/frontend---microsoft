import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div 
      className="flex flex-col items-center justify-center py-12"
      role="status"
      aria-label="Loading analysis results"
    >
      <Loader2 className="w-12 h-12 text-blue-600 animate-spin" aria-hidden="true" />
      <p className="mt-4 text-gray-600">Analyzing website...</p>
    </div>
  );
}