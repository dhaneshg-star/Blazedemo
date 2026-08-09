import { test, expect } from '@playwright/test';

test('Checkbox Validation', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  console.log('main Site reached');
  await page.getByRole('heading', { name: 'Practice page' }).click();
  console.log('Heading :- Practice page');
  await page.getByText('Checkbox Example', { exact: true }).click();
  console.log('Checkbox Example');
  // Select Option 1
  const checkbox1 = page.locator('#checkBoxOption1');
  await checkbox1.check();
  await expect(checkbox1).toBeChecked();
  console.log('Option1 enabled and verified');
  // Select Option 2
  const checkbox2 = page.locator('#checkBoxOption2');
  await checkbox2.check();
  await expect(checkbox2).toBeChecked();
  console.log('Option2 enabled and verified');
  // Select Option 3
  const checkbox3 = page.locator('#checkBoxOption3');
  await checkbox3.check();
  await expect(checkbox3).toBeChecked();
  console.log('Option3 enabled and verified');
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