import { test,expect } from '@playwright/test';
test('test', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/');
console.log('main Site reached and verified');
const heading1 =page.getByRole('heading', { name: 'Practice page' });
await expect(heading1).toBeVisible();
console.log('Heading :-Practice page are verified');
const heading2 =await page.getByText('iFrame Example', { exact: true });
await expect(heading2).toBeVisible();
console.log('Heading :-Iframe example verified ');
await page.evaluate(() => {
  window.scrollTo(0, document.body.scrollHeight * 0.60);
});
await page.waitForTimeout(3000);
await page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('link', { name: 'Home' }).click();
console.log('Home');
await page.waitForTimeout(7000);

});