// pages/pages.ts

import { expect, Locator, Page } from '@playwright/test';

export class ReservePage {
  readonly page: Page;

  // Home Page
  readonly welcomeHeading: Locator;
  readonly departureHeading: Locator;
  readonly destinationHeading: Locator;
  readonly fromPort: Locator;
  readonly toPort: Locator;
  readonly findFlightsBtn: Locator;

  // Reserve Page
  readonly chooseFlightBtn: Locator;
  readonly flightHeading: Locator;

  // Flight Details
  readonly airline: Locator;
  readonly flightNumber: Locator;
  readonly price: Locator;
  readonly fees: Locator;
  readonly totalCost: Locator;

  // Purchase Form
  readonly formHeading: Locator;
  readonly nameLabel: Locator;
  readonly addressLabel: Locator;
  readonly cityLabel: Locator;
  readonly stateLabel: Locator;
  readonly zipCodeLabel: Locator;
  readonly cardTypeLabel: Locator;
  readonly creditCardLabel: Locator;
  readonly monthLabel: Locator;
  readonly yearLabel: Locator;
  readonly nameOnCardLabel: Locator;
  readonly rememberMeLabel: Locator;

  constructor(page: Page) {
    this.page = page;

    // Home Page
    this.welcomeHeading = page.getByRole('heading', {
      name: 'Welcome to the Simple Travel Agency!'
    });
    console.log('Welcome to the Simple Travel Agency!');

    this.departureHeading = page.getByRole('heading', {
      name: 'Choose your departure city:'
    });

    this.destinationHeading = page.getByRole('heading', {
      name: 'Choose your destination city:'
    });

    this.fromPort = page.locator('select[name="fromPort"]');
    this.toPort = page.locator('select[name="toPort"]');
    this.findFlightsBtn = page.getByRole('button', { name: 'Find Flights' });
    console.log('find flight');
    // Reserve Page
    this.chooseFlightBtn = page
      .getByRole('row', { name: /Choose This Flight/i })
      .getByRole('button')
      .first();
      console.log('choose this Flight');

    this.flightHeading = page.getByRole('heading', {
      name: /Your flight from/i
    });
    console.log('Your flight from TLV to SFO has been reserved');

    // Flight Details
    this.airline = page.getByText('Airline:');
    console.log('Airline');
    this.flightNumber = page.getByText('Flight Number:');
    console.log('Flight Number');
    this.price = page.getByText('Price:');
    console.log('Price');
    this.fees = page.getByText('Arbitrary Fees and Taxes:');
    console.log('Arbitrary Fees and Taxes:');
    this.totalCost = page.getByText('Total Cost:');
    console.log('Total cost ');

    // Purchase Form
    this.formHeading = page.getByText('Please submit the form below');
    console.log('please submit the Form Below to purchase flight');
    this.nameLabel = page.getByText('Name', { exact: true });
    console.log('Name');
    this.addressLabel = page.getByText('Address');
    console.log('Address');
    this.cityLabel = page.getByText('City');
    console.log('City');
    this.stateLabel = page.getByText('State');
    console.log('State');
    this.zipCodeLabel = page.getByText('Zip Code');
    console.log('Zip code');
    this.cardTypeLabel = page.getByText('Card Type');
    console.log('Card Type');
    this.creditCardLabel = page.getByText('Credit Card Number');
    console.log('Credit card number');
    this.monthLabel = page.getByText('Month');
    console.log('Month');
    this.yearLabel = page.getByText('Year');
    console.log('Year');
    this.nameOnCardLabel = page.getByText('Name on Card');
    console.log('Name on Card');
    this.rememberMeLabel = page.getByText('Remember me');
    console.log('Remember me');
  }

  async goto() {
    await this.page.goto('https://blazedemo.com/index.php');
    await this.page.waitForTimeout(2000);
  }

  async verifyHomePage() {
    await expect(this.welcomeHeading).toBeVisible();
    await expect(this.departureHeading).toBeVisible();
    await expect(this.destinationHeading).toBeVisible();
    await this.page.waitForTimeout(2000);
  }

  async selectDeparture(city: string) {
    await this.fromPort.selectOption(city);
    await this.page.waitForTimeout(2000);
  }

  async selectDestination(city: string) {
    await this.toPort.selectOption(city);
    await this.page.waitForTimeout(2000);
  }

  async clickFindFlights() {
    await this.findFlightsBtn.click();
    await this.page.waitForTimeout(2000);
  }

  async chooseFlight() {
    await this.chooseFlightBtn.click();
    await this.page.waitForTimeout(2000);
  }

  async verifyFlightDetails() {
    await expect(this.flightHeading).toBeVisible();
    await expect(this.airline).toBeVisible();
    await expect(this.flightNumber).toBeVisible();
    await expect(this.price).toBeVisible();
    await expect(this.fees).toBeVisible();
    await expect(this.totalCost).toBeVisible();
    await this.page.waitForTimeout(2000);
  }

  async verifyPurchaseForm() {
    await expect(this.formHeading).toBeVisible();
    await expect(this.nameLabel).toBeVisible();
    await expect(this.addressLabel).toBeVisible();
    await expect(this.cityLabel).toBeVisible();
    await expect(this.stateLabel).toBeVisible();
    await expect(this.zipCodeLabel).toBeVisible();
    await expect(this.cardTypeLabel).toBeVisible();
    await expect(this.creditCardLabel).toBeVisible();
    await expect(this.monthLabel).toBeVisible();
    await expect(this.yearLabel).toBeVisible();
    await expect(this.nameOnCardLabel).toBeVisible();
    await expect(this.rememberMeLabel).toBeVisible();
    await this.page.waitForTimeout(2000);
  }
}