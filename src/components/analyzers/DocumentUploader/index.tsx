import React from 'react';
import { FileUp } from 'lucide-react';
import { DropZone } from './DropZone';
import { useAccessibilityStore } from '../../../store/accessibilityStore';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import { ErrorMessage } from '../../common/ErrorMessage';

export function DocumentUploader() {
  const { isLoading, error } = useAccessibilityStore();

  return (
    <div className="card p-6">
      <div className="flex items-center space-x-3 mb-6">
        <FileUp className="w-6 h-6 text-light-accent dark:text-dark-accent" />
        <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
          Upload Document
        </h2>
      </div>

      <DropZone />

      {isLoading && <LoadingSpinner message="Analyzing document..." />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}