export const URLS = {
  playwright: process.env.BASE_URL || 'https://playwright.dev',
  base: process.env.HYVA_BASE_URL || 'https://demo.hyva.io/',
};

export const TIMEOUTS = {
  short: 5000,
  medium: 10000,
  long: 30000,
};

export const RETRIES = {
  flaky: 2,
  stable: 0,
};