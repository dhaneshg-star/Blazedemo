import { test,expect } from '@playwright/test';
test('Switchtab', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/');
console.log('main Site reached and verified');
const heading1 =page.getByRole('heading', { name: 'Practice page' });
await expect(heading1).toBeVisible();
console.log('Heading :-Practice page are verified');
const heading2 =await page.getByText('Switch To Alert Example', { exact: true });
await expect(heading2).toBeVisible();
console.log('Heading :-Switch To Alert Example verified ');
const box =await page.getByRole('textbox', { name: 'Enter Your Name' });
await expect(box).toBeVisible();
await expect(box).toBeEditable();
console.log('The Enter your name box able to visible and Editable');
await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('person');
console.log('Entered text "person"');
 // Handle JavaScript alert
page.once('dialog', async dialog => {
console.log('Alert message:', dialog.message());
// Verify alert contains entered name
await page.waitForTimeout(2000);
expect(dialog.message()).toContain('person');
await dialog.accept();
  });
const confirm = await page.locator('#confirmbtn');
await expect(confirm).toBeVisible();
  // Click the confirm button
await confirm.click();
console.log('Confirm displayed and verified successfully');
});