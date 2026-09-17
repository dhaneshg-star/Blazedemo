import { test, expect } from '@playwright/test';
import {LoginPage,ProductPage,CartPage} from '../pages/Product_sucess_chart';
test.describe('Login and Product Cart Workflow', () => {
  test('Login, add three products and verify cart', async ({ page }) => {
    // Login
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(process.env.LOGIN_EMAIL!,process.env.LOGIN_PASSWORD!);
    console.log('Login successful');

    // Products
    const productPage = new ProductPage(page);

    await productPage.addAdidasToCart();
    await productPage.addZaraCoatToCart();
    await productPage.addIphoneToCart();
    console.log('Three products added to cart');

    // Open Cart
    await productPage.openCart();

    // Cart verification
    const cartPage = new CartPage(page);
    await expect(cartPage.cartHeading).toBeVisible();
    console.log('cart heading visible');
    await expect(cartPage.adidasProduct).toBeVisible();
    await expect(cartPage.zaraProduct).toBeVisible();
    await expect(cartPage.iphoneProduct).toBeVisible();
    console.log('All three products are visible in cart');
  });
});