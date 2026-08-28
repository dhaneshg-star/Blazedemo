import { Page } from '@playwright/test';
export class FlipkartPage {
  constructor(private page: Page) {}
  closePopup() {
    return this.page.getByRole('button', { name: '✕' });
  }
  searchBox() {
    return this.page.getByRole('textbox');
  }
  pressEnter() {
    return this.searchBox().press('Enter');
  }
  addToCompare() {
    return this.page
      .locator('span:has-text("Add to Compare")')
      .first();
  }
}
