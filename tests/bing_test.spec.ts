import { test, expect } from "@playwright/test";

test.describe("Bing Search - Smoke Tests", () => {
	test.beforeEach(async ({ page }) => {
		// Navigate to Bing homepage
		await page.goto("https://www.bing.com", { waitUntil: "load" });

		// Handle the cookie banner if it appears
		try {
			const cookieBanner = page.locator("#bnp_btn_accept");
			await cookieBanner.waitFor({ state: "visible", timeout: 10000 });
			if (await cookieBanner.isVisible()) {
				await cookieBanner.click();
			}
		} catch (error) {
			console.log("Cookie banner not found");
		}

		// Wait for the search bar to be visible
		await page.locator("#sb_form_q").waitFor({ state: "visible" });
	});

	test('Search for "semrush" and verify video results', async ({ page }) => {
		// Enter "semrush" in the search bar
		await page.locator("#sb_form_q").fill("semrush");
		await page.keyboard.press("Enter");
		await page.waitForTimeout(3000);
		await page.waitForLoadState("networkidle");
		await page.waitForSelector("#b_results", {
			state: "visible",
			timeout: 10000,
		});

		// Select the "Videos" category using a more specific locator
		const videoTab = page.locator("#b-scopeListItem-video");

		const [newPage] = await Promise.all([
			page.waitForEvent("popup"), // Capture the new tab
			videoTab.click(), // Click the news tab link
		]);

		// Verify video results are displayed
		const videoResults = page.locator("#b_content");
		await expect(videoResults).toBeVisible();
	});

	test('Search for "semrush" and verify news results', async ({ page }) => {
		// Enter "semrush" in the search bar
		await page.locator("#sb_form_q").fill("semrush");
		await page.keyboard.press("Enter");
		await page.waitForTimeout(3000);
		await page.waitForLoadState("networkidle");
		await page.waitForSelector("#b_results", {
			state: "visible",
			timeout: 10000,
		});

		// Select the "News" category
		const newsTab = page.locator("#b-scopeListItem-news");
		const [newPage] = await Promise.all([
			page.waitForEvent("popup"),
			newsTab.click(),
		]);

		// Verify fiest news results are displayed
		const newsResults = page.locator("#b_content");
		await expect(newsResults).toBeVisible();
	});

	test('Search for "semrush" and verify images results', async ({ page }) => {
		// Enter "semrush" in the search bar
		await page.locator("#sb_form_q").fill("semrush");
		await page.keyboard.press("Enter");
		await page.waitForTimeout(3000);
		await page.waitForLoadState("networkidle");
		await page.waitForSelector("#b_results", {
			state: "visible",
			timeout: 10000,
		});

		// Select the "Images" category
		const imagesTab = page.locator("#b-scopeListItem-images");

		const [newPage] = await Promise.all([
			page.waitForEvent("popup"), // Capture the new tab
			imagesTab.click(), // Click the news tab link
		]);

		// Verify first images result are displayed
		const imageResults = page.locator("#b_content");
		await expect(imageResults).toBeVisible();
	});
});
