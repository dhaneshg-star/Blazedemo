import { test } from '@playwright/test';
test('Great1', async ({ page, context }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
console.log('main Site reached');
await page.getByRole('heading', { name: 'Practice page' }).click();
console.log('Heading :-Practice page');
await page.waitForTimeout(2000);
await page.getByText('Switch Window Example', { exact: true }).click();
console.log('Switch window Example');
await page.waitForTimeout(2000);
const [newPage] = await Promise.all([
context.waitForEvent('page'),
page.getByRole('button', { name: 'Open Window' }).click(),
  ]);
console.log('New window opened');
await page.waitForTimeout(3000);

await newPage.close();
console.log('New window closed');
await page.waitForTimeout(2000);
});