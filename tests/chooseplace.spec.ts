import { test } from '@playwright/test';
import { ReservePage } from '../pages/chooseplace';
test.setTimeout(3000_0000);

test('Verify BlazeDemo Flight Booking', async ({ page }) => {

  const reserve = new ReservePage(page);

  console.log('========= Test Started =========');

  await reserve.goto();

  await reserve.clickTravelWorld();

  await reserve.selectDeparture('Mexico City');
  //await reserve.selectDeparture('Paris');
 
  await reserve.selectDestination('Dublin');

  await reserve.clickFindFlights();

  await reserve.verifyReservePage();

  await reserve.chooseFlight();

  await reserve.verifyPurchasePage();
 console.log('choose');
 console.log('Flights#');
 console.log('Airline');
 console.log('Depart');
 console.log('Arrive');
 console.log('Price');
 console.log('Choose this flight');
 console.log('Your flight from TLV to SFO has been reserved.');
  console.log('========= Test Passed =========');
});