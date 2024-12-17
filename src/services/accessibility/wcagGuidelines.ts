import type { WCAGGuideline } from '../../types/accessibility';

export const WCAG_GUIDELINES: WCAGGuideline[] = [
  {
    id: '1.1.1',
    name: 'Non-text Content',
    level: 'A',
    principle: 'perceivable',
    description: 'All non-text content has a text alternative that serves the equivalent purpose.',
    helpUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content'
  },
  {
    id: '1.3.1',
    name: 'Info and Relationships',
    level: 'A',
    principle: 'perceivable',
    description: 'Information, structure, and relationships conveyed through presentation can be programmatically determined.',
    helpUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships'
  },
  {
    id: '1.4.3',
    name: 'Contrast (Minimum)',
    level: 'AA',
    principle: 'perceivable',
    description: 'Text has sufficient color contrast against its background.',
    helpUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum'
  }
  // Agregar más guías WCAG según sea necesario
];