import AxeBuilder from '@axe-core/webdriverio';
import { axeConfig } from './config/axeConfig.js';
import { AccessibilityReportGenerator } from './utils/reportGenerator.js';

describe('Accessibility Audit', () => {
    let url;
    const reportGenerator = new AccessibilityReportGenerator();

    before(() => {
        // Get URL from command line arguments
        url = process.argv[process.argv.length - 1];
        
        // Validate URL
        try {
            new URL(url);
        } catch (error) {
            throw new Error('Please provide a valid URL as the last argument');
        }
    });

    it('should analyze accessibility compliance', async () => {
        // Navigate to the URL
        await browser.url(url);
        
        // Wait for page to be fully loaded
        await browser.waitUntil(
            async () => await browser.execute(() => document.readyState === 'complete'),
            {
                timeout: 10000,
                timeoutMsg: 'Page failed to load completely'
            }
        );

        // Initialize AxeBuilder with configuration
        const builder = new AxeBuilder({ client: browser })
            .withTags(axeConfig.tags)
            .configure(axeConfig.rules);

        // Run analysis
        const results = await builder.analyze();
        
        // Generate and save report
        await reportGenerator.generateReport(url, results);

        // Assert no critical violations
        const criticalViolations = results.violations.filter(v => v.impact === 'critical');
        expect(criticalViolations).toHaveLength(
            0,
            `Found ${criticalViolations.length} critical accessibility violations`
        );
    });
});