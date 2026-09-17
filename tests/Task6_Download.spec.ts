import { test, expect } from '@playwright/test';
import {
  LoginPage,
  ProductPage,
  CartPage,
  CheckoutPage,
  ConfirmationPage,
} from '../pages/Task6_orderplace';

import { OrderDownloadPage } from '../pages/Task6_Download';

test('Place Zara Coat order and download order details', async ({ page }) => {

  // Create Page Objects
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const confirmationPage = new ConfirmationPage(page);
  const orderDownloadPage = new OrderDownloadPage(page);

  // Open application
  await page.goto(
    'https://rahulshettyacademy.com/client/#/auth/login'
  );

  // Login
  await loginPage.login(
    'dhanesh.g@xminds.com',
    'Xminds@123'
  );

  console.log('Login successful');

  // Add Zara Coat to cart
  await productPage.addProductToCart();

  console.log('Zara Coat added to cart');

  // Go to cart
  await productPage.goToCart();

  console.log('Cart page opened');

  // Checkout
  await cartPage.checkout();

  console.log('Checkout page opened');

  // Enter payment details
  await checkoutPage.enterCardDetails(
    '4542 9931 9292 22933',
    '12',
    '30',
    '123'
  );

  // Select country
  await checkoutPage.selectCountry('India');

  console.log('Country selected');

  // Place order
  await checkoutPage.placeOrder();

  console.log('Order placed successfully');

  // Verify order confirmation
  await expect(
    confirmationPage.confirmationMessage
  ).toBeVisible();

  await expect(
    confirmationPage.confirmationMessage
  ).toHaveText('Thankyou for the order.');

  console.log('Order confirmation message verified');

  // Download order details
  const download = await orderDownloadPage.downloadOrder();

  // Verify download
  expect(download).toBeTruthy();

  console.log('Order details downloaded successfully');
});