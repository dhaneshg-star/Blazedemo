import { test } from '@playwright/test';
import { ReservePage } from '../pages/theflight_field';
test.setTimeout(3000_0000);

test('Verify BlazeDemo Flight Booking', async ({ page }) => {

  const reserve = new ReservePage(page);

  await reserve.goto();

  await reserve.verifyHomePage();

  await reserve.selectDeparture('Philadelphia');

  await reserve.selectDestination('London');

  await reserve.clickFindFlights();

  await reserve.chooseFlight();

  await reserve.verifyFlightDetails();

  await reserve.verifyPurchaseForm();

  await page.waitForTimeout(2000);

  console.log('========= Test Completed =========');
});