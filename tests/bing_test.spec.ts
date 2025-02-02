import { test, expect } from "@playwright/test";

test.describe("Bing Search - Smoke Tests", () => {
	test.beforeEach(async ({ page }) => {
		// Navigate to Bing homepage
		await page.goto("https://www.bing.com", { waitUntil: "domcontentloaded" });

		// Handle the cookie banner if it appears
		const cookieBanner = page.locator("#bnp_btn_accept");
		await cookieBanner.waitFor({ state: "visible", timeout: 2000 });
		if (await cookieBanner.isVisible()) {
			await cookieBanner.click();
		}

		// Wait for the search bar to be visible
		await page.locator("#sb_form_q").waitFor({ state: "visible" });
	});

	test('Search for "semrush" and verify video results', async ({ page }) => {
		// Enter "semrush" in the search bar
		await page.locator("#sb_form_q").fill("semrush");
		await page.keyboard.press("Enter");

		// Select the "Videos" category using a more specific locator
		await page
			.locator("#b-scopeListItem-video")
			.waitFor({ state: "visible", timeout: 1000 });
		await page.locator("#b-scopeListItem-video").click();

		// Wait for video results to load
		await page.locator(".mm_vdcv_cnt").waitFor({ state: "visible" });

		// Verify video results are displayed
		const videoResults = page.locator(".mm_vdcv_cnt");
		await expect(videoResults).toBeVisible();
	});

	test('Search for "semrush" and verify news results', async ({ page }) => {
		// Enter "semrush" in the search bar
		await page.locator("#sb_form_q").fill("semrush");
		await page.keyboard.press("Enter");

		// Select the "News" category
		await page
			.locator("#b-scopeListItem-news")
			.waitFor({ state: "visible", timeout: 1000 });
		await page.locator("#b-scopeListItem-news").click();

		// Verify fiest news results are displayed
		const newsResults = page.locator(".news-card");
		await expect(newsResults.first()).toBeVisible();
	});

	test('Search for "semrush" and verify images results', async ({ page }) => {
		// Enter "semrush" in the search bar
		await page.locator("#sb_form_q").fill("semrush");
		await page.keyboard.press("Enter");

		// Select the "Images" category
		await page
			.locator("#b-scopeListItem-images")
			.waitFor({ state: "visible", timeout: 1000 });
		await page.locator("#b-scopeListItem-images").click();

		// Verify first images result are displayed
		const newsResults = page.locator(".dgControl_list");
		await expect(newsResults.first()).toBeVisible();
	});
});
