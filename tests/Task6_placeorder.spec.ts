import { test, expect } from '@playwright/test';
import {
  LoginPage,
  ProductPage,
  CartPage,
  CheckoutPage,
  ConfirmationPage,
} from '../pages/Task6_orderplace';

test('Place Zara Coat order successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const confirmationPage = new ConfirmationPage(page);

  await page.goto(
    'https://rahulshettyacademy.com/client/#/auth/login'
  );

  // Login
  await loginPage.login(
    'dhanesh.g@xminds.com',
    'Xminds@123'
  );

  // Add product to cart
  await productPage.addProductToCart();

  // Go to cart
  await productPage.goToCart();

  // Checkout
  await cartPage.checkout();

  // Enter payment details
  await checkoutPage.enterCardDetails(
    '4542 9931 9292 22933',
    '12',
    '30',
    '123'
  );

  // Select country
  await checkoutPage.selectCountry('India');

  // Place order
  await checkoutPage.placeOrder();

  // Verify order confirmation
  await expect(
    confirmationPage.confirmationMessage
  ).toBeVisible();

  await expect(
    confirmationPage.confirmationMessage
  ).toHaveText('Thankyou for the order.');
});
