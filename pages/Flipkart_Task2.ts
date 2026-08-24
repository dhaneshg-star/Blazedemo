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
  pressEnter = () => this.page.keyboard.press('Enter');
}