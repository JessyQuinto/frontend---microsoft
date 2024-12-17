import type { LighthouseConfig } from '../types';

export const LIGHTHOUSE_CONFIG: LighthouseConfig = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['accessibility'],
    formFactor: 'desktop',
    emulatedFormFactor: 'desktop',
    throttling: { cpuSlowdownMultiplier: 1 }
  },
  audits: [
    'accessibility/**',
    'aria-*',
    'html-has-lang',
    'html-lang-valid',
    'image-alt',
    'label',
    'link-name',
    'list',
    'tabindex',
    'video-caption',
    'valid-lang',
    'color-contrast',
    'document-title',
    'meta-viewport',
    'meta-description',
    'heading-order',
    'duplicate-id-active',
    'duplicate-id-aria',
    'form-field-multiple-labels',
    'frame-title',
    'input-image-alt',
    'landmark-one-main',
    'landmark-complementary-is-top-level',
    'meta-refresh',
    'object-alt',
    'td-headers-attr',
    'th-has-data-cells',
    'valid-lang',
    'video-description'
  ]
};