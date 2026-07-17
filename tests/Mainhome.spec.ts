import { test } from '@playwright/test';
import { HomePage } from '../pages/Mainhome';
test.setTimeout(3000_0000);
test('Verify BlazeDemo Home Page', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();

    await homePage.verifyHomePage();

    await homePage.clickHomeLink();

    // Uncomment if you want to click the Find Flights button
    // await homePage.clickFindFlights();

    await page.waitForTimeout(2000);
});