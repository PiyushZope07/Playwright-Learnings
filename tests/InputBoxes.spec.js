import {test,expect} from '@playwright/test';

test('Input Box',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")

    await page.getByPlaceholder("Please enter first value").fill("10");

    await page.locator("#sum2").fill("20");

    await expect(page.getByRole('button', { name: 'Get Sum' })).toBeVisible();

    await page.getByRole('button', { name: 'Get Sum' }).click();

    // await page.waitForTimeout(2000);

    // await expect(page.locator("#addmessage")).toBeVisible();

    // await expect(page.locator("#addmessage")).toHaveText("30")

})