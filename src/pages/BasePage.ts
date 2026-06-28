import { Page } from '@playwright/test';
import { PlaywrightUtils } from '@utils/browser-utils';

export class BasePage {
  readonly page: Page;
  readonly utils: PlaywrightUtils;

  constructor(page: Page) {
    this.page = page;
    this.utils = new PlaywrightUtils(page);
  }

  async goto(url: string) {
    await this.utils.navigate(url);
  }
}