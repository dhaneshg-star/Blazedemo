import { test, expect } from '@playwright/test';
test('Checkbox Validation', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/');
console.log('main Site reached and verified');
const heading1 =page.getByRole('heading', { name: 'Practice page' });
await expect(heading1).toBeVisible();
console.log('Heading :-Practice page are verified');
const heading2 =await page.getByText('Checkbox Example', { exact: true });
await expect(heading2).toBeVisible();
console.log('Heading :-checkbox example page verified ');
  // Select Option 1
const checkbox1 = page.locator('#checkBoxOption1');
await checkbox1.check();
const option1Text = await page.locator('label:has-text("Option1")');
await expect(option1Text).toBeVisible();
console.log('Option1 "box" can be select and "Text" able to view are verified');
  // Select Option 2
const checkbox2 = page.locator('#checkBoxOption2');
await checkbox2.check();
const option2Text = await page.locator('label:has-text("Option2")');
await expect(option2Text).toBeVisible();
console.log('Option2 "box" can be select and "Text" able to view are verified');
  // Select Option 3
const checkbox3 = page.locator('#checkBoxOption3');
await checkbox3.check();
const option3Text = await page.locator('label:has-text("Option3")');
await expect(option3Text).toBeVisible();
console.log('Option3 "box" can be select and "Text" able to view are verified');
  // Verify multiple checkboxes can remain selected
  await expect(checkbox1).toBeChecked();
  await expect(checkbox2).toBeChecked();
  await expect(checkbox3).toBeChecked();
  console.log('Multiple checkbox selection verified');
  // Unselect Option 3
  await checkbox3.uncheck();
  await expect(checkbox3).not.toBeChecked();
  console.log('Option3 disabled and verified');
  // Verify Option 1 and Option 2 are still selected
  await expect(checkbox1).toBeChecked();
  await expect(checkbox2).toBeChecked();
  console.log('Option1 and Option2 remain enabled');
  // Unselect Option 2
  await checkbox2.uncheck();
  await expect(checkbox2).not.toBeChecked();
  console.log('Option2 disabled and verified');
  // Verify Option 1 is still selected
  await expect(checkbox1).toBeChecked();
  console.log('Option1 remains enabled');
  // Unselect Option 1
  await checkbox1.uncheck();
  await expect(checkbox1).not.toBeChecked();
  console.log('Option1 disabled and verified');
});