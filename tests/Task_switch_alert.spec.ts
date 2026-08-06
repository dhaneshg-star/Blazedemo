import { test } from '@playwright/test';
test('Switchtab', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
console.log('main Site reached');
await page.getByRole('heading', { name: 'Practice page' }).click();
console.log('Heading :-Practice page');
await page.waitForTimeout(2000);
await page.getByText('Switch To Alert Example', { exact: true }).click();
console.log('Switch To Alert Example');
await page.waitForTimeout(2000);
await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('person');
console.log('Entered text "person"');
await page.waitForTimeout(2000);
page.on('dialog', async (dialog) => {
console.log('Alert Message:', dialog.message());
await page.waitForTimeout(2000);
await dialog.accept();
});
 await page.locator('#alertbtn').click();
await page.waitForTimeout(2000);
console.log('click alert button');
});