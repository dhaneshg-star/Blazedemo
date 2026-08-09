import { test, expect } from '@playwright/test';
test('Dropdownbox', async ({ page,context }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/');
console.log('main Site reached and verified');
const heading1 =page.getByRole('heading', { name: 'Practice page' });
await expect(heading1).toBeVisible();
console.log('Heading :-Practice page are verified');
const heading2 =await page.getByText('Switch Tab Example', { exact: true });
await expect(heading2).toBeVisible();
console.log('Heading :-Switch tab example');
const theTab =await page.getByRole('link', { name: 'Open Tab' });
await expect(theTab).toBeVisible();
console.log('Open tab button visible ');
const [newTab] = await Promise.all([
context.waitForEvent('page'),
theTab.click()]);
console.log('New tab opened');
await newTab.waitForLoadState();
const courses = newTab.getByText('Access all our Courses', { exact: true });
await expect(courses).toBeVisible();
console.log('Access all our Courses is visible in new tab');
await page.close();
console.log('close the Tab');
});