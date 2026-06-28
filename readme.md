# Playwright Automation Framework

Enterprise-grade Playwright test automation framework with TypeScript, Page Object Model (POM), and organized test suites.

## Project Structure

- `playwright.config.ts` - Playwright configuration
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration

### Folders

- `tests/` - Test specifications
  - `smoke/` - Smoke tests (critical functionality)
  - `regression/` - Regression tests (full coverage)
- `src/pages/` - Page Object Model classes
- `src/utils/` - Reusable utility functions
- `src/fixtures/` - Playwright test fixtures
- `src/constants/` - Configuration and constants
- `data/` - Test data
- `reports/` - Test results and artifacts
  - `html/` - HTML test report
  - `artifacts/` - Screenshots, videos, traces

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run all tests:
   ```bash
   npm test
   ```

3. Run tests with headed browser:
   ```bash
   npm run test:headed
   ```

4. View test report:
   ```bash
   npm run test:report
   ```

5. Debug tests:
   ```bash
   npm run test:debug
   ```

## Test Organization

- **Smoke tests** (`tests/smoke/`) - Fast, critical path tests
- **Regression tests** (`tests/regression/`) - Comprehensive test coverage

## Key Features

- Page Object Model (POM) for maintainability
- Reusable fixtures for test setup
- Screenshot and video capture on failures
- Trace files for debugging
- HTML test report generation
- Organized test categorization
