import { Page } from '@playwright/test';

export class BrowserUtils {
    static async waitForElement(page: Page, selector: string, timeout: number = 5000): Promise<void> {
        await page.waitForSelector(selector, { timeout });
    }

    static async clickElement(page: Page, selector: string): Promise<void> {
        await page.click(selector);
    }

    static async fillText(page: Page, selector: string, text: string): Promise<void> {
        await page.fill(selector, text);
    }

    static async getText(page: Page, selector: string): Promise<string | null> {
        return await page.textContent(selector);
    }

    static async navigateTo(page: Page, url: string): Promise<void> {
        await page.goto(url);
    }
}