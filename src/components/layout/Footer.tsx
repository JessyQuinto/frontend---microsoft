import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-bg-secondary dark:bg-dark-bg-secondary border-t border-light-border dark:border-dark-border transition-colors mt-auto py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-light-text-secondary dark:text-dark-text-secondary">
          <p>© {currentYear} All rights reserved. Grupo #8 Hackbox Microsoft</p>
        </div>
      </div>
    </footer>
  );
}