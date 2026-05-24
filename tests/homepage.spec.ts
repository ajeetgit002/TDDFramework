import { test } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { urls } from '../data/testData';

test('homepage title should contain Playwright', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto(urls.playwright);
  await homePage.expectTitle();
});
