import { test } from '@playwright/test';
import { FlipkartPage } from '../pages/Flipkart_Task2';
test('Compare', async ({ page }) => {
await page.goto(process.env.FLIPKART_URL!);
const flipkart = new FlipkartPage(page);
await flipkart.closePopup().click();
await flipkart.searchBox().fill(
    'Apple iPhone 16 Plus (Black, 128 GB)'
  );
await flipkart.pressEnter();
  // Wait for search results
  await page.waitForLoadState('networkidle');
  // Click the first "Add to Compare"
  const addToCompare = page
    .locator('span:has-text("Add to Compare")')
    .first();
  await addToCompare.scrollIntoViewIfNeeded();
  await addToCompare.click({ force: true });
});