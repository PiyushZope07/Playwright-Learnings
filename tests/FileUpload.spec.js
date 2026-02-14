import {test,expect} from '@playwright/test';

test('File Upload',async({page})=>{
    await page.goto('https://practice.expandtesting.com/upload');

    const fileInput=await page.locator('#fileInput');

    const filePath=process.cwd()+"\\TestFiles\\playwright-report.zip";

    await fileInput.setInputFiles(filePath);
    await page.click('#fileSubmit');

    await expect(page.locator('.breadcrumb')).toContainText("File Uploaded!");
});