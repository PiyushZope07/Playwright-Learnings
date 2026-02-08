import {test,expect} from '@playwright/test';

test('Static Dropdown',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const dropdown="#dropdown-class-example";

    await page.locator(dropdown).selectOption("Option1");
    await expect(page.locator(dropdown)).toHaveValue("option1")

    //Assert Dropdown options`
    const options="#dropdown-class-example option";

    //1. Check total number of options in dropdown using count
    await expect(page.locator(options)).toHaveCount(4);

    //2. Check total number of options in dropdown using length
    const Moptions=await page.$$("//*[@id='dropdown-class-example']//option");
    await expect(Moptions.length).toBe(4);

    //3. Check dropdown options text using textContent
    const dropdownOptions=await page.locator(options).allTextContents();
    await expect(dropdownOptions).toEqual(["Select","Option1","Option2","Option3"]);

    //4. presence  of valuer in dropdown - Approach 1
    const alldropdown=await page.locator('#dropdown-class-example option').allTextContents();
    await expect(alldropdown).toContain("Option2");

    //5. presence  of valuer in dropdown - Approach 2
    const alloption=await page.$$(dropdownOptions);
    await expect(alloption.includes("Option2")).toBeTruthy();

});