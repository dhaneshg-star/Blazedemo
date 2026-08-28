import { Page, Locator } from '@playwright/test';
export class CheckboxPage {
  readonly page: Page;
  readonly practiceHeading: Locator;
  readonly checkboxExample: Locator;
  readonly option1: Locator;
  readonly option2: Locator;
  readonly option3: Locator;
  constructor(page: Page) {
    this.page = page;
    this.practiceHeading = page.getByRole('heading', {
      name: 'Practice Page'
    });
    this.checkboxExample = page.getByText('Checkbox Example');
    this.option1 = page.locator('#checkBoxOption1');
    this.option2 = page.locator('#checkBoxOption2');
    this.option3 = page.locator('#checkBoxOption3');
  }
  async clickPracticeHeading() {
    await this.practiceHeading.click();
  }
  async clickCheckboxExample() {
    await this.checkboxExample.click();
  }
  async checkOption1() {
    await this.option1.check();
  }
  async checkOption2() {
    await this.option2.check();
  }
  async checkOption3() {
    await this.option3.check();
  }
  async uncheckOption1() {
    await this.option1.uncheck();
  }
  async uncheckOption2() {
    await this.option2.uncheck();
  }
  async uncheckOption3() {
    await this.option3.uncheck();
  }
}

