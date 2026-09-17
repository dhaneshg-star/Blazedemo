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
        await this.page.goto(process.env.New_Url!);
    }
    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }
    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }
    async clickLogin() {
        await this.loginButton.click();
        await this.page.waitForTimeout(3000);
    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async clearEmail() {
        await this.emailInput.fill('');
    }

    async clearPassword() {
        await this.passwordInput.fill('');
    }
}