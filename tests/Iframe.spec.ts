import { test } from '@playwright/test';
test('test', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
console.log('main Site reached');
await page.getByRole('heading', { name: 'Practice page' }).click();
console.log('Heading :-Practice page');
await page.waitForTimeout(2000);
await page.getByText('iFrame Example').click();
console.log('Heading :-iFrame Example');
await page.evaluate(() => {
  window.scrollTo(0, document.body.scrollHeight * 0.60);
});
await page.waitForTimeout(3000);
await page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('link', { name: 'Home' }).click();
console.log('Home');
await page.waitForTimeout(7000);

});