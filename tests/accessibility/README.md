# Accessibility Testing Suite

This directory contains automated accessibility testing tools using WebdriverIO and Axe-core.

## Usage

Run the accessibility tests by providing a URL:

```bash
npm run test:accessibility -- https://example.com
```

## Configuration

- `axeConfig.js`: Configure Axe-core rules and tags
- `reportGenerator.js`: Customize report generation and output format

## Reports

Reports are saved in the `accessibility-reports` directory with the following format:
- JSON report with detailed violations
- Console summary output

## Rules

The test suite checks for WCAG 2.1 Level AA compliance, including:
- WCAG 2.0 Level A
- WCAG 2.0 Level AA
- WCAG 2.1 Level AA

## Adding Custom Rules

Modify `axeConfig.js` to:
- Add/remove WCAG tags
- Enable/disable specific rules
- Customize rule configurations