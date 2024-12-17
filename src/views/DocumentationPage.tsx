import React from 'react';
import { Book, Code, Palette, Shield } from 'lucide-react';

export function DocumentationPage() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-light-text dark:text-dark-text mb-4">
              Documentation
            </h1>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              Comprehensive guide to the Accessibility Audit Tool
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Overview Section */}
            <section className="card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Book className="w-6 h-6 text-light-accent dark:text-dark-accent" />
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-text">
                  Overview
                </h2>
              </div>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                The Accessibility Audit Tool is designed to help government websites and applications 
                meet WCAG 2.1 accessibility standards. It provides comprehensive analysis and 
                actionable recommendations for improving digital accessibility.
              </p>
            </section>

            {/* Features Section */}
            <section className="card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-light-accent dark:text-dark-accent" />
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-text">
                  Key Features
                </h2>
              </div>
              <ul className="space-y-4 text-light-text-secondary dark:text-dark-text-secondary">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-light-accent dark:bg-dark-accent mr-3" />
                  <span>WCAG 2.1 Level AA compliance checking</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-light-accent dark:bg-dark-accent mr-3" />
                  <span>Real-time accessibility score calculation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-light-accent dark:bg-dark-accent mr-3" />
                  <span>Detailed violation reporting with recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-light-accent dark:bg-dark-accent mr-3" />
                  <span>Document accessibility analysis (PDF, Word)</span>
                </li>
              </ul>
            </section>

            {/* Technical Details */}
            <section className="card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Code className="w-6 h-6 text-light-accent dark:text-dark-accent" />
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-text">
                  Technical Details
                </h2>
              </div>
              <div className="space-y-4 text-light-text-secondary dark:text-dark-text-secondary">
                <p>
                  Built with modern web technologies:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>React with TypeScript for type safety</li>
                  <li>Tailwind CSS for responsive design</li>
                  <li>Azure Cognitive Services for document analysis</li>
                  <li>Zustand for state management</li>
                </ul>
              </div>
            </section>

            {/* Theme Support */}
            <section className="card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Palette className="w-6 h-6 text-light-accent dark:text-dark-accent" />
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-text">
                  Theme Support
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-light-text-secondary dark:text-dark-text-secondary">
                  The application supports both light and dark modes, with carefully selected color 
                  palettes that maintain WCAG compliance for contrast ratios.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg">
                    <h3 className="font-medium text-light-text dark:text-dark-text mb-2">
                      Light Mode
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-light-text-secondary">Background</span>
                        <span className="text-sm font-mono text-light-text-secondary">#ffffff</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-light-text-secondary">Text</span>
                        <span className="text-sm font-mono text-light-text-secondary">#0f172a</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-light-text-secondary">Accent</span>
                        <span className="text-sm font-mono text-light-text-secondary">#3b82f6</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg">
                    <h3 className="font-medium text-light-text dark:text-dark-text mb-2">
                      Dark Mode
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-light-text-secondary">Background</span>
                        <span className="text-sm font-mono text-light-text-secondary">#0f172a</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-light-text-secondary">Text</span>
                        <span className="text-sm font-mono text-light-text-secondary">#f8fafc</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-light-text-secondary">Accent</span>
                        <span className="text-sm font-mono text-light-text-secondary">#60a5fa</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}