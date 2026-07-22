import { expect, Locator, Page } from '@playwright/test';

export class ReservePage {
    readonly page: Page;

    // Home Page
    readonly travelWorldLink: Locator;
    readonly welcomeHeading: Locator;
    readonly fromPort: Locator;
    readonly toPort: Locator;
    readonly findFlightsBtn: Locator;

    // Reserve Page
    readonly flightsHeading: Locator;
    readonly chooseFlightBtn: Locator;

    // Purchase Page
    readonly purchaseHeading: Locator;
    readonly name: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zipCode: Locator;
    readonly cardType: Locator;
    readonly creditCard: Locator;
    readonly month: Locator;
    readonly year: Locator;
    readonly nameOnCard: Locator;
    readonly rememberMe: Locator;
    readonly purchaseFlightBtn: Locator;

    // Confirmation Page
    readonly thankYouHeading: Locator;
    readonly idCell: Locator;
    readonly statusCell: Locator;
    readonly amountCell: Locator;
    readonly cardNumberCell: Locator;
    readonly expirationCell: Locator;
    readonly authCodeCell: Locator;
    readonly dateCell: Locator;

    constructor(page: Page) {
        this.page = page;

        // Home Page
        this.travelWorldLink = page.getByRole('link', { name: 'Travel The World' });
        this.welcomeHeading = page.getByRole('heading', { name: 'Welcome to the Simple Travel' });
        this.fromPort = page.locator('select[name="fromPort"]');
        this.toPort = page.locator('select[name="toPort"]');
        this.findFlightsBtn = page.getByRole('button', { name: 'Find Flights' });

        // Reserve Page
        this.flightsHeading = page.getByRole('heading', { name: /Flights from/ });
        this.chooseFlightBtn = page.locator('input[type="submit"]');

        // Purchase Page
        this.purchaseHeading = page.getByRole('heading', { name: /Your flight/ });
        this.name = page.getByRole('textbox', { name: 'Name', exact: true });
        this.address = page.getByRole('textbox', { name: 'Address' });
        this.city = page.getByRole('textbox', { name: 'City' });
        this.state = page.getByRole('textbox', { name: 'State' });
        this.zipCode = page.getByRole('textbox', { name: 'Zip Code' });
        this.cardType = page.locator('#cardType');
        this.creditCard = page.getByRole('textbox', { name: 'Credit Card Number' });
        this.month = page.getByRole('textbox', { name: 'Month' });
        this.year = page.getByRole('textbox', { name: 'Year' });
        this.nameOnCard = page.getByRole('textbox', { name: 'Name on Card' });
        this.rememberMe = page.getByRole('checkbox', { name: 'Remember me' });
        this.purchaseFlightBtn = page.getByRole('button', { name: 'Purchase Flight' });

        // Confirmation Page
        this.thankYouHeading = page.getByRole('heading', { name: 'Thank you for your purchase today!' });
        this.idCell = page.getByRole('cell', { name: 'Id' });
        this.statusCell = page.getByRole('cell', { name: 'Status' });
        this.amountCell = page.getByRole('cell', { name: 'Amount' });
        this.cardNumberCell = page.getByRole('cell', { name: 'Card Number' });
        this.expirationCell = page.getByRole('cell', { name: 'Expiration' });
        this.authCodeCell = page.getByRole('cell', { name: 'Auth Code' });
        this.dateCell = page.getByRole('cell', { name: 'Date' });
    }

    async goto() {
        await this.page.goto('https://blazedemo.com/');
        await this.page.waitForTimeout(2000);
    }

    async searchFlight(from: string, to: string) {
        await this.travelWorldLink.click();
        await this.page.waitForTimeout(2000);

        await expect(this.welcomeHeading).toBeVisible();

        await this.fromPort.selectOption(from);
        await this.page.waitForTimeout(2000);

        await this.toPort.selectOption(to);
        await this.page.waitForTimeout(2000);

        await this.findFlightsBtn.click();
        await this.page.waitForTimeout(2000);
    }

    async chooseFlight() {
        await expect(this.flightsHeading).toBeVisible();

        await this.chooseFlightBtn.first().click();
        await this.page.waitForTimeout(2000);
    }

    async fillPassengerDetails() {
        await expect(this.purchaseHeading).toBeVisible();

        await this.name.fill('Nivin');
        await this.page.waitForTimeout(2000);
        const enteredName = await this.name.inputValue();
        console.log(`Entered Name: ${enteredName}`);

        await this.address.fill('123 Great');
        await this.page.waitForTimeout(2000);
        const enteredAddress = await this.address.inputValue();
        console.log(`Entered Address: ${enteredAddress}`);

        await this.city.fill('Trivandrum');
        await this.page.waitForTimeout(2000);
        const enteredcity = await this.city.inputValue();
        console.log(`Entered City: ${enteredcity}`);

        await this.state.fill('Kerala');
        await this.page.waitForTimeout(2000);
        const enteredstate = await this.state.inputValue();
        console.log(`Entered state: ${enteredstate}`);

        await this.zipCode.fill('1234567');
        await this.page.waitForTimeout(2000);
        const enteredzipCode = await this.zipCode.inputValue();
        console.log(`Entered zipcode: ${enteredzipCode}`);

        await this.cardType.selectOption('dinersclub');
        await this.page.waitForTimeout(2000);
        const enteredcardType = await this.cardType.inputValue();
        console.log(`Entered cardtype: ${enteredcardType}`);

        await this.creditCard.fill('1234567');
        await this.page.waitForTimeout(2000);
        const enteredcreditCard = await this.creditCard.inputValue();
        console.log(`Entered Credit card: ${enteredcreditCard}`);

        await this.month.fill('17');
        await this.page.waitForTimeout(2000);
        const enteredmonth = await this.month.inputValue();
        console.log(`Entered Month: ${enteredmonth}`);

        await this.year.fill('2018');
        await this.page.waitForTimeout(2000);
        const enteredyear = await this.year.inputValue();
        console.log(`Entered year: ${enteredyear}`);

        await this.nameOnCard.fill('John');
        await this.page.waitForTimeout(2000);
        const enterednameOnCard = await this.nameOnCard.inputValue();
        console.log(`Entered nameOnCard: ${enterednameOnCard}`);

        await this.rememberMe.check();
        await this.page.waitForTimeout(2000);
       
    }

    async purchaseFlight() {
        await this.purchaseFlightBtn.click();
        await this.page.waitForTimeout(2000);
        console.log('purchase Flight Button');
    }

    async verifyPurchase() {
        await expect(this.thankYouHeading).toBeVisible();
        await this.page.waitForTimeout(2000);
        console.log('Thank you purchase Today');

        await expect(this.idCell).toBeVisible();
        console.log(`ID  is visible`);
        await expect(this.statusCell).toBeVisible();
        console.log(`Status  is visible`);
        await expect(this.amountCell).toBeVisible();
        console.log(`Amount  is visible`);
        await expect(this.cardNumberCell).toBeVisible();
        console.log(`Card number is visible`);
        await expect(this.expirationCell).toBeVisible();
        console.log(`Expiration  is visible`);
        await expect(this.authCodeCell).toBeVisible();
        console.log(`Authcode is visible`);
        await expect(this.dateCell).toBeVisible();
        console.log(`Data is visible`);

        await this.page.waitForTimeout(2000);
    }
}