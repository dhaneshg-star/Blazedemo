import { test } from '@playwright/test';
import { HomePage } from '../pages/Thetravelworld1';
test.setTimeout(3000_0000);
test('Verify BlazeDemo Flight Search', async ({ page }) => {

    const homePage = new HomePage(page);

    console.log('Test Started');

    await homePage.goto();

    await homePage.verifyHomePage();

    await homePage.clickTravelWorld();

    await homePage.clickHome();

    await homePage.goto();

    await homePage.clickDestinationLink();

    await homePage.goto();

    await homePage.selectDeparture('Philadelphia');

    await homePage.selectDestination('London');

    await homePage.clickFindFlights();

    console.log('Flight search completed successfully.');

    await page.waitForTimeout(2000);
});