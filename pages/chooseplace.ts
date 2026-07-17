import { expect, Locator, Page } from '@playwright/test';

export class ReservePage {
  readonly page: Page;

  readonly travelWorldLink: Locator;
  readonly fromPort: Locator;
  readonly toPort: Locator;
  readonly findFlightsBtn: Locator;
  readonly chooseFlightBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.travelWorldLink = page.getByRole('link', { name: 'Travel The World' });

    this.fromPort = page.locator('select[name="fromPort"]');
    this.toPort = page.locator('select[name="toPort"]');
    
    this.findFlightsBtn = page.getByRole('button', {
      name: 'Find Flights',
    });

    this.chooseFlightBtn = page
      .getByRole('row', { name: /Choose This Flight 43 Virgin/i })
      .getByRole('button');
  }

  // 2 Seconds Delay
  async delay() {
    await this.page.waitForTimeout(2000);
  }

  async goto() {
    await this.page.goto('https://blazedemo.com/index.php');
    await this.delay();
  }

  async clickTravelWorld() {
    await this.travelWorldLink.click();
    await this.delay();
  }

  async selectDeparture(city: string) {
    await this.fromPort.selectOption(city);
    await this.delay();
  }

  async selectDestination(city: string) {
    await this.toPort.selectOption(city);
    await this.delay();
  }

  async clickFindFlights() {
    await this.findFlightsBtn.click();
    await this.delay();
  }

  async verifyReservePage() {
    await expect(
      this.page.getByRole('heading', {
        name: 'Flights from Mexico City to Dublin:',
      })
    ).toBeVisible();
    await this.delay();
  }
 

  async chooseFlight() {
    await this.chooseFlightBtn.click();
    await this.delay();
  }
  

  async verifyPurchasePage() {
    await expect(
      this.page.getByRole('heading', {
        name: 'Your flight from TLV to SFO',
      })
    ).toBeVisible();

    await this.delay();
  }
}