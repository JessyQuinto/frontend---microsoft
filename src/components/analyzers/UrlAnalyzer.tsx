import React from 'react';
import { Globe, AlertCircle } from 'lucide-react';
import { useAccessibilityStore } from '../../store/accessibilityStore';
import { LoadingSpinner } from '../common/LoadingSpinner';

export function UrlAnalyzer() {
  const { isLoading, error, auditUrl } = useAccessibilityStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const url = formData.get('url') as string;
    if (url) {
      await auditUrl(url);
    }
  };

  return (
    <div className="card p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Globe className="w-6 h-6 text-light-accent dark:text-dark-accent" />
        <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
          Analyze Website Accessibility
        </h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label 
            htmlFor="url" 
            className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2"
          >
            Website URL
          </label>
          <div className="relative">
            <input
              type="url"
              id="url"
              name="url"
              className="input-primary pl-10"
              placeholder="https://example.com"
              required
              pattern="https?://.*"
              disabled={isLoading}
            />
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-light-text-tertiary dark:text-dark-text-tertiary" />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <LoadingSpinner />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Globe className="w-4 h-4" />
              <span>Analyze Accessibility</span>
            </>
          )}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                Error
              </h3>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                {error}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}