import { test, expect } from '@playwright/test';
test('Handle JavaScript Prompt', async ({ page }) => {
test.setTimeout(300000);
  // Navigate to the application
  await page.goto('http://the-internet.herokuapp.com/javascript_alerts');
  console.log('Site reached');
  await page.waitForTimeout(2000);

  // Click the heading
  await page.getByRole('heading', { name: 'JavaScript Alerts' }).click();
  console.log('Heading: JavaScript Alerts');
  await page.waitForTimeout(2000);

  // Click the description
  await page.getByText('Here are some examples of').click();
  console.log('Description clicked');
  await page.waitForTimeout(2000);

  //Print a separator
console.log('====================================');
console.log('Starting JS prompt - "Helo" with "ok" button');
console.log('====================================');

  // Handle the JS Prompt
  page.once('dialog', async dialog => {
    console.log('click for Js prompt button');
    console.log(`Dialog message: ${dialog.message()}`);
    await page.waitForTimeout(2000);
    await dialog.accept('Helo');
    console.log('Enter box :- "Helo"');
    await page.waitForTimeout(2000); // Enter text and click OK
  });

  // Click the JS Prompt button
  await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
  console.log('click the "Ok" button');
  await page.waitForTimeout(2000);

  // Verify the result
  await expect(page.locator('#result')).toHaveText('You entered: Helo');
  console.log('The Result: You entered: Helo');
 await page.waitForTimeout(2000);

//verify the page reload
    await page.reload();
    await page.waitForTimeout(2000);

// Print a separator
console.log('====================================');
console.log('Starting JS prompt - "Helo" with Cancel button');
console.log('====================================');
// Handle the JS Prompt
  page.once('dialog', async dialog => {
    console.log('click for Js prompt button');
    console.log(`Dialog message: ${dialog.message()}`);
    await page.waitForTimeout(2000);
    await dialog.dismiss(); 
    console.log('Enter box :- "Helo"');
    await page.waitForTimeout(2000);// Click Cancel
  });

  // Click the JS Prompt button
  await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
  console.log('click the "cancel" button');
  await page.waitForTimeout(2000);

  // Verify the result
  await expect(page.locator('#result')).toHaveText('You entered: null');
  console.log('The Result: You entered: null');
  await page.waitForTimeout(2000);

//verify the page reload
    await page.reload();
    await page.waitForTimeout(2000);

 // Print a separator
console.log('====================================');
console.log('Starting JS prompt - "noting given" with "ok" button');
console.log('====================================');


  page.once('dialog', async dialog => {
  console.log('click for Js prompt button');
  console.log(`Dialog message: ${dialog.message()}`);
  await page.waitForTimeout(2000);
  await dialog.dismiss(); 
  console.log('Enter box :- ""');// Click ok
  });

  await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
  console.log('click the "Ok" buttom');
  await page.waitForTimeout(2000);

  // Verify the result
  await expect(page.locator('#result')).toHaveText('You entered: null'); 
  console.log('The Result: You entered: ');
  await page.waitForTimeout(2000); 

  //verify the page reload
    await page.reload();
    await page.waitForTimeout(2000);
  
  // Print a separator
console.log('====================================');
console.log('Starting JS prompt - "noting given" with "cancel" button');
console.log('====================================');

page.once('dialog', async dialog => {
console.log('click for Js prompt button');    
console.log(`Dialog message: ${dialog.message()}`);
await page.waitForTimeout(2000);
await dialog.dismiss();
console.log('Enter box :- ""'); // Click Cancel
    });

await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
console.log('click the "cancel" buttom');
await page.waitForTimeout(2000);

    await expect(page.locator('#result')).toHaveText('You entered: null');
    console.log('The Result :- You entered "null"');

});
