import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/Task6_shopping';
import dotenv from 'dotenv';

// Load .env file
dotenv.config();

test('Login and view Adidas product', async ({ page }) => {

  const productPage = new ProductPage(page);

  // Open application using URL from .env
  await page.goto(process.env.New_Url!);

  // Login
  await productPage.login(
    'dhanesh.g@xminds.com',
    'Xminds@123'
  );

  // Open Adidas product
  await productPage.openAdidasProduct();

  // Click View
  await productPage.clickView();

  // Click product image
  await productPage.clickProductImage();

  // Verify Adidas product heading
  await expect(
    page.getByRole('heading', { name: 'ADIDAS ORIGINAL' })
  ).toBeVisible();

  // Continue shopping
  await productPage.continueShopping();
});
