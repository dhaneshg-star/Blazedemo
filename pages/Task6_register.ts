import { Page, expect } from '@playwright/test';

export class RegisterLoginPage {
  readonly page: Page;

  // Dynamic email
  readonly email: string;

  // Registration locators
  readonly firstNameInput;
  readonly lastNameInput;
  readonly emailInput;
  readonly phoneInput;
  readonly occupationDropdown;
  readonly maleRadio;
  readonly passwordInput;
  readonly confirmPasswordInput;
  readonly ageCheckbox;
  readonly registerButton;

  // Login locators
  readonly loginButton;
  readonly loginEmailInput;
  readonly loginPasswordInput;

  constructor(page: Page) {
    this.page = page;

    // Generate unique email for every test run
    this.email = `Dhanesh.g+${Date.now()}@xminds.com`;

    // Registration
    this.firstNameInput = page.getByRole('textbox', {
      name: 'First Name'
    });

    this.lastNameInput = page.getByRole('textbox', {
      name: 'Last Name'
    });

    this.emailInput = page.getByRole('textbox', {
      name: 'email@example.com'
    });

    this.phoneInput = page.getByRole('textbox', {
      name: 'enter your number'
    });

    this.occupationDropdown = page.getByRole('combobox');

    this.maleRadio = page.getByRole('radio', {
      name: 'Male',
      exact: true
    });

    this.passwordInput = page.getByRole('textbox', {
      name: 'Passsword'
    });

    this.confirmPasswordInput = page.getByRole('textbox', {
      name: 'Confirm Password'
    });

    this.ageCheckbox = page.getByRole('checkbox');

    this.registerButton = page.getByRole('button', {
      name: 'Register'
    });

    // Login
    this.loginButton = page.getByRole('button', {
      name: 'Login'
    });

    this.loginEmailInput = page.getByRole('textbox', {
      name: 'email@example.com'
    });

    this.loginPasswordInput = page.getByRole('textbox', {
      name: 'enter your passsword'
    });
  }

  async gotoRegisterPage() {
    await this.page.goto(
      'https://rahulshettyacademy.com/client/#/auth/register'
    );
  }

  async registerUser() {
    await this.firstNameInput.fill('User name1');

    await this.lastNameInput.fill('Last name 1');

    // Use dynamically generated email
    await this.emailInput.fill(this.email);

    await this.phoneInput.fill('8281881193');

    await this.occupationDropdown.selectOption('4: Scientist');

    await this.maleRadio.check();

    await this.passwordInput.fill('Xminds@123');

    await this.confirmPasswordInput.fill('Xminds@123');

    await this.ageCheckbox.check();

    await this.registerButton.click();
  }

  async verifyAccountCreated() {
    await expect(
      this.page.getByText('Account Created Successfully', {
        exact: true
      })
    ).toBeVisible({
      timeout: 10000
    });
  }

  async clickLoginButton() {
    await this.loginButton.click();
  await this.page.waitForTimeout(Number(process.env.WAIT_TIME));
}
  

  async loginUser() {
    // Use the SAME email that was used during registration
    await this.loginEmailInput.fill(this.email);
    await this.loginPasswordInput.fill('Xminds@123');
    await this.loginButton.click();
    await this.page.waitForTimeout(5000);
  }
}

