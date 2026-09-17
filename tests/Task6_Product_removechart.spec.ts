import { test } from '@playwright/test';
import {LoginPage,ProductPage,CartPage} from '../pages/Product_remove';

test.describe('Login and Product Cart Workflow', () => {
  test('Login, add products and remove products', async ({ page }) => {
    // Login
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(
      'dhanesh.g@xminds.com',
      'Xminds@123'
    );
    console.log('Login successful');

    // Add products
    const productPage = new ProductPage(page);
    await productPage.addProductsToCart();
    console.log('Three products added to cart');

    // Open cart
    await productPage.openCart();
    console.log('Cart page opened');


    // Cart
    const cartPage = new CartPage(page);
    await cartPage.verifyCartPage();
    console.log('My Cart page opened');


    // Remove Adidas
    await cartPage.removeAdidas();
    console.log('Adidas product removed');


    // Remove Zara Coat
    await cartPage.removeZaraCoat();
    console.log('Zara Coat removed');
  });

});