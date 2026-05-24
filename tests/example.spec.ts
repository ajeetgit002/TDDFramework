import { test, expect } from '@playwright/test';

test('homepage success test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});

test('homepage failure test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/This title does not exist/);
});