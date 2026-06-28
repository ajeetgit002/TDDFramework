import { Page, expect } from '@playwright/test';

/**
 * Utility class providing common Playwright operations and helper methods
 * for browser automation testing.
 */
export class PlaywrightUtils {
    private page: Page;
    
    // Default timeouts
    private readonly DEFAULT_TIMEOUT = 60000; // 30 seconds
    private readonly ELEMENT_TIMEOUT = 60000; // 10 seconds
    private readonly NETWORK_TIMEOUT = 60000; // 60 seconds

    /**
     * Constructor for PlaywrightUtils
     * @param page - Playwright Page object
     */
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Gets the current page
     * @returns page - Current Playwright Page object
     */
      getPage(): Page {
        return this.page;
    }

    /**
     * Navigates to a specified URL and waits for network idle
     * @param url - The URL to navigate to
     * @param timeout - Optional timeout in milliseconds
     */
    async navigate(url: string, timeout?: number) {
        await this.page.goto(url, { 
            waitUntil: 'load',
            timeout: timeout || this.NETWORK_TIMEOUT 
        });
    }

    /**
     * Refreshes the current page and waits for network idle
     * @param timeout - Optional timeout in milliseconds
     */
    async refreshPage(timeout?: number) {
        await this.page.reload({ 
            waitUntil: 'networkidle',
            timeout: timeout || this.NETWORK_TIMEOUT 
        });
    }

    /**
     * Navigates back to the previous page and waits for network idle
     * @param timeout - Optional timeout in milliseconds
     */
    async goBack(timeout?: number) {
        await this.page.goBack({ 
            waitUntil: 'networkidle',
            timeout: timeout || this.NETWORK_TIMEOUT 
        });
    }

    /**
     * Clicks an element on the page
     * @param selector - CSS selector of the element to click
     * @param timeout - Optional timeout in milliseconds
     */
    async click(selector: string, timeout?: number) {
        await this.page.click(selector, { timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Fills an input field with text
     * @param selector - CSS selector of the input field
     * @param value - Text to fill in the input field
     * @param timeout - Optional timeout in milliseconds
     */
    async fill(selector: string, value: string, timeout?: number) {
        await this.page.fill(selector, value, { timeout: timeout || this.ELEMENT_TIMEOUT });
    }


    /**
     * Selects an option from a dropdown
     * @param selector - CSS selector of the dropdown
     * @param value - Value to select
     * @param timeout - Optional timeout in milliseconds
     */
    async selectOption(selector: string, value: string, timeout?: number) {
        await this.page.selectOption(selector, value, { timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Checks a checkbox
     * @param selector - CSS selector of the checkbox
     * @param timeout - Optional timeout in milliseconds
     */
    async check(selector: string, timeout?: number) {
        await this.page.check(selector, { timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Unchecks a checkbox
     * @param selector - CSS selector of the checkbox
     * @param timeout - Optional timeout in milliseconds
     */
    async uncheck(selector: string, timeout?: number) {
        await this.page.uncheck(selector, { timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Checks if an element is visible on the page
     * @param selector - CSS selector of the element
     * @param timeout - Optional timeout in milliseconds
     * @returns Promise<boolean> - True if element is visible, false otherwise
     */
    async isVisible(selector: string, timeout?: number): Promise<boolean> {
        try {
            await this.page.waitForSelector(selector, { 
                state: 'visible',
                timeout: timeout || this.ELEMENT_TIMEOUT 
            });
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Checks if an element is hidden on the page
     * @param selector - CSS selector of the element
     * @param timeout - Optional timeout in milliseconds
     * @returns Promise<boolean> - True if element is hidden, false otherwise
     */
    async isHidden(selector: string, timeout?: number): Promise<boolean> {
        try {
            await this.page.waitForSelector(selector, { 
                state: 'hidden',
                timeout: timeout || this.ELEMENT_TIMEOUT 
            });
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Checks if an element is enabled
     * @param selector - CSS selector of the element
     * @param timeout - Optional timeout in milliseconds
     * @returns Promise<boolean> - True if element is enabled, false otherwise
     */
    async isEnabled(selector: string, timeout?: number): Promise<boolean> {
        return await this.page.isEnabled(selector, { timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Checks if an element is disabled
     * @param selector - CSS selector of the element
     * @param timeout - Optional timeout in milliseconds
     * @returns Promise<boolean> - True if element is disabled, false otherwise
     */
    async isDisabled(selector: string, timeout?: number): Promise<boolean> {
        return await this.page.isDisabled(selector, { timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Gets the text content of an element
     * @param selector - CSS selector of the element
     * @param timeout - Optional timeout in milliseconds
     * @returns Promise<string> - Text content of the element
     */
    async getText(selector: string, timeout?: number): Promise<string> {
        return await this.page.textContent(selector, { timeout: timeout || this.ELEMENT_TIMEOUT }) || '';
    }
    /**
     * Gets the text content of multiple elements
     * @param selector - CSS selector of the elements
     * @param timeout - Optional timeout in milliseconds
     * @returns Promise<string[]> - Array of text contents of the elements
     */
    async getTexts(selector: string, timeout?: number): Promise<string[]> {
    await this.page.waitForSelector(selector, { timeout: timeout || this.ELEMENT_TIMEOUT });
    return await this.page.locator(selector).allTextContents();
}

    /**
     * Gets the value of an input field
     * @param selector - CSS selector of the input field
     * @param timeout - Optional timeout in milliseconds
     * @returns Promise<string> - Value of the input field
     */
    async getValue(selector: string, timeout?: number): Promise<string> {
        return await this.page.inputValue(selector, { timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Gets the value of an attribute of an element
     * @param selector - CSS selector of the element
     * @param attribute - Name of the attribute
     * @param timeout - Optional timeout in milliseconds
     * @returns Promise<string | null> - Value of the attribute or null if not found
     */
    async getAttribute(selector: string, attribute: string, timeout?: number): Promise<string | null> {
        return await this.page.getAttribute(selector, attribute, { timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Waits for an element to reach a specified state
     * @param selector - CSS selector of the element
     * @param state - State to wait for ('visible' | 'hidden' | 'attached' | 'detached')
     * @param timeout - Optional timeout in milliseconds
     */
    async waitForElement(selector: string, state: 'visible' | 'hidden' | 'attached' | 'detached' = 'visible', timeout?: number) {
        await this.page.waitForSelector(selector, { 
            state,
            timeout: timeout || this.ELEMENT_TIMEOUT 
        });
    }

    /**
     * Waits for network requests to complete
     * @param timeout - Optional timeout in milliseconds
     */
    async waitForNetworkIdle(timeout?: number) {
        await this.page.waitForLoadState('networkidle', { timeout: timeout || this.NETWORK_TIMEOUT });
    }

    /**
     * Waits for a specified amount of time
     * @param ms - Time to wait in milliseconds
     */
    async waitForTimeout(ms: number) {
        await this.page.waitForTimeout(ms);
    }

    /**
     * Asserts that an element is visible
     * @param selector - CSS selector of the element
     * @param timeout - Optional timeout in milliseconds
     */
    async expectElementVisible(selector: string, timeout?: number) {
        await expect(this.page.locator(selector)).toBeVisible({ timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Asserts that an element is hidden
     * @param selector - CSS selector of the element
     * @param timeout - Optional timeout in milliseconds
     */
    async expectElementHidden(selector: string, timeout?: number) {
        await expect(this.page.locator(selector)).toBeHidden({ timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Asserts that an element is enabled
     * @param selector - CSS selector of the element
     * @param timeout - Optional timeout in milliseconds
     */
    async expectElementEnabled(selector: string, timeout?: number) {
        await expect(this.page.locator(selector)).toBeEnabled({ timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Asserts that an element is disabled
     * @param selector - CSS selector of the element
     * @param timeout - Optional timeout in milliseconds
     */
    async expectElementDisabled(selector: string, timeout?: number) {
        await expect(this.page.locator(selector)).toBeDisabled({ timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Asserts that an element has specific text
     * @param selector - CSS selector of the element
     * @param text - Expected text
     * @param timeout - Optional timeout in milliseconds
     */
    async expectText(selector: string, text: string, timeout?: number) {
        await expect(this.page.locator(selector)).toHaveText(text, { timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Asserts that an input field has a specific value
     * @param selector - CSS selector of the input field
     * @param value - Expected value
     * @param timeout - Optional timeout in milliseconds
     */
    async expectValue(selector: string, value: string, timeout?: number) {
        await expect(this.page.locator(selector)).toHaveValue(value, { timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Takes a screenshot of the current page
     * @param name - Name of the screenshot file (without extension)
     */
    async takeScreenshot(name: string) {
        await this.page.screenshot({ 
            path: `./screenshots/${name}.png`,
            fullPage: true 
        });
    }

    /**
     * Gets the current URL of the page
     * @returns Promise<string> - Current URL
     */
    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }

    /**
     * Gets the title of the current page
     * @returns Promise<string> - Page title
     */
    async getTitle(): Promise<string> {
        return this.page.title();
    }

    /**
     * Gets a frame by its name or URL
     * @param nameOrUrl - Name or URL of the frame
     * @returns Promise<Frame | null> - Frame object or null if not found
     */
    async getFrame(nameOrUrl: string) {
        return this.page.frame(nameOrUrl);
    }

    /**
     * Gets all frames on the page
     * @returns Frame[] - Array of all frames
     */
    async getAllFrames() {
        return this.page.frames();
    }

    /**
     * Gets the main frame of the page
     * @returns Frame - Main frame object
     */
    async getMainFrame() {
        return this.page.mainFrame();
    }

    /**
     * Accepts an alert dialog
     */
    async acceptAlert() {
        await this.page.on('dialog', dialog => dialog.accept());
    }

    /**
     * Dismisses an alert dialog
     */
    async dismissAlert() {
        await this.page.on('dialog', dialog => dialog.dismiss());
    }

    /**
     * Presses a key on the keyboard
     * @param key - Key to press
     */
    async pressKey(key: string) {
        await this.page.keyboard.press(key);
    }

    /**
     * Holds down a key on the keyboard
     * @param key - Key to hold down
     */
    async downKey(key: string) {
        await this.page.keyboard.down(key);
    }

    /**
     * Releases a key on the keyboard
     * @param key - Key to release
     */
    async upKey(key: string) {
        await this.page.keyboard.up(key);
    }

    /**
     * Hovers over an element
     * @param selector - CSS selector of the element
     * @param timeout - Optional timeout in milliseconds
     */
    async hover(selector: string, timeout?: number) {
        await this.page.hover(selector, { timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Double clicks an element
     * @param selector - CSS selector of the element
     * @param timeout - Optional timeout in milliseconds
     */
    async doubleClick(selector: string, timeout?: number) {
        await this.page.dblclick(selector, { timeout: timeout || this.ELEMENT_TIMEOUT });
    }

    /**
     * Right clicks an element
     * @param selector - CSS selector of the element
     * @param timeout - Optional timeout in milliseconds
     */
    async rightClick(selector: string, timeout?: number) {
        await this.page.click(selector, { button: 'right', timeout: timeout || this.ELEMENT_TIMEOUT });
    }
}