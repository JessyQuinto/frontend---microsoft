import type { WCAGGuideline, WCAGLevel, WCAGPrinciple } from './types';

export const WCAG_PRINCIPLES: Record<string, WCAGPrinciple> = {
  perceivable: {
    id: '1',
    name: 'Perceivable',
    description: 'Information and user interface components must be presentable to users in ways they can perceive.'
  },
  operable: {
    id: '2',
    name: 'Operable',
    description: 'User interface components and navigation must be operable.'
  },
  understandable: {
    id: '3',
    name: 'Understandable',
    description: 'Information and the operation of user interface must be understandable.'
  },
  robust: {
    id: '4',
    name: 'Robust',
    description: 'Content must be robust enough that it can be interpreted by a wide variety of user agents.'
  }
};

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
  },
  {
    id: '2.1.1',
    name: 'Keyboard',
    level: 'A',
    principle: 'operable',
    description: 'All functionality is available from a keyboard.',
    helpUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard'
  },
  {
    id: '2.4.3',
    name: 'Focus Order',
    level: 'A',
    principle: 'operable',
    description: 'Users can navigate sequentially through content and form controls in a meaningful order.',
    helpUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-order'
  },
  {
    id: '3.1.1',
    name: 'Language of Page',
    level: 'A',
    principle: 'understandable',
    description: 'The default human language of each web page can be programmatically determined.',
    helpUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-page'
  },
  {
    id: '4.1.1',
    name: 'Parsing',
    level: 'A',
    principle: 'robust',
    description: 'Content implemented using markup languages has complete start and end tags.',
    helpUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/parsing'
  },
  {
    id: '4.1.2',
    name: 'Name, Role, Value',
    level: 'A',
    principle: 'robust',
    description: 'For all user interface components, the name and role can be programmatically determined.',
    helpUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value'
  }
];

export const getGuidelinesByLevel = (level: WCAGLevel) => 
  WCAG_GUIDELINES.filter(guideline => guideline.level === level);

export const getGuidelinesByPrinciple = (principleId: string) =>
  WCAG_GUIDELINES.filter(guideline => guideline.principle === principleId);

export const getGuidelineById = (id: string) =>
  WCAG_GUIDELINES.find(guideline => guideline.id === id);