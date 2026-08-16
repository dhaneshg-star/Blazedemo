import { test } from '@playwright/test';
test('Login using environment configuration', async ({ page }) => {
  await page.goto('/');
  await page.locator('input').nth(0).fill(process.env.ADMIN_USERNAME!);
  await page.locator('input').nth(1).fill(process.env.ADMIN_PASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();
});
