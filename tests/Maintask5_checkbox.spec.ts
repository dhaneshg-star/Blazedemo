import { test, expect } from '@playwright/test';
import { CheckboxPage } from '../pages/Task5_checkbox';
test('Checkbox Example', async ({ page }) => {
await page.goto(process.env.BASE_URL!);
const checkboxPage = new CheckboxPage(page);

  // Verify Practice Page heading
  await expect(checkboxPage.practiceHeading).toBeVisible();

  // Click Checkbox Example
  await checkboxPage.clickCheckboxExample();

  // Check all checkboxes
  await checkboxPage.checkOption1();
  await checkboxPage.checkOption2();
  await checkboxPage.checkOption3();

  // Verify all are checked
  await expect(checkboxPage.option1).toBeChecked();
  await expect(checkboxPage.option2).toBeChecked();
  await expect(checkboxPage.option3).toBeChecked();

  // Uncheck all checkboxes
  await checkboxPage.uncheckOption3();
  await checkboxPage.uncheckOption2();
  await checkboxPage.uncheckOption1();

  // Verify all are unchecked
  await expect(checkboxPage.option1).not.toBeChecked();
  await expect(checkboxPage.option2).not.toBeChecked();
  await expect(checkboxPage.option3).not.toBeChecked();
});

