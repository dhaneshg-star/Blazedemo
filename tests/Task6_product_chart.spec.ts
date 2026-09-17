import { test } from '@playwright/test';
import { ProductCartPage } from '../pages/product_chart';
test.describe('Login and Product Cart Workflow', () => {
test('Login and add three products to cart', async ({ page }) => {
const productCartPage = new ProductCartPage(page);
await productCartPage.navigateToLoginPage();
await productCartPage.login(
process.env.LOGIN_EMAIL!,
process.env.LOGIN_PASSWORD!
);
await productCartPage.addThreeProductsToCart();
});
});