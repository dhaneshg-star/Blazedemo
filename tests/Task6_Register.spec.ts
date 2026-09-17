import { test } from '@playwright/test';
import { RegisterLoginPage } from '../pages/Task6_register';

test('Register and Login User', async ({ page }) => {
 
  const registerLoginPage = new RegisterLoginPage(page);

  // Open registration page
  await registerLoginPage.gotoRegisterPage();

  // Register user
  await registerLoginPage.registerUser();

  // Verify account created
  await registerLoginPage.verifyAccountCreated();

  // Click Login
  await registerLoginPage.clickLoginButton();

  // Login with registered user
  await registerLoginPage.loginUser();
});