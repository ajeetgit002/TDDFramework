# Copilot Instructions for this repository

This repository is a Playwright automation framework written in TypeScript. The main runtime is Playwright Test with a Page Object Model structure.

## Architecture and key files

- `playwright.config.ts`: test runner config.
  - `testDir: './tests'`
  - `outputDir: './reports/artifacts'`
  - HTML reporter writes to `./reports/html`
  - `use.headless` is set to `false`
  - failure artifacts: `screenshot`, `video`, `trace`

- `tests/`: test specs.
  - `tests/smoke/` for fast smoke coverage.
  - `tests/regression/` for broader regression scenarios.
  - test filenames use `.spec.ts`.

- `src/pages/`: Page Object Model classes.
  - `BasePage.ts` contains shared navigation behavior.
  - `HomePage.ts` extends `BasePage` and adds page-specific flows.

- `src/fixtures/fixtures.ts`: custom Playwright fixture extensions.
  - exports `test` and `expect` for fixture-based tests.
  - provides `homePage` and `basePage` fixtures backed by `Page`.

- `src/constants/config.ts`: repo-wide application constants.
  - contains `URLS`, `TIMEOUTS`, and `RETRIES`.

- `data/testData.ts`: test data constants used in specs.

## Style and conventions

- Prefer Playwright's Page Object Model for new page interactions.
  - Put reusable browser actions in `src/pages/BasePage.ts`.
  - Put page-specific expectations in page classes like `HomePage.ts`.

- Prefer fixture-based tests in `tests/regression/` when using shared page objects.
  - Example: `import { test, expect } from '../../fixtures/fixtures';`
  - Use `homePage` and `basePage` fixtures from `src/fixtures/fixtures.ts`.

- For simple tests, it is also valid to import `test` from `@playwright/test` directly.
  - Example: `import { test } from '@playwright/test';`

- Use constants from `src/constants/config.ts` or `data/testData.ts` rather than hard-coding URLs.

- Keep assertions on Playwright page state.
  - `await expect(page).toHaveTitle(/Playwright/);`
  - `await expect(page).toHaveURL(/playwright.dev/);`

## Developer workflows

- Install dependencies:
  ```bash
  npm install
  ```

- Run all tests:
  ```bash
  npm test
  ```

- Run headed tests:
  ```bash
  npm run test:headed
  ```

- Run tests in debug mode:
  ```bash
  npm run test:debug
  ```

- View the HTML report:
  ```bash
  npm run test:report
  ```

- If browsers are missing, install with:
  ```bash
  npx playwright install
  ```

## Important repo-specific details

- The project is TypeScript with `module: CommonJS` in `tsconfig.json`.
- The Playwright config writes artifacts to `./reports/artifacts`, and the HTML report is kept separately in `./reports/html`.
- Do not change the reporter folder to the same path as `outputDir` because Playwright will clear artifacts and report output may conflict.

## What to look for when editing tests

- Maintain the existing POM structure under `src/pages/`.
- Reuse `src/fixtures/fixtures.ts` for page fixtures in regression tests.
- Keep page-specific helpers focused on a single page responsibility.
- Use the shared `URLS` constant object instead of literal URLs when possible.

If any section is unclear or if you want this guidance to include more examples from a specific file, I can refine it further.