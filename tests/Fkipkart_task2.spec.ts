import { test, expect } from '@playwright/test';
test.setTimeout(3000_0000);
test('Enable Add to Compare', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: '✕' }).click();
  await page.waitForTimeout(2000);

  // Search product
  await page.getByRole('textbox', {
    name: 'Search for Products, Brands'
  }).fill('Apple iPhone 16 Plus (Black, 128 GB)');
  await page.waitForTimeout(2000);

  // Press Enter
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);

  // Wait for search results
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Click the first "Add to Compare"
  const addToCompare = page.locator('span:has-text("Add to Compare")').first();

  await addToCompare.scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);

  await addToCompare.click({ force: true });
  await page.waitForTimeout(3000);


});