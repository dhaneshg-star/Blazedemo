import { test, expect } from '@playwright/test';
import 'dotenv/config';

test('main URL Login', async ({ page }) => {
  const baseUrl = process.env.Second_BASE_URL;
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!baseUrl) {
    throw new Error('Second_BASE_URL is not defined in .env');
  }

  if (!username || !password) {
    throw new Error('ADMIN_USERNAME or ADMIN_PASSWORD is not defined in .env');
  }
  await page.goto(baseUrl);
  await page.locator('input').nth(0).fill(username);
  await page.locator('input').nth(1).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).not.toHaveURL(baseUrl);
});
