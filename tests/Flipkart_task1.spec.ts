import { test } from '@playwright/test';
import { FlipkartPage } from '../pages/Flipkart_Task2';
test('test', async ({ page }) => {

await page.goto('https://www.flipkart.com/');
const flipkartPage = new FlipkartPage(page);
  await page.waitForTimeout(1000);
  await flipkartPage.closePopup().click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', {
    name: 'Search for Products, Brands'
  }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', {
    name: 'Search for Products, Brands'
  }).fill('Apple iPhone 16 Plus (Black, 128 GB)');
  await page.waitForTimeout(1000);
  await page.getByRole('link', {
    name: 'apple iphone 16 plus black 128 gb',
    exact: true
  }).click();
  await page.waitForTimeout(1000);
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.jIjQ8S').first().click();
  await page.waitForTimeout(1000);
  const page1 = await page1Promise;
  await page1.waitForLoadState();
});