import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly welcomeHeading: Locator;
  readonly introText: Locator;
  readonly destinationText: Locator;
  readonly departureHeading: Locator;
  readonly destinationHeading: Locator;
  readonly findFlightsButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.homeLink = page.getByText('Travel The World home');
    console.log('Travel the World home');
    this.welcomeHeading = page.getByRole('heading', {
      name: 'Welcome to the Simple Travel'
    });
    console.log('Welcome to the simple travel');
    this.introText = page.getByText('The is a sample site you can');
    console.log('The is a sample site you can test with Blazemeter');
    this.destinationText = page.getByText('Check out our destination of');
    console.log('check the Designation of the weak! Beach!');
    this.departureHeading = page.getByRole('heading', {
      name: 'Choose your departure city:'
    });
    console.log('choose your departure city');
    this.destinationHeading = page.getByRole('heading', {
      name: 'Choose your destination city:'
    });
    console.log('choose your destination city');
    this.findFlightsButton = page.locator('form div').filter({
      hasText: 'Find Flights'
    });
    console.log('Find flights');
  }

  async goto() {
    await this.page.goto('https://blazedemo.com/');
    await this.page.waitForTimeout(2000);
  }

  async verifyHomePage() {
    await expect(this.homeLink).toBeVisible();
    await this.page.waitForTimeout(2000);

    await expect(this.welcomeHeading).toBeVisible();
    await this.page.waitForTimeout(2000);

    await expect(this.introText).toBeVisible();
    await this.page.waitForTimeout(2000);

    await expect(this.destinationText).toBeVisible();
    await this.page.waitForTimeout(2000);

    await expect(this.departureHeading).toBeVisible();
    await this.page.waitForTimeout(2000);

    await expect(this.destinationHeading).toBeVisible();
    await this.page.waitForTimeout(2000);

    await expect(this.findFlightsButton).toBeVisible();
    await this.page.waitForTimeout(2000);
  }

  async clickHomeLink() {
    await this.homeLink.click();
    await this.page.waitForTimeout(2000);
  }

  async clickFindFlights() {
    await this.findFlightsButton.click();
    await this.page.waitForTimeout(2000);
  }
}