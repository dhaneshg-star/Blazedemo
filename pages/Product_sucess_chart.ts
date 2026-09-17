import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.email = page.getByRole('textbox', {
      name: 'email@example.com'
    });

    this.password = page.getByRole('textbox', {
      name: 'enter your passsword'
    });

    this.loginButton = page.getByRole('button', {
      name: 'Login'
    });
  }

  async navigateToLoginPage() {
    await this.page.goto(
      process.env.New_Url! 
    );
  }

  async login(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}


export class ProductPage {
  readonly page: Page;
  readonly adidas: Locator;
  readonly zaraCoat: Locator;
  readonly iphone: Locator;
  readonly addToCartButtons: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.adidas = page.getByText('ADIDAS ORIGINAL');
    this.zaraCoat = page.getByText('ZARA COAT');
    this.iphone = page.getByText('iphone 13 pro');

    this.addToCartButtons = page.getByRole('button', {
      name: ' Add To Cart'
    });

    this.cartButton = page.getByRole('button', {
      name: '   Cart'
    });
  }

  async addAdidasToCart() {
    await this.adidas.click();
    await this.addToCartButtons.first().click();
  }

  async addZaraCoatToCart() {
    await this.zaraCoat.click();
    await this.addToCartButtons.nth(1).click();
  }

  async addIphoneToCart() {
    await this.iphone.click();
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
  readonly iphoneProduct: Locator;

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

    this.iphoneProduct = page.getByRole('heading', {
      name: 'iphone 13 pro'
    });
  }

  async verifyCartProducts() {
    await this.adidasProduct.click();
    await this.zaraProduct.click();
    await this.iphoneProduct.click();
  }
}