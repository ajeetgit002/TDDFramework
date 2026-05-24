import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { BasePage } from '../pages/BasePage';

type TestFixtures = {
  homePage: HomePage;
  basePage: BasePage;
};

export const test = base.extend<TestFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },
});

export { expect } from '@playwright/test';
