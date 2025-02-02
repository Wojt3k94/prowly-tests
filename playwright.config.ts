import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	// Global test timeout (30 seconds)
	timeout: 30000,

	// Global expect timeout (10 seconds)
	expect: {
		timeout: 10000,
	},

	// Number of retries for failed tests
	retries: 0,

	// Run tests in parallel (default: false)
	workers: 1,

	// Reporter configuration
	reporter: [
		["list"], // Console reporter
		["html", { outputFolder: "playwright-report" }], // HTML report
	],

	// Projects for different browsers
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
		// {
		// 	name: "firefox",
		// 	use: { ...devices["Desktop Firefox"] },
		// },
		// {
		// 	name: "webkit",
		// 	use: { ...devices["Desktop Safari"] },
		// },
	],

	// Global setup and teardown (optional)
	// globalSetup: './global-setup.ts',
	// globalTeardown: './global-teardown.ts',

	// Test directory
	testDir: "./tests",

	// Output directory for test artifacts (screenshots, videos, traces)
	outputDir: "./test-results",

	// Use trace for debugging (optional)
	use: {
		trace: "on-first-retry", // Record traces on first retry
		screenshot: "only-on-failure", // Take screenshots only on failure
		video: "retain-on-failure", // Record videos only on failure
	},
});
