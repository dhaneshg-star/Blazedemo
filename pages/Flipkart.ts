import { Page } from '@playwright/test';

export class FlipkartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  closePopup = () =>
    this.page.getByRole('button', { name: '✕' });

  searchBox = () =>
    this.page.getByRole('textbox', {
      name: 'Search for Products, Brands',
    });

  searchSuggestion = () =>
    this.page.getByRole('link', {
      name: 'apple iphone 16 plus black 128 gb',
      exact: true,
    });

  firstProduct = () =>
    this.page.locator('.jIjQ8S').first();

  // Methods

  async openFlipkart() {
    await this.page.goto('https://www.flipkart.com/');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000);
  }

  async closeLoginPopup() {
    if (await this.closePopup().isVisible()) {
      await this.closePopup().click();
      await this.page.waitForTimeout(2000);
    }
  }

  async searchProduct(product: string) {
    await this.searchBox().click();
    await this.page.waitForTimeout(2000);

    await this.searchBox().fill(product);
    await this.page.waitForTimeout(2000);
  }

  async selectSuggestion() {
    await this.searchSuggestion().click();
    await this.page.waitForTimeout(2000);
  }

  async openFirstProduct() {
    const pagePromise = this.page.waitForEvent('popup');

    await this.firstProduct().click();
    await this.page.waitForTimeout(2000);

    const productPage = await pagePromise;

    await productPage.waitForLoadState('domcontentloaded');
    await productPage.waitForTimeout(2000);

    return productPage;
  }
}