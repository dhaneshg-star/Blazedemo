import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly travelWorldLink: Locator;
    readonly homeLink: Locator;
    readonly welcomeHeading: Locator;
    readonly destinationLink: Locator;
    readonly departureHeading: Locator;
    readonly departureDropdown: Locator;
    readonly destinationHeading: Locator;
    readonly destinationDropdown: Locator;
    readonly findFlightsButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.travelWorldLink = page.getByRole('link', { name: 'Travel The World' });
        this.homeLink = page.getByRole('link', { name: 'home' });
        this.welcomeHeading = page.getByRole('heading', { name: 'Welcome to the Simple Travel' });
        this.destinationLink = page.getByRole('link', { name: 'destination of the week! The' });
        this.departureHeading = page.getByRole('heading', { name: 'Choose your departure city:' });
        this.departureDropdown = page.locator('select[name="fromPort"]');
        this.destinationHeading = page.getByRole('heading', { name: 'Choose your destination city:' });
        this.destinationDropdown = page.locator('select[name="toPort"]');
        this.findFlightsButton = page.getByRole('button', { name: 'Find Flights' });
    }

    async goto() {
        await this.page.goto('https://blazedemo.com/index.php');
        console.log('Navigated to BlazeDemo Home Page');
        await this.page.waitForTimeout(2000);
    }

    async verifyHomePage() {
        await expect(this.travelWorldLink).toBeVisible();
        console.log('Travel The World link is visible');
        await this.page.waitForTimeout(2000);

        await expect(this.homeLink).toBeVisible();
        console.log('Home link is visible');
        await this.page.waitForTimeout(2000);

        await expect(this.welcomeHeading).toBeVisible();
        console.log('Welcome heading is visible');
        await this.page.waitForTimeout(2000);

        await expect(this.departureHeading).toBeVisible();
        console.log('Departure heading is visible');
        await this.page.waitForTimeout(2000);

        await expect(this.destinationHeading).toBeVisible();
        console.log('Destination heading is visible');
        await this.page.waitForTimeout(2000);
    }

    async clickTravelWorld() {
        await this.travelWorldLink.click();
        console.log('Clicked Travel The World');
        await this.page.waitForTimeout(2000);
    }

    async clickHome() {
        await this.homeLink.click();
        console.log('Clicked Home');
        await this.page.waitForTimeout(2000);
    }

    async clickDestinationLink() {
        await this.destinationLink.click();
        console.log('Clicked Destination of the Week');
        await this.page.waitForTimeout(2000);
    }

    async selectDeparture(city: string) {
        await this.departureDropdown.selectOption(city);
        console.log(`Selected Departure City: ${city}`);
        await this.page.waitForTimeout(2000);
    }

    async selectDestination(city: string) {
        await this.destinationDropdown.selectOption(city);
        console.log(`Selected Destination City: ${city}`);
        await this.page.waitForTimeout(2000);
    }

    async clickFindFlights() {
        await this.findFlightsButton.click();
        console.log('Clicked Find Flights');
        await this.page.waitForTimeout(2000);
    }
}