import { test, expect } from '@fixtures/fixtures';
import { URLS } from '@constants/config';

test('regression: homepage title validation', async ({ homePage }) => {
  await homePage.goto(URLS.playwright);
  await expect(homePage.page).toHaveTitle(/Playwright/);
});

test('regression: page navigation', async ({ basePage }) => {
  await basePage.goto(URLS.playwright);
  await expect(basePage.page).toHaveURL(/playwright.dev/);
});