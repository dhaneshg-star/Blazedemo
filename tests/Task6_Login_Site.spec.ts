import { test,expect } from '@playwright/test';
import { LoginPage } from '../pages/Login_site';
test.describe('Login Test Scenarios', () => {
// 1. valid Login
test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.enterEmail(process.env.LOGIN_EMAIL!);
    await loginPage.enterPassword(process.env.LOGIN_PASSWORD!);
    await loginPage.clickLogin();
    console.log('Able to Login');
});
    // 2. Invalid Password
    test('Login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.enterEmail(process.env.LOGIN_EMAIL!);
    await loginPage.enterPassword('WrongPassword@123');
    await loginPage.clickLogin();
    console.log('Unable to Login');
    // await expect(page.getByText('Incorrect email or password.')).toBeVisible();
    });

    // 3. Both Credentials Invalid
    test('Login with invalid email and invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.enterEmail('invaliduser@gmail.com');
    await loginPage.enterPassword('WrongPassword@123');
    await loginPage.clickLogin();
    console.log('Unable to Login');
    });

     // 4. Empty Email
    test('Login with empty email', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.enterEmail('');
    await loginPage.enterPassword(process.env.LOGIN_PASSWORD!);
    await loginPage.clickLogin();
        // Browser validation
        await expect(loginPage.emailInput).toBeVisible();
        await expect(page).toHaveURL(/auth\/login/);
        console.log('unable to Login "Email" is required');
    });


     // 5. Empty Password
    test('Login with empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.enterEmail(process.env.LOGIN_EMAIL!);
    await loginPage.enterPassword('');
    await loginPage.clickLogin();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(page).toHaveURL(/auth\/login/);
    console.log('unable to Login "Password" is required');
    });


    // 6. Invalid Email Format
    test('Login with invalid email format', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.enterEmail('invalid-email');
        await loginPage.enterPassword(process.env.LOGIN_PASSWORD!);
        await loginPage.clickLogin();
        await expect(page).toHaveURL(/auth\/login/);
        console.log('unable to Login "Entered invalid email format" ');
    });


    // 7. Session Validation
    test('Validate user session after successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
     await loginPage.navigateToLoginPage();
    await loginPage.login(
            process.env.LOGIN_EMAIL!,
            process.env.LOGIN_PASSWORD!
        );

        // Verify login was successful
        await expect(page).not.toHaveURL(/auth\/login/);

        // Refresh the page
        await page.reload();

        // Verify user is still logged in
        await expect(page).not.toHaveURL(/auth\/login/);
    });

});