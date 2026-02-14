import {test,expect} from '@playwright/test';

test('Static Dropdown',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const dropdown="#dropdown-class-example";

    await page.locator(dropdown).selectOption("Option1");
    //await page.locator(dropdown).selectOption("Option1");
    //await page.locator(dropdown).selectOption({index:2});
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
    await expect(dropdownOptions.includes("Option2")).toBeTruthy();

});

test('Multi Select Dropdown',async({page})=>{
    await page.goto('https://demoqa.com/select-menu');

    await page.locator('#cars').selectOption(['Saab','Opel']);

    //Count
    await expect(page.locator('#cars option')).toHaveCount(4);

    //presence of value in dropdown
    const dropdownOptions=await page.locator('#cars option').allTextContents();
    await expect(dropdownOptions).toContain("Opel");

    //equal
    await expect(dropdownOptions).toEqual(['Volvo','Saab','Opel','Audi']);
    await expect(dropdownOptions.includes("Opel")).toBeTruthy();

});

test.skip('Auto Dropdown',async({page})=>{
    await page.goto('https://www.amazon.in/');

    await page.getByPlaceholder("Search Amazon.in").pressSequentially("iphone 14 pro max case")

    const dropdownList=await page.$$(".left-pane-results-container")


    for(const dr of dropdownList){
        const alloptionText=await dr.textContent();
        if(alloptionText.includes("iphone 14 pro max case")){
            await dr.click();
            break;
        }
    }

    const enteredText =await page.locator("#twotabsearchtextbox").inputValue();
    await expect(enteredText).toContain("iphone 14 pro max case");
});