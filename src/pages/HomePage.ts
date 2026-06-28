import { expect, Page } from '@playwright/test';
import { BasePage } from '@pages/BasePage';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async load() {
    await this.goto('https://playwright.dev');
  }

  async expectTitle() {
    await expect(this.page).toHaveTitle(/Playwright/);
  }
}