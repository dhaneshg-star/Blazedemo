import { test } from '@playwright/test';
import 'dotenv/config';

test('Url Login', async ({ page }) => {
  const baseUrl = process.env.BASE_URL;

  if (!baseUrl) {
    throw new Error('BASE_URL is not defined in .env');
  }

  await page.goto(baseUrl);
});