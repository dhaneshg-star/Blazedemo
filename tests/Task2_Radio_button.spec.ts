import { test,expect } from '@playwright/test';
test('Just testing', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
console.log('main Site reached');
await page.getByRole('heading', { name: 'Practice page' }).click();
console.log('Heading :-Practice page');
await page.waitForTimeout(2000);
await page.getByText('Radio Button Example').click(); 
console.log('radio Button Example');
await page.waitForTimeout(2000)
await page.locator("//input[@value='radio1']").check();
console.log('radio Button1');
await page.waitForTimeout(2000);
await page.locator("//input[@value='radio2']").check();
console.log('radio Button2');
await page.waitForTimeout(2000);
await page.locator("//input[@value='radio3']").check();
console.log('radio Button3');
await page.waitForTimeout(2000);
});
