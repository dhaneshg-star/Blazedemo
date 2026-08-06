import { test } from '@playwright/test';
test('Switchtab', async ({ page, context }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
console.log('main Site reached');
await page.getByRole('heading', { name: 'Practice page' }).click();
console.log('Heading :-Practice page');
await page.waitForTimeout(2000);
await page.getByText('Switch Tab Example', { exact: true }).click();
console.log('Switch Tab Example');
await page.waitForTimeout(2000);
const [newTab] = await Promise.all([
context.waitForEvent('page'),
page.getByRole('link', { name: 'Open Tab' }).click(),
]);
console.log('New tab opened');
 await page.waitForTimeout(2000);
  await newTab.close();
  console.log('New tab closed');
  await page.waitForTimeout(2000);
});