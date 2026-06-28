import { test as base } from '@playwright/test';
import { HomePage } from '@pages/HomePage';
import { BasePage } from '@pages/BasePage';

type TestFixtures = {
  homePage: HomePage;
  basePage: BasePage;
};

export const test = base.extend<TestFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
});

export { expect } from '@playwright/test';