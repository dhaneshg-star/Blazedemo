import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  // Login locators
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  // Product locators
  readonly adidasProduct: Locator;
  readonly viewButton: Locator;
  readonly productImage: Locator;
  readonly adidasHeading: Locator;
  readonly continueShoppingLink: Locator;

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

    // Product
    this.adidasProduct = page.getByText('ADIDAS ORIGINAL');

    this.viewButton = page.getByRole('button', {
      name: 'View'
    }).first();

    this.productImage = page.locator('img');

    this.adidasHeading = page.getByRole('heading', {
      name: 'ADIDAS ORIGINAL'
    });

    this.continueShoppingLink = page.getByRole('link', {
      name: 'Continue Shopping❯'
    });
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async openAdidasProduct() {
    await this.adidasProduct.click();
  }

  async clickView() {
    await this.viewButton.click();
  }

  async clickProductImage() {
    await this.productImage.click();
  }

  async verifyAdidasHeading() {
    await this.adidasHeading.click();
  }

  async continueShopping() {
    await this.continueShoppingLink.click();
  }
}

