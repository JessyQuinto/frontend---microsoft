import type { WCAGGuideline } from '../../types/accessibility';

export const WCAG_GUIDELINES: WCAGGuideline[] = [
  {
    id: '1.1.1',
    name: 'Non-text Content',
    level: 'A',
    description: 'All non-text content has a text alternative that serves the equivalent purpose.'
  },
  {
    id: '1.4.3',
    name: 'Contrast (Minimum)',
    level: 'AA',
    description: 'Text has sufficient color contrast against its background.'
  },
  // Add more WCAG guidelines as needed
];