import { test } from '@playwright/test';
import { ReservePage } from '../pages/purchaseflight';
test.setTimeout(300000);

test('Verify BlazeDemo Flight Booking', async ({ page }) => {

    const reserve = new ReservePage(page);

    console.log('========== Test Started ==========');

    await reserve.goto();

    await reserve.searchFlight('Portland', 'London');

    await reserve.chooseFlight();

    await reserve.fillPassengerDetails();

    await reserve.purchaseFlight();

    await reserve.verifyPurchase();

    console.log('========== Test Completed Successfully ==========');

    // Pause for 2 seconds before closing the browser
    await page.waitForTimeout(2000);
});