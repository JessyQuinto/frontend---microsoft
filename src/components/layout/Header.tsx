import React from 'react';
import { Accessibility } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

export function Header() {
  return (
    <header className="bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Accessibility className="h-8 w-8 text-light-accent dark:text-dark-accent" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-light-text dark:text-dark-text">
                Accessibility Audit Tool
              </h1>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                For Government Websites & Apps
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}