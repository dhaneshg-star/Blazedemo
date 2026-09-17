import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.getByRole('textbox', {
      name: 'email@example.com'
    });

    this.passwordInput = page.getByRole('textbox', {
      name: 'enter your passsword'
    });

    this.loginButton = page.getByRole('button', {
      name: 'Login'
    });
  }

  async navigateToLoginPage() {
    await this.page.goto(
      'https://rahulshettyacademy.com/client/#/auth/login'
    );
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}


export class ProductPage {
  readonly page: Page;
  readonly adidasProduct: Locator;
  readonly zaraProduct: Locator;
  readonly iphoneProduct: Locator;
  readonly addToCartButtons: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.adidasProduct = page.getByText('ADIDAS ORIGINAL');
    this.zaraProduct = page.getByText('ZARA COAT');
    this.iphoneProduct = page.getByText('iphone 13 pro');

    this.addToCartButtons = page.getByRole('button', {
      name: ' Add To Cart'
    });

    this.cartButton = page.getByRole('button', {
      name: '   Cart'
    });
  }

  async addProductsToCart() {
    await this.adidasProduct.click();
    await this.addToCartButtons.first().click();

    await this.zaraProduct.click();
    await this.addToCartButtons.nth(1).click();

    await this.iphoneProduct.click();
    await this.addToCartButtons.nth(2).click();
  }

  async openCart() {
    await this.cartButton.click();
  }
}


export class CartPage {
  readonly page: Page;
  readonly cartHeading: Locator;
  readonly adidasProduct: Locator;
  readonly zaraProduct: Locator;
  readonly nextButtons: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartHeading = page.getByRole('heading', {
      name: 'My Cart'
    });

    this.adidasProduct = page.getByRole('heading', {
      name: 'ADIDAS ORIGINAL'
    });

    this.zaraProduct = page.getByRole('heading', {
      name: 'ZARA COAT'
    });

    this.nextButtons = page.getByRole('button', {
      name: '❯'
    });
  }

  async verifyCartPage() {
    await this.cartHeading.click();
  }

  async removeAdidas() {
    await this.adidasProduct.click();
    await this.nextButtons.nth(2).click();
  }

  async removeZaraCoat() {
    await this.zaraProduct.click();
    await this.nextButtons.nth(2).click();
  }
}