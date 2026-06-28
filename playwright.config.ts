import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Read from default ".env" file.
dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  outputDir: './reports/artifacts',
  reporter: [['html', { outputFolder: './reports/html' }]],
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
});