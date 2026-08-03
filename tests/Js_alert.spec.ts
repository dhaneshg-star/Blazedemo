import { test, expect } from '@playwright/test';
test('Handle JavaScript Alert', async ({ page }) => {

    // Navigate to the application
    await page.goto('http://the-internet.herokuapp.com/javascript_alerts');
    await page.waitForTimeout(2000);

    // Click the heading
    await page.getByRole('heading', { name: 'JavaScript Alerts' }).click();
    console.log('JavaScript Alerts')
    await page.waitForTimeout(2000);

    // Click the description
    await page.getByText('Here are some examples of').click();
    console.log('Here are some example');
    await page.waitForTimeout(2000);

    // Handle the JavaScript Alert
    page.once('dialog', async (dialog) => {
        console.log('Alert Message: ' + dialog.message());
        await page.waitForTimeout(2000);
        await dialog.dismiss();
    });

    // Click the JS Alert button
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    console.log('click ok');
    await page.waitForTimeout(2000);
    
    // Verify the Result heading
    await expect(page.locator('#result'))
        .toHaveText('You successfully clicked an alert');

    // Print the result text in the console
    const result = await page.locator('#result').textContent();
    console.log('Result: ' + result);
    await page.waitForTimeout(2000);
});