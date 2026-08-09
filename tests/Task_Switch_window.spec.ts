import { test,expect } from '@playwright/test';
test('Great1', async ({ page, context }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/');
console.log('main Site reached and verified');
const heading1 =page.getByRole('heading', { name: 'Practice page' });
await expect(heading1).toBeVisible();
console.log('Heading :-Practice page are verified');
const heading2 =await page.getByText('Switch Window Example', { exact: true });
await expect(heading2).toBeVisible();
console.log('Heading :-Switch window example page verified ');
const [newPage] = await Promise.all([
context.waitForEvent('page'),
page.getByRole('button', { name: 'Open Window' }).click(),
  ]);
console.log('New window opened');
await newPage.waitForLoadState();
const accessCourses = newPage.getByText('Access all our Courses', {exact: true});
await expect(accessCourses).toBeVisible();
console.log('Heading new tab :-Access all our Courses is visible and verified');
await newPage.close();
console.log('New window closed');
});