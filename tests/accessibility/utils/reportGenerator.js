import fs from 'fs/promises';
import path from 'path';

export class AccessibilityReportGenerator {
    constructor(baseDir = 'accessibility-reports') {
        this.baseDir = baseDir;
        this.timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    }

    async generateReport(url, results) {
        const report = {
            url,
            timestamp: new Date().toISOString(),
            summary: {
                total: results.violations.length,
                critical: results.violations.filter(v => v.impact === 'critical').length,
                serious: results.violations.filter(v => v.impact === 'serious').length,
                moderate: results.violations.filter(v => v.impact === 'moderate').length,
                minor: results.violations.filter(v => v.impact === 'minor').length
            },
            violations: results.violations.map(violation => ({
                id: violation.id,
                impact: violation.impact,
                description: violation.description,
                help: violation.help,
                helpUrl: violation.helpUrl,
                nodes: violation.nodes.map(node => ({
                    html: node.html,
                    target: node.target,
                    failureSummary: node.failureSummary
                }))
            }))
        };

        await this.saveReport(report);
        this.printSummary(report);
    }

    async saveReport(report) {
        try {
            await fs.mkdir(this.baseDir, { recursive: true });
            
            const fileName = `accessibility-report-${this.timestamp}.json`;
            const filePath = path.join(this.baseDir, fileName);
            
            await fs.writeFile(
                filePath,
                JSON.stringify(report, null, 2),
                'utf8'
            );

            console.log(`\nReport saved to: ${filePath}`);
        } catch (error) {
            console.error('Error saving report:', error);
        }
    }

    printSummary(report) {
        console.log('\n=== Accessibility Audit Summary ===');
        console.log(`URL: ${report.url}`);
        console.log(`Timestamp: ${report.timestamp}`);
        console.log('\nViolations found:');
        console.log(`- Total: ${report.summary.total}`);
        console.log(`- Critical: ${report.summary.critical}`);
        console.log(`- Serious: ${report.summary.serious}`);
        console.log(`- Moderate: ${report.summary.moderate}`);
        console.log(`- Minor: ${report.summary.minor}`);
        
        if (report.violations.length > 0) {
            console.log('\nTop violations:');
            report.violations.slice(0, 5).forEach(violation => {
                console.log(`\n${violation.impact.toUpperCase()}: ${violation.description}`);
                console.log(`Help: ${violation.help}`);
                console.log(`More info: ${violation.helpUrl}`);
            });
        }
    }
}