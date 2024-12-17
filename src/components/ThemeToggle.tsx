import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-light-bg-secondary dark:bg-dark-bg-tertiary
                text-light-text-secondary dark:text-dark-text-secondary
                hover:bg-light-bg-tertiary dark:hover:bg-dark-bg
                focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent
                transition-all duration-200"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}