import { Page, Locator } from '@playwright/test';
export class ProductCartPage {
    readonly page: Page;
    // Login locators
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    // Product locators
    readonly adidasProduct: Locator;
    readonly zaraProduct: Locator;
    readonly iphoneProduct: Locator;
    // Add to cart buttons
    readonly addToCartButtons: Locator;
    constructor(page: Page) {
        this.page = page;
        // Login
        this.emailInput = page.getByRole('textbox', {
            name: 'email@example.com'
        });

        this.passwordInput = page.getByRole('textbox', {
            name: 'enter your passsword'
        });

        this.loginButton = page.getByRole('button', {
            name: 'Login'
        });

        // Products
        this.adidasProduct = page.getByText('ADIDAS ORIGINAL');
        this.zaraProduct = page.getByText('ZARA COAT');
        this.iphoneProduct = page.getByText('iphone 13 pro');

        // Add To Cart
        this.addToCartButtons = page.getByRole('button', {
            name: ' Add To Cart'
        });
    }

    async navigateToLoginPage() {
    await this.page.goto(process.env.New_Url!);
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async selectAdidas() {
        await this.page.getByRole('img').first().click();
        console.log('click the "ADiDAS ORGINAl" image');
        await this.adidasProduct.click();
        console.log('click the "ADiDAS ORGINAl"');
        await this.addToCartButtons.first().click();
        console.log('click the "ADiDAS ORGINAl" to Add to chart');
    }

    async selectZaraCoat() {
        await this.page.getByRole('img').nth(1).click();
        console.log('click the "ZARA COAT3" image');
        await this.zaraProduct.click();
        console.log('click the "ZARA COAT3"');
        await this.addToCartButtons.nth(1).click();
        console.log('click the "ZARA COAT3" to Add to chart');
    }

    async selectIphone13() {
        await this.page.getByRole('img').nth(2).click();
        console.log('click the "IPHONE 13 PRO" image');
        await this.iphoneProduct.click();
        console.log('click the "IPHONE 13 PRO"');
        await this.addToCartButtons.nth(2).click();
        console.log('click the "IPHONE 13 PRO" to Add to chart');
    }

    async addThreeProductsToCart() {
        await this.selectAdidas();
        await this.selectZaraCoat();
        await this.selectIphone13();
         await this.page.waitForTimeout(1000);
    }
}