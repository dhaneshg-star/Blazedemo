import { test, expect } from '@playwright/test';
test('Handle JavaScript Confirm Alert', async ({ page }) => {
test.setTimeout(300000);
    // Navigate to the application
    await page.goto('http://the-internet.herokuapp.com/javascript_alerts');
    console.log('main Site reached');
    await page.waitForTimeout(2000);

    // Click the heading
    await page.getByRole('heading', { name: 'JavaScript Alerts' }).click();
    console.log('Heading :-JavaScript Alerts');
    await page.waitForTimeout(2000);

    // Click the description
    await page.getByText('Here are some examples of different JavaScript alerts which can be troublesome for automation').click();
    console.log('Description clicked');
    await page.waitForTimeout(2000);

    // Handle the JS Confirm dialog
    page.once('dialog', async dialog => {
        console.log('click for Js confirm');
        console.log(`Dialog message: ${dialog.message()}`);
        await page.waitForTimeout(2000);
        await dialog.accept(); // Clicks OK
    });

    // Click the JS Confirm button
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    console.log('JS Confirm button clicked as : ok');
    await page.waitForTimeout(2000);

    // Verify the result
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    console.log('The Result :-You clicked: Ok');
    console.log('Alert submitted successfully');
    await page.waitForTimeout(2000);

    //verify the page reload
    await page.reload();
    await page.waitForTimeout(2000);

// Print a separator
console.log('====================================');
console.log('Starting JS Confirm - Cancel');
console.log('====================================');

    // Handle the JS Confirm dialog cancel
    page.once('dialog', async dialog => {
        console.log('click for JS confirm');
        console.log(`Dialog message: ${dialog.message()}`);
        await page.waitForTimeout(2000);
        await dialog.dismiss(); // Clicks Cancel
    });

    // Click the JS Confirm button
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    console.log('JS Confirm button clicked : cancel');
    await page.waitForTimeout(2000);

    // Verify the result
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    console.log('The Result :- You clicked: cancel');
    console.log('Alert dismissed successfully');
    await page.waitForTimeout(2000);
});