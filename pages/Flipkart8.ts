import { test, expect } from '@playwright/test';

test('Enable Add to Compare', async ({ page }) => {

  await page.goto('https://www.flipkart.com/');

  // Close login popup
  await page.getByRole('button', { name: '✕' }).click();

  // Search product
  await page.getByRole('textbox', { name: 'Search for Products, Brands' })
    .fill('Apple iPhone 16 Plus (Black, 128 GB)');

  await page.keyboard.press('Enter');

  // Wait for results
  await page.waitForLoadState('networkidle');

  // Click Add to Compare
  const compare = page.getByRole('checkbox');

  await compare.waitFor({ state: 'visible' });
  await compare.check();

  await expect(compare).toBeChecked();
});