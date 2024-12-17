import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div 
      className={`
        bg-light-bg dark:bg-dark-bg-secondary
        border border-light-border dark:border-dark-border
        rounded-lg shadow-light dark:shadow-dark
        transition-colors duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
}