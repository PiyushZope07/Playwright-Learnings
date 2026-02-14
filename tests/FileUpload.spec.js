import {test,expect} from '@playwright/test';

test('Single File Upload',async({page})=>{
    await page.goto('https://practice.expandtesting.com/upload');

    const fileInput=await page.locator('#fileInput');

    await fileInput.setInputFiles("TestFiles/playwright-report.zip");
    await page.click('#fileSubmit');

    await expect(page.locator('.breadcrumb')).toContainText("File Uploaded!");
});

// test.only('Multiple File Upload',async({page})=>{
//     await page.goto('https://practice.expandtesting.com/upload');

//     const fileInput=await page.locator('#fileInput');

//     await fileInput.setInputFiles(['TestFiles/Sample.zip','TestFiles/playwright-report.zip']);
//     await page.click('#fileSubmit');

//     await expect(page.locator('.breadcrumb')).toContainText("File Uploaded!");

// });
