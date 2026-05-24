import { test, expect } from '../../fixtures/fixtures';
import { URLS } from '../../constants/config';

test('smoke: homepage loads successfully', async ({ homePage }) => {
  await homePage.goto(URLS.playwright);
  await homePage.expectTitle();
});
